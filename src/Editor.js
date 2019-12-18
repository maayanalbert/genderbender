import React, { Component } from "react";
import bend, {
  getNamedEntities,
  markText,
  seperateWords
} from "./genderBender.js";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

import $ from "jquery";
import scrollIntoView from "scroll-into-view";
import getBios from "./bios.js";
import prideAndPredjudice from "./books.js";
import Alert from "react-bootstrap/Alert";
import Overlay from "react-bootstrap/Overlay";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Popover from "react-bootstrap/Popover";

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      replacedDict: {},
      animating: false,
      fontSize: 32,
      title: "",
      alerting: false,
      curColor:0
    };
    this.colors = ["rgb(143, 95, 228)", 
    this.getIntermediary(143, 95, 228, 56, 154, 231, 2),
    "rgb(56,154,231)", 
    this.getIntermediary(56, 154, 231, 61, 197, 124, 2),
     "rgb(56,154,231)", 
    this.getIntermediary(143, 95, 228, 56, 154, 231, 2)]
  }

  getIntermediary(r1, g1, b1, r2, g2, b2, rate){
  	return `rgb(${r1- ((r1-r2)/rate)}, ${g1- ((g1-g2)/rate)}, ${b1- ((b1-b2)/rate)})`
  }

  animate(replacedWordsString) {

    markText(
      document.getElementById("textArea"),
      replacedWordsString,
      "rgb(255, 255, 255)",
      0
    );
    markText(
      document.getElementById("title"),
      replacedWordsString,
      "rgba(255, 255, 255, .4)",
      1
    );
    setTimeout(() => {
      this.setState({ animating: false });
    }, 1500);
  }

  bendText() {
    var firstNamedEntities = getNamedEntities(this.state.text);
    var result = bend(this.state.text, firstNamedEntities);
    var replacedDict = result[1];

    var titleResult = bend(this.state.title, firstNamedEntities);

    for (var newWord in titleResult[1]) {
      replacedDict[newWord] = titleResult[1][newWord];
    }

    var replacedWords = [];
    for (var newWord in replacedDict) {
      replacedWords.push(newWord);
    }

    this.setState({curColor:(this.state.curColor + 1) % this.colors.length}, 
    	() => $('.dynamicBackground').css('background-color', 
    		this.colors[this.state.curColor])
    )

    if (replacedWords.join(" ") === "") {
      this.setState({ alerting: true });
      return;
    }

    this.setState(
      {
        text: result[0],
        replacedDict: replacedDict,
        animating: true,
        title: titleResult[0]
      },
      () => this.animate(replacedWords.join(" "))
    );
  }

  getSeperatedText(fullText, seperator) {
    var lines = fullText.split(seperator);
    var textItems = [];
    for (var i = 0; i < lines.length; i++) {
      textItems.push(
        <a>
          {lines[i]}
          <br />
        </a>
      );
    }
    return textItems;
  }

  renderHiddenTextArea() {
    return (
      <textArea
        id="textAreaHidden"
        class=""
        placeholder="type something..."
        onChange={event => this.handleTextChange(event)}
      >
        {this.state.text}
      </textArea>
    );
  }

  renderTextArea() {
    if (this.state.animating && this.state.text === "") {
      return (
        <div
          id="textArea"
          class=" text-textDark"
          placeholder="type something..."
          autofocus="autofocus"
          style={{ "font-size": this.state.fontSize }}
        >
          type something...
        </div>
      );
    }

    if (this.state.animating) {
      return (
        <div
          id="textArea"
          class=" text-light"
          placeholder="type something..."
          autofocus="autofocus"
          style={{ "font-size": this.state.fontSize }}
        >
          {this.getSeperatedText(this.state.text, "\n")}
        </div>
      );
    }

    return (
      <textArea
        id="textArea"
        class=" text-light"
        placeholder="type something..."
        autofocus="autofocus"
        onChange={event => this.handleTextChange(event)}
        style={{ "font-size": this.state.fontSize }}
      >
        {this.state.text}
      </textArea>
    );
  }

  renderContentTitle() {
    if (this.state.animating) {
      return (
        <h2
          id="title"
          class="text-lightish text-right display-4"
          style={{ position: "fixed", top: "25px", right: "50px" }}
        >
          {this.getSeperatedText(this.state.title, " ")}
        </h2>
      );
    }

    return (
      <h1
        id="title"
        class="text-lightish text-right display-4"
        style={{ position: "fixed", top: "25px", right: "50px" }}
      >
        {this.getSeperatedText(this.state.title, " ")}
      </h1>
    );
  }

  render() {
    return (
      <div class="d-flex justify-content-center ">
      <div style={{zIndex: -1}}> 
        {this.renderHiddenTextArea()}
        </div>
        <div class="dynamicBackground" style={{width: "100%",
  height: "100vh", 
  color:"transparent"}}>hi</div>
          {this.renderTextArea()}
          {this.renderControlBar()}
          {this.renderPrefillToggle()}
          {this.renderContentTitle()}
      </div>
    );
  }

  checkTextSize() {
    var textAreaHidden = document.getElementById("textAreaHidden");
    if (textAreaHidden.scrollHeight > window.innerHeight) {
      var newSize = 20;
      $("#textArea").css("font-size", newSize);
      this.setState({ fontSize: newSize });
    } else if (textAreaHidden.scrollHeight <= window.innerHeight) {
      var newSize = 32;
      $("#textArea").css("font-size", newSize);
      this.setState({ fontSize: newSize });
    }
  }

  handleTextChange(event) {
    this.setState({ text: event.target.value }, () => this.checkTextSize());

    if (event.target.value === "") {
      this.setState({ title: "", replacedDict: {} });
    }
  }

  handleFillReqest(textTitle, text) {
    this.setState(
      { text: text, title: textTitle, animating: true, replacedDict: {} },
      () => {
        this.checkTextSize();
        setTimeout(() => {
          this.setState({ animating: false });
        }, 1);
      }
    );
  }

  replaceWords(text, dict) {
    var textArr = seperateWords(text);
    for (var i = 0; i < textArr.length; i++) {
      var word = textArr[i];
      if (word in dict) {
        textArr[i] = dict[word];
      }
    }

    return textArr.join("");
  }

  unbendText() {
    var replacedWords = [];
    for (var newWord in this.state.replacedDict) {
      var oldWord = this.state.replacedDict[newWord];
      replacedWords.push(oldWord);
    }

    var unbentText = this.replaceWords(
      this.state.text,
      this.state.replacedDict
    );
    var unbentTitle = this.replaceWords(
      this.state.title,
      this.state.replacedDict
    );

    if (this.state.text === unbentText && this.state.title === unbentTitle) {
      this.setState({ alerting: true });
      return;
    }

     this.setState({curColor:(this.state.curColor - 1 + this.colors.length) % this.colors.length}, 
    	() => $('.dynamicBackground').css('background-color', 
    		this.colors[this.state.curColor])
    )

    this.setState(
      {
        replacedDict: {},
        text: unbentText,
        animating: true,
        title: unbentTitle
      },
      () => this.animate(replacedWords.join(" "))
    );
  }

  getDropdownItems(content) {
    var items = [];
    for (var i in content) {
      var itemContent = content[i];
      items.push(
        <Dropdown.Item
          id="toggle"
          onClick={this.handleFillReqest.bind(
            this,
            itemContent.name,
            itemContent.text
          )}
        >
          {itemContent.name}
        </Dropdown.Item>
      );
    }

    return items;
  }

  renderPrefillToggle() {
    var bios = getBios();

    return (
      <div class="row" style={{ position: "fixed", top: "50px", left: "50px" }}>
        <DropdownButton
          title={"Fill with "}
          drop="down"
          variant="outline-lightisher m-1"
          id="toggle"
        >
          <Dropdown.Header id="toggle">Bios</Dropdown.Header>
          {this.getDropdownItems(bios)}
        </DropdownButton>
        <Button
          id="button"
          className="m-1"
          variant="outline-lightisher m-1"
          onClick={() =>
            this.setState(
              { text: "", title: "", animating: true, replacedDict: {} },
              () => {
                this.checkTextSize();
                setTimeout(() => {
                  this.setState({ animating: false });
                }, 1);
              }
            )
          }
          hidden={this.state.title === "" && this.state.text === ""}
        >
          Clear
        </Button>
      </div>
    );
  }

  renderControlBar() {
    // var unbendColor = "outline-purple";
    // if (this.state.replacedDict === {}) {
    //   unbendColor = "outline-fadedPurple";
    // }
    return (
      <div

        class="rounded-lg shadow-lg  row dynamicBackground"
        style={{ position: "fixed", bottom: "10%" }}
      >
       <div
        class="bg-lightBackground p-2 rounded-lg"
        style={{width:"100%", height:"100%"}}
             
      >
        <OverlayTrigger
          trigger="hover"
          placement="top"
          overlay={
            <Tooltip id="alert" hidden={this.state.alerting === false}>
              nothing to unbend :(
            </Tooltip>
          }
        >
          <Button
            id="button"
            className="m-1"
            variant="outline-light"
            size="lg"
            disabled={
              $.isEmptyObject(this.state.replacedDict) || this.state.animating
            }
            onClick={() => this.unbendText()}
            onMouseLeave={() => this.setState({ alerting: false })}
          >
            {" "}
            &#8634;
          </Button>
        </OverlayTrigger>

        <OverlayTrigger
          trigger="hover"
          placement="top"
          overlay={
            <Tooltip id="alert" hidden={this.state.alerting === false}>
              nothing to bend :(
            </Tooltip>
          }
        >
          <Button
            id="button"
            className="m-1"
            variant="outline-light"
            size="lg"
            onClick={() => this.bendText()}
            disabled={
              this.state.animating ||
              (this.state.text === "" && this.state.title === "")
            }
            onMouseLeave={() => this.setState({ alerting: false })}
          >
            Genderbend!
          </Button>
        </OverlayTrigger>
        </div>
      </div>
    );
  }
}
