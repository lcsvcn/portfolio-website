import { Component } from "react";
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
          <Greeting />
          <Skills />
          <StackProgress />
          <WorkExperience />
          <Projects />
          <Talks />
          <StartupProject />
          <Profile />
          <Footer />
          <Top />
        </div>
      </ThemeProvider>
    );
  }
}
