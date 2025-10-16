import "./Greeting.css";
import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import manOnTable from "../../assets/images/manOnTable.svg";
import Button from "../../components/button/Button";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";

export default function Greeting() {
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">
                {" "}
                {greeting.title} <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p className="greeting-text-p subTitle">{greeting.subTitle}</p>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button text="See my resume" newTab={true} href={greeting.resumeLink} />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img alt="Lucas sitting on table" src={manOnTable}></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
