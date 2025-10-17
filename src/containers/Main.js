import { Component } from "react";
import { Fade } from "react-awesome-reveal";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { ThemeProvider } from "../contexts/ThemeContext";
import Greeting from "./greeting/Greeting";
import Profile from "./profile/Profile";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import StackProgress from "./skillProgress/skillProgress";
import Skills from "./skills/Skills";
import Talks from "./talks/Talks";
import Top from "./topbutton/Top";
import WorkExperience from "./workExperience/WorkExperience";

export default class Main extends Component {
  render() {
    return (
      <ThemeProvider>
        <div>
          <Header />
          <Fade triggerOnce duration={800} distance="24px">
            <Greeting />
          </Fade>
          <Fade triggerOnce duration={800} distance="24px" delay={50}>
            <Skills />
          </Fade>
          <Fade triggerOnce duration={800} distance="24px" delay={100}>
            <StackProgress />
          </Fade>
          <Fade triggerOnce duration={800} distance="24px" delay={150}>
            <WorkExperience />
          </Fade>
          <Fade triggerOnce duration={800} distance="24px" delay={200}>
            <Projects />
          </Fade>
          <Fade triggerOnce duration={800} distance="24px" delay={250}>
            <Talks />
          </Fade>
          <Fade triggerOnce duration={800} distance="24px" delay={300}>
            <StartupProject />
          </Fade>
          <Fade triggerOnce duration={800} distance="24px" delay={350}>
            <Profile />
          </Fade>
          <Fade triggerOnce duration={800} distance="24px" delay={400}>
            <Footer />
          </Fade>
          <Top />
        </div>
      </ThemeProvider>
    );
  }
}
