import "./Podcast.css";
import { Fade } from "react-awesome-reveal";
import { podcastSection } from "../../portfolio";

export default function Podcast() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main">
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p className="subTitle podcast-header-subtitle">{podcastSection.subtitle}</p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, index) => {
            return (
              <div key={index}>
                <iframe className="podcast" src={podcastLink} title={`Podcast ${index + 1}`} frameborder="0" scrolling="no"></iframe>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}
