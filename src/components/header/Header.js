import "./Header.css";
import { greeting, workExperiences } from "../../portfolio";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";

function Header() {
  const exp = workExperiences.viewExperiences;
  return (
    <header className="header">
      <a href="/" className="logo">
        <span className="grey-color"> &lt;</span>
        <span className="logo-name">{greeting.username}</span>
        <span className="grey-color">/&gt;</span>
      </a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <a href="#skills">Skills</a>
        </li>
        {exp === true && (
          <li>
            <a href="#experience">Work Experiences</a>
          </li>
        )}
        <li>
          <a href="#opensource">Open Source</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li className="theme-toggle-item">
          <DarkModeToggle />
        </li>
      </ul>
    </header>
  );
}
export default Header;
