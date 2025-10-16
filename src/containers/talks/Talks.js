
import "./Talks.css";
import TalkCard from "../../components/talkCard/TalkCard";
import { talkSection } from "../../portfolio";
import { Fade } from "react-awesome-reveal";

export default function Talks() {
  return (
    <Fade bottom duration={1000} distance="20px">
    <div className="main" id="talks">
      <div className="talk-header">
        <h1 className="talk-header-title">{talkSection.title}</h1>
        <p className="subTitle talk-header-subtitle">{talkSection.subtitle}</p>
        <div className="talk-cards-div">
            {talkSection.talks.map((talk, index) => {
              return (
              <div key={index}>
                <TalkCard
                  talkDetails={{
                    title: talk.title,
                    subtitle: talk.subtitle,
                    slides_url: talk.slides_url,
                    event_url: talk.event_url,
                    image: talk.image
                      }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </Fade>
  );
}
