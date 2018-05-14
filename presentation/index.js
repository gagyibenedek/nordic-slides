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
  wasmLogo: require("../assets/WebAssembly_Logo.png"),
  compile: require("../assets/compile.png"),
  hot: require("../assets/hot.jpg"),
  joinme: require("../assets/jm.svg"),
  lmi: require("../assets/lmi.svg"),
  android: require("../assets/android.svg"),
  emscripten: require("../assets/emscripten.png"),
  heart: require("../assets/heart.png"),
  win: require("../assets/win.png"),
  ios: require("../assets/ios.png"),
  html5: require("../assets/html5.png"),
  fast: require("../assets/fast.jpg"),
  slow: require("../assets/slow.jpg"),
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
        <Slide transition={["zoom"]} bgColor="highlight">
          <Image src={images.lmi} width="100%" />
          <Heading size={2} lineHeight={1} textColor="white">
            @BenedekGagyi
          </Heading>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin=" 0 0 30px">
            The state of the
            <S type="" style={highlightedHeader}> web </S>
            in 2017
          </Heading>
          <Layout>
            <Fill>
              <Heading size={5} textColor="white" bgColor="regular" margin="10px" padding="0 10px" lineHeight="2em">
                JavaScript<br />Monopoly
              </Heading>
            </Fill>
            <Fill>
              <Heading size={5} textColor="white" bgColor="regular" margin="10px" padding="0 10px" lineHeight="4em">
                HW APIs
              </Heading>
            </Fill>
          </Layout>
          <Appear>
            <Heading size={5} textColor="white" bgColor="highlight" margin="10px" padding="0 10px" lineHeight="2em">
              Disappointing performance
            </Heading>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin=" 0 0 30px">
            JS
            <S type="" style={highlightedHeader}> performance: </S>
            why does it suck?
          </Heading>
          <List type="A" textColor="regular">
            <ListItem>simplicity above everything else</ListItem>
            <ListItem>dynamic, weakly typed</ListItem>
            <ListItem>garbage collector</ListItem>
            <ListItem>2008: just-in-time (JIT) compiling</ListItem>
          </List>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin=" 0 0 30px">
            A significant step:
            <S type="" style={highlightedHeader}> asm </S>
            .js
          </Heading>
          <List type="A" textColor="regular">
            <ListItem>2013, Mozilla</ListItem>
            <ListItem>a subset of JS</ListItem>
            <ListItem>double vs. int 32</ListItem>
            <ListItem>i = i|0;</ListItem>
            <ListItem>
              <S type="" style={{ color: colors.highlight }}>not </S>
              a compile target (
              <S type="" style={{ color: colors.highlight }}>?</S>
              )
            </ListItem>
          </List>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" margin=" 0 0 30px">
          <Heading size={4} textColor="regular">
            <S type="" style={highlightedHeader}>Web</S>
            Assembly
          </Heading>
          <List type="A" textColor="regular">
            <ListItem>WASM</ListItem>
            <ListItem>announced on 17 June 2015</ListItem>
            <ListItem>open standard: developed by W3C</ListItem>
            <ListItem>all the mayor players are behind it</ListItem>
            <ListItem>15 March 2016: MVP is demonstrated</ListItem>
          </List>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular">What is</Heading>
          <Image display="block" height="300" src={images.wasmLogo} />
          <Heading size={1} textColor="regular">?</Heading>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin=" 0 0 30px">
            It's a compile
            <S type="" style={highlightedHeader}> target</S>
          </Heading>
          <Image display="block" height="500" src={images.compile} />
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular" margin=" 0 0 30px">
            asm.js
            <S type="" style={highlightedHeader}> vs. </S>
            WebAssembly
          </Heading>
          <Text textSize="2rem" bgColor="regular" textColor="white" padding="5px">equivalent (for now, to support polyfilling)</Text>
          <Layout>

            <Fill>
              <List textColor="highlight" margin={10} >
                <ListItem textSize="2rem">pushed by Mozilla</ListItem>
                <br />
                <ListItem textSize="2rem">minify, zip / unzip</ListItem>
                <ListItem textSize="2rem">warm-up time</ListItem>
                <ListItem textSize="2rem">garbage collection</ListItem>
                <br />
                <ListItem textSize="2rem">limited to JS operations</ListItem>
                <br />
                <ListItem textSize="2rem">non-typical compile target</ListItem>
              </List>
            </Fill>
            <Fill>
              <List textColor="regular" margin={10}>
                <ListItem textSize="2rem">backed by all major players</ListItem>
                <ListItem textSize="2rem">inherently compressed</ListItem>
                <ListItem textSize="2rem">consistent performance</ListItem>
                <ListItem textSize="2rem">manual memory management</ListItem>
                <ListItem textSize="2rem">CPU features (i64, popcount etc.)</ListItem>
                <ListItem textSize="2rem">WASM specific compiler optimizations (Binaryen)</ListItem>
              </List>
            </Fill>
          </Layout>
          <Appear><Text textSize="2rem" bgColor="regular" textColor="white" padding="5px">no interpretation step</Text></Appear>
          <Appear><Text textSize="2rem" bgColor="regular" textColor="white" padding="5px">can access DOM and other browser APIs</Text></Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.slow}/>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" bgImage={images.fast} />
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg" margin=" 0 0 30px">
          <Heading size={2} textColor="regular">
            Speed is everything
            <Appear><S type="" style={highlightedHeader}>?</S></Appear>
          </Heading>
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
          <Image src={images.hot} height="80vh" style={{ maxHeight: "700px" }}/>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
            The
            <S type="" style={highlightedHeader}> drawbacks </S>
            of cross-platform web development
          </Heading>
          <List type="A" textColor="regular">
            <ListItem>abstraction</ListItem>
            <ListItem>performance</ListItem>
            <ListItem>library vs. ecosystem</ListItem>
            <ListItem>patent misery</ListItem>
            <ListItem>(can be) and HR nightmare</ListItem>
          </List>
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
              <Text textColor="regular">2009</Text>
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
                  <Text textColor="regular">2012</Text>
                </div>
              </Appear>
            </Fill>
          </Layout>
          <Appear>
            <div>
              <Image src={images.html5} height="130px" />
              <Text textColor="regular">2015</Text>
            </div>
          </Appear>
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
          <Heading size={1} textColor="regular">
            C++
          </Heading>
          <Appear>
            <List type="A" textColor="regular">
              <ListItem>write, debug and fix once</ListItem>
              <ListItem>fluid integration of new platforms</ListItem>
              <ListItem>the "right" amount of freedom</ListItem>
            </List>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={1} textColor="regular">
            C
            <S type="" style={{ color: colors.highlight }}>--</S>
          </Heading>
          <List type="A" textColor="regular">
            <ListItem>slow compilation</ListItem>
            <ListItem>complex CI</ListItem>
            <ListItem>high entry barrier for developers</ListItem>
          </List>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
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
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
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
          <Layout>
            <Fill>
              <Appear>
                <List type="A" textColor="regular" padding="10px" margin="5px 10px">
                  <ListItem>product</ListItem>
                  <ListItem>fast development, long queuing</ListItem>
                  <ListItem>ideal for big steps</ListItem>
                  <ListItem>it's easy to get left behind</ListItem>
                </List>
              </Appear>
            </Fill>
            <Fill>
              <Appear>
                <List type="A" textColor="regular" padding="10px" margin="5px 10px">
                  <ListItem>open source</ListItem>
                  <ListItem>slow development, democratic features</ListItem>
                  <ListItem>lots of small steps</ListItem>
                  <ListItem>my fix is your bug</ListItem>
                </List>
              </Appear>
            </Fill>
          </Layout>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
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
          <Heading size={4} textColor="regular">
            How will
            <S type="" style={highlightedHeader}> WASM </S>
            help us?
          </Heading>
          <Heading size={5} bgColor="regular" textColor="white" lineHeight="1.5em" padding="10px" margin="10px">Performance</Heading>
          <Heading size={5} bgColor="regular" textColor="white" lineHeight="1.5em" padding="10px" margin="10px">No compromises</Heading>
          <Heading size={5} bgColor="regular" textColor="white" lineHeight="1.5em" padding="10px" margin="10px">More approachable languages</Heading>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
            Rust
          </Heading>
          <List type="A" textColor="regular">
            <ListItem>
              it's a
              <S type="" style={{ color: colors.highlight }}> modern </S>
              language
            </ListItem>
            <ListItem>friendly learning curve</ListItem>
            <ListItem>super safe: no memory corruptions/null pointers</ListItem>
            <ListItem>built with cross-platform in mind</ListItem>
            <ListItem>built in unit testing support</ListItem>
            <ListItem>great tooling (Cargo)</ListItem>
          </List>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
            AssemblyScript
          </Heading>
          <Appear>
            <Heading size={1} textColor="regular">
              DEMO
            </Heading>
          </Appear>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <Heading size={4} textColor="regular">
            Summary
          </Heading>
          <List type="A" textColor="regular">
            <ListItem>WebAssembly is here to stay...</ListItem>
            <ListItem>...and so is JavaScript</ListItem>
            <ListItem>Emscripten is the king</ListItem>
            <ListItem>binaryen (asm2wasm)</ListItem>
            <ListItem>webassembly, assemblyscript, turboscript</ListItem>
          </List>
        </Slide>
        {/* ************************************    ************************************ */}
        <Slide transition={["fade"]} bgColor="bg">
          <BlockQuote>
            <Quote textSize={75} textColor="highlight">
              <S type="" style={{ color: colors.regular }}>Always bet on JavaScript</S>
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
