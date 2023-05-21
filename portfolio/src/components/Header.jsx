import React from 'react';
import { DiGithubBadge, DiLinkedin } from 'react-icons/di';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-dark navbar-fixed-top ">
        <a className="navbar-brand" href="#"><span className="font-weight-light">Recoba</span> Santiago </a>
        <div className="buttons">
            <div>
                <a href="https://www.linkedin.com/in/santiago-recoba/">
                    <DiLinkedin size={32} />
                    <label id="linkedinlabel" htmlFor="buttons">Linkedin</label>
                </a>
            </div>
            <div>
                <a href="https://github.com/Santiagorich">
                    <DiGithubBadge size={32} />
                    <label id="githublabel" htmlFor="buttons">Github</label>
                </a>
            </div>
        </div>
    </nav>
  );
}

export default Header;
