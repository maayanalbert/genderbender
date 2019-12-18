


export default function getBios(){
	var people = [steveJobs, emilyDickinson, georgeWashington, marilynMonroe, henryThe8th]
	var data = []

	for (var i = 0; i < people.length; i++){
		var result = people[i]()
		data.push({name: result[0], text: result[1]})
	}
	return data
}

function steveJobs() {


var name = "Steve Jobs"
var text =
(`Steven Paul Jobs (February 24, 1955 – October 5, 2011) was an American business magnate, entrepreneur, industrial designer, investor, and media proprietor. He was the chairman, chief executive officer (CEO), and co-founder of Apple Inc., the chairman and majority shareholder of Pixar, a member of The Walt Disney Company's board of directors following its acquisition of Pixar, and the founder, chairman, and CEO of NeXT. Jobs is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with Apple co-founder Steve Wozniak.

Jobs was born in San Francisco, California, and put up for adoption. He was raised in the San Francisco Bay Area. He attended Reed College in 1972 before dropping out that same year, and traveled through India in 1974 seeking enlightenment and studying Zen Buddhism. His declassified FBI report states that he used marijuana and LSD while he was in college, and once told a reporter that taking LSD was 'one of the two or three most important things' he had done in his life.

Jobs and Wozniak co-founded Apple in 1976 to sell Wozniak's Apple I personal computer. Together the duo gained fame and wealth a year later with the Apple II, one of the first highly successful mass-produced microcomputers. Jobs saw the commercial potential of the Xerox Alto in 1979, which was mouse-driven and had a graphical user interface (GUI). This led to development of the unsuccessful Apple Lisa in 1983, followed by the breakthrough Macintosh in 1984, the first mass-produced computer with a GUI. The Macintosh introduced the desktop publishing industry in 1985 with the addition of the Apple LaserWriter, the first laser printer to feature vector graphics. Jobs was forced out of Apple in 1985 after a long power struggle with the company's board and its then-CEO John Sculley. That same year, Jobs took a few of Apple's members with him to found NeXT, a computer platform development company that specialized in computers for higher-education and business markets. In addition, he helped to develop the visual effects industry when he funded the computer graphics division of George Lucas's Lucasfilm in 1986. The new company was Pixar, which produced the first 3D computer animated film Toy Story (1995).

Apple merged with NeXT in 1997, and Jobs became CEO of his former company within a few months. He was largely responsible for helping revive Apple, which had been at the verge of bankruptcy. He worked closely with designer Jony Ive to develop a line of products that had larger cultural ramifications, beginning in 1997 with the 'Think different' advertising campaign and leading to the iMac, iTunes, iTunes Store, Apple Store, iPod, iPhone, App Store, and the iPad. In 2001, the original Mac OS was replaced with a completely new Mac OS X, based on NeXT's NeXTSTEP platform, giving the OS a modern Unix-based foundation for the first time. Jobs was diagnosed with a pancreatic neuroendocrine tumor in 2003. He died of respiratory arrest related to the tumor at age 56 on October 5, 2011.`)

return [name, text]
}

function emilyDickinson() {

var name = "Emily Dickinson"
var text =
`Emily Elizabeth Dickinson (December 10, 1830 – May 15, 1886) was an American poet.

Dickinson was born in Amherst, Massachusetts, into a prominent family with strong ties to its community. After studying at the Amherst Academy for seven years in her youth, she briefly attended the Mount Holyoke Female Seminary before returning to her family's house in Amherst.

Evidence suggests that Dickinson lived much of her life in isolation. Considered an eccentric by locals, she developed a penchant for white clothing and was known for her reluctance to greet guests or, later in life, to even leave her bedroom. Dickinson never married, and most friendships between her and others depended entirely upon correspondence.

While Dickinson was a prolific poet, fewer than a dozen of her nearly 1,800 poems were published during her lifetime.[3] The poems published then were usually edited significantly to fit conventional poetic rules. Her poems were unique to her era. They contain short lines, typically lack titles, and often use slant rhyme as well as unconventional capitalization and punctuation.[4] Many of her poems deal with themes of death and immortality, two recurring topics in letters to her friends.

Although Dickinson's acquaintances were likely aware of her writing, it was not until after her death in 1886—when Lavinia, Dickinson's younger sister, discovered her cache of poems—that the breadth of her work became public. Her first collection of poetry was published in 1890 by personal acquaintances Thomas Wentworth Higginson and Mabel Loomis Todd, though both heavily edited the content. A 1998 New York Times article revealed that of the many edits made to Dickinson's work, the name 'Susan' was often deliberately removed. At least eleven of Dickinson's poems were dedicated to sister-in-law Susan Huntington Gilbert Dickinson, though all the dedications were obliterated, presumably by Todd.[5] A complete, and mostly unaltered, collection of her poetry became available for the first time when scholar Thomas H. Johnson published The Poems of Emily Dickinson in 1955.`

return [name, text]
}

function georgeWashington() {

var name = "George Washington"
var text =
`George Washington (February 22, 1732[b][c] – December 14, 1799) was an American political leader, military general, statesman, and Founding Father who served as the first president of the United States from 1789 to 1797. Previously, he led Patriot forces to victory in the nation's War for Independence. He presided at the Constitutional Convention of 1787 which established the U.S. Constitution and a federal government. Washington has been called the 'Father of His Country' for his manifold leadership in the formative days of the new nation.

Washington received his initial military training and command with the Virginia Regiment during the French and Indian War. He was later elected to the Virginia House of Burgesses and was named a delegate to the Continental Congress, where he was appointed Commanding General of the Continental Army. He commanded American forces, allied with France, in the defeat and surrender of the British during the Siege of Yorktown, and resigned his commission in 1783 after the signing of the Treaty of Paris.

Washington played a key role in the adoption and ratification of the Constitution and was then elected president by the Electoral College in the first two elections. He implemented a strong, well-financed national government while remaining impartial in a fierce rivalry between cabinet members Thomas Jefferson and Alexander Hamilton. During the French Revolution, he proclaimed a policy of neutrality while sanctioning the Jay Treaty. He set enduring precedents for the office of president, including the title 'President of the United States', and his Farewell Address is widely regarded as a pre-eminent statement on republicanism.

Washington owned slaves for labor and trading, and supported measures passed by Congress protecting slavery, in order to preserve national unity. He later became troubled with the institution of slavery and freed his slaves in a 1799 will. He endeavored to assimilate Native Americans into Western culture, but responded to their hostility in times of war. He was a member of the Anglican Church and the Freemasons, and he urged broad religious freedom in his roles as general and president. Upon his death, he was eulogized as 'first in war, first in peace, and first in the hearts of his countrymen.' He has been memorialized by monuments, art, geographical locations, stamps, and currency, and many scholars and polls rank him among the greatest American presidents.came available for the first time when scholar Thomas H. Johnson published The Poems of Emily Dickinson in 1955.`

return [name, text]
}

function marilynMonroe() {

var name = "Marilyn Monroe"
var text =
`Marilyn Monroe (born Norma Jeane Mortenson; June 1, 1926 – August 4, 1962[1]) was an American actress, model, and singer. Famous for playing comedic 'blonde bombshell' characters, she became one of the most popular sex symbols of the 1950s and early 1960s and was emblematic of the era's changing attitudes towards sexuality. Although she was a top-billed actress for only a decade, her films grossed $200 million (equivalent to $2 billion in 2018) by the time of her unexpected death in 1962.[2] More than half a century later, she continues to be a major popular culture icon.[3

Born and raised in Los Angeles, Monroe spent most of her childhood in foster homes and an orphanage and married at the age of 16. While working in a factory as part of the war effort during World War II, she met a photographer from the First Motion Picture Unit and began a successful pin-up modeling career. The work led to short-lived film contracts with Twentieth Century-Fox and Columbia Pictures. After a series of minor film roles, she signed a new contract with Fox in late 1950. Over the next two years, she became a popular actress with roles in several comedies, including As Young as You Feel and Monkey Business, and in the dramas Clash by Night and Don't Bother to Knock. Monroe faced a scandal when it was revealed that she had posed for nude photos before she became a star, but the story did not damage her career and instead resulted in increased interest in her films

By 1953, Monroe was one of the most marketable Hollywood stars; she had leading roles in the film noir Niagara, which focused on her sex appeal, and the comedies Gentlemen Prefer Blondes and How to Marry a Millionaire, which established her star image as a 'dumb blonde'. The same year, her images were used as the centerfold and on the cover of the first issue of the men's magazine Playboy. Although she played a significant role in the creation and management of her public image throughout her career, she was disappointed when she was typecast and underpaid by the studio. She was briefly suspended in early 1954 for refusing a film project but returned to star in one of the biggest box office successes of her career, The Seven Year Itch (1955)

When the studio was still reluctant to change Monroe's contract, she founded her own film production company in 1954. She dedicated 1955 to building the company and began studying method acting at the Actors Studio. In late 1955, Fox awarded her a new contract, which gave her more control and a larger salary. Her subsequent roles included a critically acclaimed performance in Bus Stop (1956) and her first independent production, The Prince and the Showgirl (1957). Monroe won a Golden Globe for Best Actress for her work in Some Like It Hot (1959), a critical and commercial success. Her last completed film was the drama The Misfits (1961)

Monroe's troubled private life received much attention. She struggled with substance abuse, depression, and anxiety. Her second and third marriages, to retired baseball star Joe DiMaggio and playwright Arthur Miller, were highly publicized and both ended in divorce. On August 4, 1962, she died at age 36 from an overdose of barbiturates at her home in Los Angeles. Although Monroe's death was ruled a probable suicide, several conspiracy theories have been proposed in the decades following her death.`

return [name, text]
}

function henryThe8th() {

var name = "Henry VIII"
var text =
`Henry VIII (28 June 1491 – 28 January 1547) was King of England from 1509 until his death in 1547. He was the second Tudor monarch, succeeding his father Henry VII. Henry is best known for his six marriages, in particular his efforts to have his first marriage (to Catherine of Aragon) annulled. His disagreement with the Pope on the question of such an annulment led Henry to initiate the English Reformation, separating the Church of England from papal authority. He appointed himself the Supreme Head of the Church of England and dissolved convents and monasteries, for which he was excommunicated. Henry is also known as 'the father of the Royal Navy'; he invested heavily in the Navy, increasing its size greatly from a few to more than 50 ships.

Domestically, Henry is known for his radical changes to the English Constitution, ushering in the theory of the divine right of kings. He also greatly expanded royal power during his reign. He frequently used charges of treason and heresy to quell dissent, and those accused were often executed without a formal trial by means of bills of attainder. He achieved many of his political aims through the work of his chief ministers, some of whom were banished or executed when they fell out of his favour. Thomas Wolsey, Thomas More, Thomas Cromwell, Richard Rich, and Thomas Cranmer all figured prominently in his administration.

Henry was an extravagant spender, using the proceeds from the dissolution of the monasteries and acts of the Reformation Parliament. He also converted the money that was formerly paid to Rome into royal revenue. Despite the money from these sources, he was continually on the verge of financial ruin due to his personal extravagance, as well as his numerous costly and largely unsuccessful continental wars, particularly with King Francis I of France and Holy Roman Emperor Charles V. At home, he oversaw the legal union of England and Wales with the Laws in Wales Acts 1535 and 1542, and he was the first English monarch to rule as King of Ireland following the Crown of Ireland Act 1542.

Henry's contemporaries considered him an attractive, educated, and accomplished king. He has been described as 'one of the most charismatic rulers to sit on the English throne'.[1] He was an author and composer. As he aged, however, he became severely obese and his health suffered, contributing to his death in 1547. He is frequently characterised in his later life as a lustful, egotistical, harsh, and insecure king.[2] He was succeeded by his son Edward VI.`

return [name, text]
}

