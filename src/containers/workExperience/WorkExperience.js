import "./WorkExperience.css";
import { Fade } from "react-awesome-reveal";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";

export default function WorkExperience() {
  if (workExperiences.viewExperiences) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div className="experience-content">
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-timeline">
                {workExperiences.experience.map((card, index) => {
                  return (
                    <ExperienceCard
                      key={index}
                      index={index}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets,
                      }}
                    />
                  );
                })}
                <Fade bottom duration={1000} delay={200} triggerOnce>
                  <div className="timeline-start">
                    <div className="timeline-start-circle">
                      <span className="timeline-start-text">Start of Work Experience</span>
                    </div>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
