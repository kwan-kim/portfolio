import React from 'react'
import './TopBar.css'
import reactLogo from '../../logo.svg'
import { Link } from 'react-router-dom'
const TopBar = () => {
  return(
    <div className="topBar">
      <div className="topContainer">
        <div className="logoWrap">
          <Link to="/">
            <div className="topLogo">
              <img src={reactLogo} alt="logo"/>
            </div>
          </Link>
          <div className="kimkwan">
            김관
          </div>
        </div>
        <div className="topMenu">
        <i className="fab fa-github"></i> 
        <a href="https://github.com/kwan-kim" target="blank" rel="noopener noreferrers"> GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default TopBar;