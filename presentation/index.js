// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Appear,
  Code,
  CodePane,
  Deck,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Slide,
  TableItem,
  TableRow,
  Table,
  Text,
  S,
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

import Interactive from '../assets/interactive';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {
  city: require('../assets/city.jpg'),
  kat: require('../assets/kat.png'),
  logo: require('../assets/formidable-logo.svg'),
  markdown: require('../assets/markdown.png'),
  kodefoxLogo: require('../assets/kodefox-full-logo.png'),
  profilePicture: require('../assets/cropped-profile-picture.jpg'),
  jsLogo: require('../assets/logo-js.svg'),
  reactLogo: require('../assets/logo-react.svg'),
  reduxLogo: require('../assets/logo-redux.svg'),
  nodeJSLogo: require('../assets/logo-node.svg'),
  graphQLLogo: require('../assets/logo-graphql.svg'),
  codeIcon: require('../assets/code-icon.png'),
  androidAppleIcon: require('../assets/android-apple-icon.png'),
  rightArrowIcon: require('../assets/right-arrow.svg'),
  uploadIcon: require('../assets/upload-icon.png'),
  endUserIcon: require('../assets/end-user-icon.png'),
  reviewIcon: require('../assets/review-icon.png'),
  watchTV: require('../assets/watchTV.png'),
  whatIfMeme: require('../assets/whatIfMeme.jpg'),
  cordovaLogo: require('../assets/cordova-logo.png'),
  codePushDeploymentKeyExample: require('../assets/code-push-deployment-key.png'),
  androidPhone: require('../assets/android-phone.png'),
  optionalUpdateDialog: require('../assets/optional-update.png'),
  updateLoadingIndicator: require('../assets/update-loading-indicator.png'),
  example1: require('../assets/example-1.gif'),
  example2: require('../assets/example-2.gif'),
  whoUseCodePush: require('../assets/who-use-codepush.png'),
};

preloader(images);

const theme = createTheme(
  {
    primary: '#fd8224',
    secondary: 'white',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  },
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        theme={theme}
        transitionDuration={500}
      >
        <Slide id="title" transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Pushing updates to mobile apps
          </Heading>
          <Heading size={3} fit caps textColor="black">
            with a single command line
          </Heading>
          <Text textSize="20px" margin="20px 0px 0px" bold>
            by Audy Tanudjaja
          </Text>
        </Slide>

        <Slide
          id="introduction"
          transition={['fade']}
          bgColor="secondary"
          align="flex-start flex-start"
        >
          <Heading size={5} caps lineHeight={1} textColor="primary">
            Introduction
          </Heading>
          <Layout>
            <Table textColor="black">
              <TableRow>
                <TableItem>
                  <List>
                    <ListItem textSize={30}>Audy Tanudjaja</ListItem>
                    <ListItem textSize={30}>
                      Software Engineer
                      <Image
                        src={images.kodefoxLogo}
                        height="100px"
                        style={{marginLeft: 45}}
                      />
                    </ListItem>
                    <ListItem textSize={30}>
                      React and React Native Enthusiast!
                    </ListItem>
                    <ListItem textSize={30}>
                      contact:
                      {' '}
                      <S type="underline" textColor="blue">
                        audytanudjaja@gmail.com
                      </S>
                    </ListItem>
                  </List>
                </TableItem>
                <TableItem>
                  <Image
                    src={images.profilePicture}
                    height="250px"
                    style={{marginLeft: 100}}
                  />
                </TableItem>
              </TableRow>
            </Table>
          </Layout>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image src={images.jsLogo} height="100px" />
            <Image src={images.nodeJSLogo} height="100px" />
            <Image src={images.reactLogo} height="100px" />
            <Image src={images.reduxLogo} height="100px" />
            <Image src={images.graphQLLogo} height="100px" />
          </div>
        </Slide>

        <Slide id="initialQuestion" transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1.5} textColor="white">
            What do you usually do
          </Heading>
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            when you want to update your apps?
          </Heading>
        </Slide>

        <Slide
          id="usualWayOfUpdatingApp"
          transition={['fade']}
          bgColor="secondary"
        >
          <Heading size={4} caps lineHeight={1.5} textColor="primary">
            The Common Way
          </Heading>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Appear>
              <Image src={images.codeIcon} height="100px" />
            </Appear>
            <Appear>
              <Image src={images.rightArrowIcon} height="50px" />
            </Appear>
            <Appear>
              <Image src={images.androidAppleIcon} height="100px" />
            </Appear>
            <Appear>
              <Image src={images.rightArrowIcon} height="50px" />
            </Appear>
            <Appear>
              <Image
                src={images.uploadIcon}
                height="100px"
                style={{marginLeft: 10, marginRight: 20}}
              />
            </Appear>
            <Appear>
              <Image src={images.rightArrowIcon} height="50px" />
            </Appear>
            <Appear>
              <Image src={images.reviewIcon} height="100px" />
            </Appear>
            <Appear>
              <Image src={images.rightArrowIcon} height="50px" />
            </Appear>
            <Appear>
              <Image src={images.endUserIcon} height="100px" />
            </Appear>
          </div>
        </Slide>
        <Slide id="secondQuestion" transition={['zoom']} bgColor="secondary">
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            What if there is a small
          </Heading>
          <Heading size={2} caps fit textColor="primary" textFont="primary">
            additional update that left behind?
          </Heading>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Appear>
              <Heading size={10} textColor="black" textFont="primary">
                Wait until next release...
              </Heading>
            </Appear>
            <Appear>
              <Image
                src={images.watchTV}
                height="250px"
                style={{marginRight: 30}}
              />
            </Appear>
          </div>
        </Slide>

        <Slide id="thirdQuestion" transition={['fade', 'zoom']} bgColor="black">
          <Image src={images.whatIfMeme} height="350px" />
        </Slide>

        <Slide
          id="thirdQuestionExample"
          transition={['zoom']}
          bgColor="secondary"
        >
          <Heading size={4} caps textColor="primary" textFont="primary">
            Example
          </Heading>
          <Image src={images.example1} height="500px" />
        </Slide>

        <Slide
          id="codePushIntroduction"
          transition={['zoom']}
          bgImage={images.city.replace('/', '')}
          bgDarken={0.75}
        >
          <Heading size={1} caps lineHeight={1.5} textColor="primary">
            Code Push
          </Heading>
          <Appear>
            <Heading size={6} textColor="secondary">
              Deploy code updates directly to users
            </Heading>
          </Appear>
          <Appear>
            <Heading size={6} textColor="secondary">
              Manage alpha, beta and production apps
            </Heading>
          </Appear>
          <Appear>
            <div>
              <Heading size={6} textColor="secondary">
                React Native and Cordova ready
              </Heading>
              <Image src={images.reactLogo} height="100px" />
              <Image src={images.cordovaLogo} height="100px" />
            </div>
          </Appear>
        </Slide>

        <Slide id="preparation" transition={['zoom']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            Preparation
          </Heading>
          <List>
            <ListItem textSize={30}>
              <Code textSize={30}>
                npm install -g code-push-cli
              </Code>
            </ListItem>
            <ListItem textSize={30}>
              <Code textSize={30}>
                code-push register
              </Code>
            </ListItem>
            <ListItem textSize={30}>
              <Code textSize={30}>
                {`code-push app add <appName> <os> <platform>`}
              </Code>
            </ListItem>
          </List>
        </Slide>

        <Slide id="appPreparation" transition={['slide']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            App Preparation
          </Heading>
          <Heading size={7} textColor="secondary">
            (React Native)
          </Heading>
          <List>
            <ListItem textSize={28}>
              <Code textSize={28}>
                npm install --save react-native-code-push@latest
              </Code>
            </ListItem>
            <ListItem textSize={28}>
              <Code textSize={28}>
                react-native link
              </Code>
            </ListItem>
          </List>
        </Slide>

        <Slide id="appPreparationCont" transition={['slide']} bgColor="primary">
          <Heading size={3} textColor="secondary">
            App Preparation (Cont.)
          </Heading>
          <Heading size={7} textColor="secondary">
            (React Native)
          </Heading>
          <Layout>
            <Table>
              <TableRow>
                <TableItem>
                  <Text textSize={30}>
                    Wrap our component with codePush function
                  </Text>
                </TableItem>
                <TableItem>
                  <CodePane
                    lang="jsx"
                    source={require('raw-loader!./code-push-rn.example')}
                  />
                </TableItem>
              </TableRow>
            </Table>
          </Layout>
          <Text textSize={30}>
            copy and paste deployment key to string.xml (Android) or
            Info.plist (iOS)
          </Text>
          <Image src={images.codePushDeploymentKeyExample} height="150px" />
        </Slide>

        <Slide id="codePushInAction" transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="primary">
            Code Push in action!
          </Heading>
        </Slide>

        <Slide id="codePushUpdate" transition={['fade']} bgColor="secondary">
          <Layout>
            <Table>
              <TableRow>
                <TableItem>
                  <Code>
                    {`code-push release-react <appName> <platform>`}
                  </Code>
                </TableItem>
                <TableItem>
                  <Image src={images.example2} height="500px" />
                </TableItem>
              </TableRow>
            </Table>
          </Layout>
        </Slide>

        <Slide id="moreImprovement" transition={['fade']} bgColor="secondary">
          <Heading size={3} textColor="primary">
            More Improvement!
          </Heading>
          <Layout>
            <Table>
              <TableRow>
                <TableItem textColor="black">
                  <Image src={images.optionalUpdateDialog} height="500px" />
                </TableItem>
                <TableItem>
                  <Image src={images.updateLoadingIndicator} height="500px" />
                </TableItem>
              </TableRow>
            </Table>
          </Layout>
        </Slide>
        <Slide
          id="oldWay"
          transition={['fade']}
          bgColor="secondary"
        >
          <Heading size={4} caps lineHeight={1.5} textColor="primary">
            The Common Way
          </Heading>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
              <Image src={images.codeIcon} height="100px" />
              <Image src={images.rightArrowIcon} height="50px" />
              <Image src={images.androidAppleIcon} height="100px" />
              <Image src={images.rightArrowIcon} height="50px" />
              <Image
                src={images.uploadIcon}
                height="100px"
                style={{marginLeft: 10, marginRight: 20}}
              />
              <Image src={images.rightArrowIcon} height="50px" />
              <Image src={images.reviewIcon} height="100px" />
              <Image src={images.rightArrowIcon} height="50px" />
              <Image src={images.endUserIcon} height="100px" />
          </div>
        </Slide>
        <Slide
          id="newWay"
          transition={['fade']}
          bgColor="secondary"
        >
          <Heading size={4} caps lineHeight={1.5} textColor="primary">
            The Code-Push Way
          </Heading>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
              <Image src={images.codeIcon} height="100px" />
              <Image src={images.rightArrowIcon} height="50px" />
              <Image src={images.endUserIcon} height="100px" />
          </div>
        </Slide>
        <Slide id="whoUseCodePush" transition={['zoom']} bgColor="secondary">
          <Heading size={4} caps textColor="primary" textFont="primary">
            Who use CodePush?
          </Heading>
          <Image src={images.whoUseCodePush} height="400px" />
        </Slide>
        <Slide id="downSide" transition={['zoom']} bgColor="secondary">
          <Heading size={3} textColor="primary">
            The Downside
          </Heading>
          <List>
            <Appear>
              <ListItem textColor="black">
                Cannot code-push native code
              </ListItem>
            </Appear>
            <Appear>
              <ListItem textColor="black">No update dialog in iOS</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide id="lastSlide" transition={['zoom']} bgColor="primary">
          <Heading size={1} textColor="secondary">
            Thank You!
          </Heading>
          <Text textSize="20px" margin="120px 0px 0px" textColor="white">
            This presentation was made with Spectacle by Formidable Labs
          </Text>
        </Slide>
      </Deck>
    );
  }
}
