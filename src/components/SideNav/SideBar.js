import React from 'react'
import './SideBar.css'

class SideBar extends React.Component{
  state = {
    activeMenu : 1 ,
  }

  componentDidMount(){
    window.addEventListener('scroll' , this.activeSideNavMenu)
  }
  componentWillUnmount(){
    window.removeEventListener('scroll' , this.activeSideNavMenu)
  }

  activeSideNavMenu = () => {
    let scrollY = window.scrollY
    const { objectTop } = this.props
    if(scrollY < objectTop.projectWrap){
      this.setState({
        activeMenu : 1
      })
    }else if(scrollY > objectTop.projectWrap - 10 && scrollY < objectTop.careerWrap - 10){
      this.setState({
        activeMenu : 2
      })
    }else if(scrollY > objectTop.careerWrap - 10 && scrollY < objectTop.profileWrap - 10){
      this.setState({
        activeMenu : 3
      })
    }else if(scrollY > objectTop.profileWrap - 10){
      this.setState({
        activeMenu : 4
      })
    }
  }
 
  render(){
    return(
      <div className="sideBar">
        <div className="sideBarContainer">
          <div className="sideMenu">
            <i className={`fas fa-minus ${this.state.activeMenu === 1 ? 'activeMenuShow' : 'activeMenuHide'}`}></i>  
            <a className={this.state.activeMenu === 1 ? 'activeTextShow' : 'activeTextHide'} href="#시작하기">시작하기</a>
          </div>
          <div className="sideMenu">
            <i className={`fas fa-minus ${this.state.activeMenu === 2 ? 'activeMenuShow' : 'activeMenuHide'}`}></i>
            <a className={this.state.activeMenu === 2 ? 'activeTextShow' : 'activeTextHide'} href="#프로젝트">프로젝트</a>
          </div>
          <div className="sideMenu">
            <i className={`fas fa-minus ${this.state.activeMenu === 3 ? 'activeMenuShow' : 'activeMenuHide'}`}></i>
            <a className={this.state.activeMenu === 3 ? 'activeTextShow' : 'activeTextHide'} href="#경력">경력</a>
          </div>
          <div className="sideMenu">
            <i className={`fas fa-minus ${this.state.activeMenu === 4 ? 'activeMenuShow' : 'activeMenuHide'}`}></i>
            <a className={this.state.activeMenu === 4 ? 'activeTextShow' : 'activeTextHide'} href="#프로필">프로필</a>
          </div>
        </div>
      </div>
    )
  }
}

export default SideBar;