import "./Contact.css";
import { Fade } from "react-awesome-reveal";
import workingMan from "../../assets/images/contactMail.webp";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";

export default function Contact() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

            <div className="contact-text-div">
              {contactInfo.number && (
                <a className="contact-detail" href={`tel:${contactInfo.number}`}>
                  {contactInfo.number}
                </a>
              )}
              <br />
              <br />
              <a className="contact-detail-email" href={`mailto:${contactInfo.email_address}`}>
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img alt="Lucas Working" src={workingMan}></img>
          </div>
        </div>
      </div>
    </Fade>
  );
}
