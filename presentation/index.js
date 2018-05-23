// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  S,
  Image,
  BlockQuote,
  Quote,
  Cite,
  Layout,
  Fill,
  Appear
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const images = {
  tea: require("../assets/tea.jpg"),
  teapick: require("../assets/teapick.jpg"),
  meditation: require("../assets/meditation.jpg"),
  wasmLogo: require("../assets/WebAssembly_Logo.png"),
  compile: require("../assets/compile.png"),
  speed: require("../assets/speed.svg"),
  joinme: require("../assets/jm.svg"),
  lmi: require("../assets/lmi.svg"),
  android: require("../assets/android.svg"),
  goodIdea: require("../assets/goodIdea.png"),
  drawback: require("../assets/drawback.gif"),
  door: require("../assets/door.gif"),
  snoopy: require("../assets/snoopy.png"),
  tech: require("../assets/tech.svg"),
  techHL: require("../assets/techHL.svg"),
  brain: require("../assets/brain.svg"),
  brainHL: require("../assets/brainHL.svg"),
  rust: require("../assets/rust.svg"),
  emscripten: require("../assets/emscripten.png"),
  layers1: require("../assets/layers1.png"),
  layers2: require("../assets/layers2.png"),
  heart: require("../assets/heart.png"),
  win: require("../assets/win.png"),
  ios: require("../assets/ios.png"),
  html5: require("../assets/html5.png"),
  fast: require("../assets/fast.jpg"),
  slow: require("../assets/slow.jpg"),
  connect: require("../assets/connect.jpg"),
  dongle: require("../assets/dongle.jpg"),
  plug: require("../assets/plug.jpg"),
  ports: require("../assets/ports.jpg"),
  corruption: require("../assets/corruption.jpg"),
  tweet: require("../assets/tweet.png"),
  mac: require("../assets/mac.gif")
};

preloader(images);

const theme = createTheme({
  bg: "#dddddd",
  regular: "#60b200",
  highlight: "#ef6a00",
  plain: "#222222",
  white: "#fff"
}, {
  primary: "Rubik",
  secondary: "Helvetica"
});
const colors = theme.screen.colors;
const highlightedHeader = {
  color: colors.highlight,
  fontWeight: "bold"
};
const listStyling = {textSize:"2rem", margin: "25px 0"};
const listStylingBig = {textSize:"2.66rem", margin: "25px 0"};
const listImage = <Image display="inline-block" height="30px" margin="0 10px" style={{ verticalAlign: 'middle' }} src={images.speed} />;
const snoopy = <Image display="inline-block" height="60px" margin="0 10px" style={{ verticalAlign: 'middle' }} src={images.snoopy} />;
const plus = <S type="bold" textSize="3rem" textColor="regular" margin="0 10px">++</S>;
const minus = <S type="bold" textSize="3rem" textColor="highlight" margin="0 10px">--</S>;
const rust = <Image display="inline-block" height="30px" margin="0 10px" style={{ verticalAlign: 'middle' }} src={images.rust} />;
const organizeList = {textColor: "regular", textSize: "2.5rem", padding: "20px"}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        {/* ************************************    ************************************ */}
        <Slide transition={["zoom"]} bgColor="bg">
          <Heading size={1} caps textColor="highlight" textSize="130">
            WebAssembly
          </Heading>
          <Heading size={4} textColor="regular" textSize="60">
            as cross-platform architecture?!
          </Heading>
          <Appear>
            <Heading size={4} textColor="regular" textSize="60" style={{ transform: 'translateY(150px)' }}>
              <S type="bold" textColor="highlight">@</S>
              BenedekGagyi
            </Heading>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.tea} bgSize="contain" bgRepeat="no-repeat"/>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.teapick} />
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.meditation} />
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular" >
            What is
            <Image src={images.wasmLogo} height="300px" display="inline-block" margin="0 20px" style={{ verticalAlign: 'middle' }}/>
            ?
          </Heading>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <BlockQuote>
            <Quote textSize={75} textColor="regular">
              Static-language compiler target low-level portable binary code format.
              <br />
              <S type="" style={highlightedHeader}>Go nuts.</S>
            </Quote>
            <Cite textSize={50} textColor="highlight">Brendan Eich</Cite>
          </BlockQuote>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" >
            A
            <S type="" style={highlightedHeader}> binary </S>
            format
          </Heading>
          <Image display="block" height="500" src={images.compile} />
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" >
            The next step in web
            <S type="" style={highlightedHeader}> performance</S>
          </Heading>
          <List textColor="regular" margin="40px 0 0" style={{ listStyle: 'none' }}>
            <ListItem {...listStyling}>{listImage}inherently compressed</ListItem>
            <ListItem {...listStyling}>{listImage}no interpretation step</ListItem>
            <ListItem {...listStyling}>{listImage}consistent performance</ListItem>
            <ListItem {...listStyling}>{listImage}manual memory management</ListItem>
            <ListItem {...listStyling}>{listImage}CPU features (i64, popcount etc.)</ListItem>
            <ListItem {...listStyling}>{listImage}WASM specific compiler optimizations (Binaryen)</ListItem>
          </List>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.slow}/>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.fast} />
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" >
          <Heading size={1} textColor="highlight" textSize="200px" margin="0 0 50px">
            !
            <Image display="inline-block" height="200px" style={{ verticalAlign: 'bottom'}} src={images.wasmLogo} />
          </Heading>
          <Appear>
            <Text textColor="regular" textSize="4rem">
              <S type="bold" textColor="highlight">! </S>
              solo mission
            </Text>
          </Appear>
          <Appear>
            <Text textColor="regular" textSize="4rem">
              <S type="bold" textColor="highlight">! </S>
              the next Java applet
            </Text>
          </Appear>
          <Appear>
            <Text textColor="regular" textSize="4rem">
              <S type="bold" textColor="highlight">! </S>
              ready yet
            </Text>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <BlockQuote>
            <Quote textSize={75} textColor="regular">
              WebAssembly is a way to run programming languages
              <S type="" style={highlightedHeader}> other </S>
              than JavaScript on web pages.
            </Quote>
            <Cite textSize={50} textColor="highlight">Lin Clark</Cite>
          </BlockQuote>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular">The</Heading>
          <Image src={images.joinme} height="250px"/>
          <Heading size={1} textColor="regular">story</Heading>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
            The evolution of
            <S type="" style={highlightedHeader}> join.</S>
            me
          </Heading>
          <Layout>
            <Fill>
              <Image src={images.win} height="130px" />
            </Fill>
            <Fill>
              <Appear><Image src={images.mac} height="130px" /></Appear>
            </Fill>
          </Layout>
          <Layout>
            <Fill>
              <Appear><Image src={images.android} height="130px" /></Appear>
            </Fill>
            <Fill>
              <Appear>
                <div>
                  <Image src={images.ios} height="130px" />
                </div>
              </Appear>
            </Fill>
          </Layout>
          <Appear>
            <div>
              <Image src={images.html5} height="130px" />
              <Text textColor="regular">2014</Text>
            </div>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={3} textColor="regular">Cross platform solutions?</Heading>
          <Appear>
            <Image display="inline-block" margin={10} src={images.goodIdea} height="250px"/>
          </Appear>
          <Appear>
            <Image display="inline-block" margin={10} src={images.drawback} height="250px"/>
          </Appear>  
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
            The
            <S type="" style={highlightedHeader}> drawbacks </S>
            of cross-platform web development
          </Heading>
          <List type="A" textColor="regular" margin="40px 0 0" style={{ listStyle: 'none' }}>
            <ListItem {...listStyling}>{snoopy}abstraction</ListItem>
            <ListItem {...listStyling}>{snoopy}performance</ListItem>
            <ListItem {...listStyling}>{snoopy}library vs. ecosystem</ListItem>
            <ListItem {...listStyling}>{snoopy}<S type="strikethrough">patent misery</S></ListItem>
            <ListItem {...listStyling}>{snoopy}(can be) and HR nightmare</ListItem>
          </List>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Layout>
            <Fill>
              <Image src={images.joinme} height="200px" />
            </Fill>
            <Fill>
              <S type="" textSize="170px" style={{ color: colors.highlight }}>+</S>
            </Fill>
            <Fill>
              <Image src={images.emscripten} height="200px" />
            </Fill>
            <Fill>
              <S type="" textSize="170px" style={{ color: colors.highlight }}>=</S>
            </Fill>
            <Fill>
              <Image src={images.heart} height="200px" />
            </Fill>
          </Layout>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Layout>
            <Fill>
              <Image src={images.win} height="200px" />
            </Fill>
            <Fill>
              <Image src={images.mac} height="200px" />
            </Fill>
            <Fill>
              <Image src={images.android} height="200px" />
            </Fill>
            <Fill>
              <Image src={images.ios} height="200px" />
            </Fill>
            <Fill>
              <Image src={images.html5} height="200px" />
            </Fill>
          </Layout>
          <Appear>
            <Heading size={4} textColor="white" bgColor="regular" margin="10px" padding="0 10px" lineHeight="2em">
              COMMON
            </Heading>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Layout style={{ alignItems: 'center' }}>
            <Fill>
              <Image src={images.emscripten} height="300px" />
            </Fill>
            <Fill>
              <Text textSize="170px" textColor="regular">==</Text>
            </Fill>
            <Fill>
              <Image src={images.wasmLogo} height="300px" />
            </Fill>
          </Layout>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Text textSize="300px" textColor="regular">-50%</Text>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Layout style={{ alignItems: 'center' }}>
            <Fill>
              <Image src={images.tech} height="400px" />
            </Fill>
            <Fill>
              <Image src={images.brain} height="400px" />
            </Fill>
          </Layout>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Layout style={{ alignItems: 'center' }}>
            <Fill>
              <Image src={images.techHL} height="400px" />
            </Fill>
            <Fill>
              <Image src={images.brain} height="400px" />
            </Fill>
          </Layout>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular">
            C++
          </Heading>
          <Appear>
            <List type="A" textColor="regular" style={{ listStyle: 'none' }}>
              <ListItem {...listStylingBig}>{plus}fluid integration of new platforms</ListItem>
              <ListItem {...listStylingBig}>{plus}the <S type="" textColor="highlight">"right"</S> amount of freedom</ListItem>
            </List>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular">
            C
            <S type="" style={{ color: colors.highlight }}>--</S>
          </Heading>
          <Appear>
            <List type="A" textColor="regular" style={{ listStyle: 'none' }}>
              <ListItem {...listStylingBig}>{minus}slow compilation</ListItem>
              <ListItem {...listStylingBig}>{minus}complex CI</ListItem>
              <ListItem {...listStylingBig}>{minus}high entry barrier for developers</ListItem>
            </List>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin="0 0 50px">
            Does the
            <S type="" style={highlightedHeader}> language </S>
            matter?
          </Heading>
          <Appear>
            <Heading size={6} textColor="white" bgColor="regular" padding="10px" margin="10px">Business logic</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="white" bgColor="highlight" padding="10px" margin="10px">Platform specific stuff</Heading>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.layers1} bgSize="contain" bgRepeat="no-repeat"/>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.layers2} bgSize="contain" bgRepeat="no-repeat"/>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.connect} bgSize="contain" bgRepeat="no-repeat"/>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.ports} bgSize="contain" bgRepeat="no-repeat"/>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.dongle} bgSize="contain" bgRepeat="no-repeat"/>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.plug} bgSize="contain" bgRepeat="no-repeat"/>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular" margin="0 0 50px">
            The contract is
            <S type="" style={highlightedHeader}> sacred</S>
          </Heading>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin="0 0 50px">
            Testing is hard
          </Heading>
          <Image src={images.door} height="16em" />
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin="0 0 50px">
            Tests
          </Heading>
          <Heading size={6} textColor="white" bgColor="regular" padding="10px" margin="10px">Unit tests</Heading>
          <Appear>
            <Heading size={6} textColor="white" bgColor="regular" padding="10px" margin="10px">💸 Integration tests 💸</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="white" bgColor="regular" padding="10px" margin="10px">
              💸💸💸
              <S type="bold" padding="0 90px">E2e tests</S>
              💸💸💸
            </Heading>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular" margin="0 0 50px">
            Good CI is a
            <S type="" style={highlightedHeader}> must</S>
          </Heading>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Layout style={{ alignItems: 'center' }}>
            <Fill>
              <Image src={images.tech} height="400px" />
            </Fill>
            <Fill>
              <Image src={images.brainHL} height="400px" />
            </Fill>
          </Layout>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin="0 0 50px">
            How do we
            <S type="" style={highlightedHeader}> organize</S>
            ?
          </Heading>
          <Layout>
            <Fill>
              <Appear>
                <Heading size={5} textColor="white" bgColor="regular" lineHeight="2em" padding="10px" margin="10px">Feature teams</Heading>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <Heading size={5} textColor="white" bgColor="highlight" padding="10px" margin="10px">X-functional<br />teams</Heading>
              </Appear>
            </Fill>
          </Layout>
          <Appear >
            <div>
              <Layout>
                <Fill>
                  <Text {...organizeList}>product</Text>
                </Fill>
                <Fill>
                <Text {...organizeList}>open source</Text>
                </Fill>
              </Layout>
            </div>
          </Appear>
          <Appear>
            <div>
              <Layout>
                <Fill>
                <Text {...organizeList}>fast, queuing</Text>
                </Fill>
                <Fill>
                  <Text {...organizeList}>slow, democratic</Text>
                </Fill>
              </Layout>
            </div>
          </Appear>
          <Appear>
            <div>
              <Layout>
                <Fill>
                  <Text {...organizeList}>ownership</Text>
                </Fill>
                <Fill>
                  <Text {...organizeList}>estimation</Text>
                </Fill>
              </Layout>
            </div>
          </Appear>
          <Appear>
            <div>
              <Layout>
                <Fill>
                  <Text {...organizeList}>ideal for big steps</Text>
                </Fill>
                <Fill>
                  <Text {...organizeList}>lots of small steps</Text>
                </Fill>
              </Layout>
            </div>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular"  margin="0 0 50px">
            How do we
            <S type="" style={highlightedHeader}> organize</S>
            ?
          </Heading>
          <Heading size={6} textColor="white" bgColor="regular" padding="10px" margin="10px">Trust is key</Heading>
          <Appear>
            <Heading size={6} textColor="white" bgColor="highlight" padding="10px" margin="10px">Scaling is hard</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="white" bgColor="highlight" padding="10px" margin="10px">Communication through PR's: too little, too late</Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="white" bgColor="regular" padding="10px" margin="10px">Diverse team</Heading>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin="0 0 50px">
            How does
            <S type="" style={highlightedHeader}> WASM </S>
            help us?
          </Heading>
          <Appear>
            <Image display="inline-block" height="300px" margin="0 50px" src={images.speed} />
          </Appear>
          <Appear>
            <Image display="inline-block" height="300px" margin="0 50px" src={images.rust} />
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
            Rust
          </Heading>
          <List type="A" textColor="regular" style={{ listStyle: 'none' }}>
            <ListItem{...listStyling}>
              {rust}
              it's a
              <S type="" style={{ color: colors.highlight }}> modern </S>
              language
            </ListItem>
            <ListItem {...listStyling}>{rust}friendly learning curve</ListItem>
            <ListItem {...listStyling}>{rust}super safe: no memory corruptions/null pointers</ListItem>
            <ListItem {...listStyling}>{rust}built with cross-platform in mind</ListItem>
            <ListItem {...listStyling}>{rust}built in unit testing support</ListItem>
            <ListItem {...listStyling}>{rust}great tooling (Cargo)</ListItem>
          </List>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular">
            DEMO
          </Heading>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular" margin="0 0 50px">
            AssemblyScript
          </Heading>
          <Heading size={4} textColor="regular" margin="0 0 30px">
            Daniel Wirtz
          </Heading>
          <Heading size={4} textColor="regular">
            <S type="bold" textColor="highlight">@</S>dcodeIO
          </Heading>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Image display="inline-block" height="80vh" margin="0 50px" src={images.corruption} />
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Image display="inline-block" height="80vh" margin="0 50px" src={images.tweet} />
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <BlockQuote>
            <Quote textSize={75} textColor="highlight">
              <S type="bold" style={{ color: colors.regular }}>Always bet on JavaScript</S>
              <Appear><span> and WASM</span></Appear>
            </Quote>
            <Cite textSize={50} textColor="highlight">Brendan Eich</Cite>
          </BlockQuote>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["zoom"]} bgColor="bg">
          <Heading size={1} fit caps lineHeight={1} textColor="highlight">
            Thank You!
          </Heading>
          <Text margin="10px 0 0" textColor="regular" size={1} fit bold>
            <S type="" style={highlightedHeader}>@</S>
            BenedekGagyi
          </Text>
        </Slide>

        {/* ************************************  END  ************************************ */}
      </Deck>
    );
  }
}
