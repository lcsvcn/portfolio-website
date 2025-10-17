import { useState } from "react";
import "./ExperienceCard.css";
import { Fade } from "react-awesome-reveal";

const GetDescBullets = ({ descBullets }) => {
  return descBullets
    ? descBullets.map((item, index) => (
        <li key={index} className="experience-bullet" style={{ animationDelay: `${index * 0.1}s` }}>
          {item}
        </li>
      ))
    : null;
};

export default function ExperienceCard({ cardInfo, index }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Extract year from date string (e.g., "Jan 2025 – Present" -> "2025")
  const getYear = (dateString) => {
    const match = dateString.match(/\d{4}/);
    return match ? match[0] : "";
  };

  const year = getYear(cardInfo.date);
  const isEven = index % 2 === 0;

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Fade direction={isEven ? "left" : "right"} triggerOnce cascade={false} delay={index * 100} duration={800}>
      <div className={`timeline-item ${isEven ? "timeline-left" : "timeline-right"}`}>
        <div className="timeline-year">{year}</div>
        <div className="timeline-dot"></div>
        <div className="experience-card-horizontal">
          <div className="experience-card-header">
            <img className="experience-company-logo" src={cardInfo.companylogo} alt={cardInfo.company} />
            <div className="experience-header-text">
              <h3 className="experience-role">{cardInfo.role}</h3>
              <h4 className="experience-company">{cardInfo.company}</h4>
              <p className="experience-date">{cardInfo.date}</p>
            </div>
          </div>
          <div className="experience-card-body">
            <p className="experience-description">{cardInfo.desc}</p>
            {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
              <>
                <button type="button" className="experience-toggle-btn" onClick={handleToggle}>
                  {isExpanded ? "Show Less ▲" : "Show More ▼"}
                </button>
                <div className={`experience-bullets-container ${isExpanded ? "expanded" : ""}`}>
                  <ul className="experience-bullets-list">
                    <GetDescBullets descBullets={cardInfo.descBullets} />
                  </ul>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
