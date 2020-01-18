import React from 'react'
import './Footer.css'
const Footer = () => {
  return(
    <div className="footerWrap">
      <div className="footerContainer">
        <div className="footerContent">
          <p>Copyright 2020 <i className="far fa-copyright"></i> Kwan-Kim Portfolio</p>
          <p><a href="https://drive.google.com/file/d/14UOKAJCkLxFaF2mZa5DOQzBv25wIndgf/view" target="blank" rel="noopener noreferrers">Resume</a> <i className="fas fa-file-signature"></i></p>
          <p><a href="https://github.com/kwan-kim" target="blank" rel="noopener noreferrers">GitHub <i className="fab fa-github"></i></a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer