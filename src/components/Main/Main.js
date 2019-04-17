import React from 'react'
import './Main.css'
import SideBar from '../SideNav/SideBar'
import Introduce from '../Introduce/Introduce'
import Profile from '../Profile/Profile'
import Career from '../Career/Career'
import Project from '../Project/Project'
import Footer from '../Footer/Footer'
class Main extends React.Component {
  state = {
    
  }
  getObjectTop = (targetClass) => {
    const target = document.querySelector('.'+targetClass)
    const client = target.getBoundingClientRect();
    const clientTop = client.top;
    const scrolledTopLength = window.pageYOffset
    const absoluteTop = scrolledTopLength + clientTop;
    
    this.setState({
      [targetClass] : absoluteTop
    })
  }
  render(){
    return(
      <div className="mainWrap">
        <div className="container">
          <article className="mainContent">
            <Introduce getObjectTop={this.getObjectTop}/>
            <Project getObjectTop={this.getObjectTop}/>
            <Career getObjectTop={this.getObjectTop}/>
            <Profile getObjectTop={this.getObjectTop}/>
          </article>
          <SideBar objectTop={this.state}/>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Main