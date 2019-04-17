import React from 'react'
import './Footer.css'
const Footer = () => {
  return(
    <div className="footerWrap">
      <div className="footerContainer">
        <div className="footerContent">
          <p>Copyright 2019 <i className="far fa-copyright"></i> KimKwan Portfolio</p>
          <p><a href="https://drive.google.com/file/d/1ex3JFB4dyaYe8X8iJDQnF-gks_ghw0Cg/view?usp=sharing" target="blank" rel="noopener noreferrers">Resume</a> <i className="fas fa-file-signature"></i></p>
          <p><a href="https://github.com/kim-kwan" target="blank" rel="noopener noreferrers">GitHub <i className="fab fa-github"></i></a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer