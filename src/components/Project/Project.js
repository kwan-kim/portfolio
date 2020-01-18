import React from 'react'
import './Project.css'

class Project extends React.Component {
  componentDidMount(){
    this.props.getObjectTop('projectWrap')
  }
  render(){
    return (
      <div className="projectWrap" id="프로젝트">
        <h1 className="projectTitle title">프로젝트</h1>
        <div className="contents">
          <h3><i className="fas fa-building"></i> (주) 구하다 </h3>
          <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span> e-commerce 플랫폼 구하다 ( 2019.04 ~ ) </p>
            <p> 개요 : e-commerce 플랫폼 구하다 - PC / Mobile WEB 구축 </p>
            <p> <i className="fas fa-caret-right"></i> React.js 기반의 ui 개발</p>
            <p> <i className="fas fa-caret-right"></i> REST API , git</p>
            <p> <i className="fas fa-caret-right"></i> 상세페이지(쿠폰,포인트,이미지 갤러리 등) </p>
            <p> <i className="fas fa-caret-right"></i> 장바구니 페이지</p>
            <p> <i className="fas fa-caret-right"></i> 주문결제, 주문완료 페이지</p>
            <p> <i className="fas fa-caret-right"></i> 마이페이지(쿠폰, 포인트, 배송지관리 등)</p>
          </div>
          <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span> 구하다 셀러어드민 사이트 ( 2019.07 ~ 2019.10 ) </p>
            <p> 개요 : JavaScript/jQuery 를 이용한 어드민 사이트 개발 </p>
            <p> <i className="fas fa-caret-right"></i> UI 마크업 </p>
            <p> <i className="fas fa-caret-right"></i> jQuery UI, Interaction </p>
          </div>
        </div>

        <div className="contents">
          <h3> <i className="fas fa-building"></i> (주)레드홀릭 </h3>
          <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span> 삼성물산 SSF SHOP 웹 사이트 퍼블리싱 ( 2016.09 ~ 2018.10 ) </p>
            <p> 개요 : SSF SHOP 이벤트 페이지 개발 및 UI 마크업  </p>
            <p> <i className="fas fa-caret-right"></i> 기획전 페이지 퍼블리싱 마크업</p>
            <p> <i className="fas fa-caret-right"></i> 다수의 이벤트 페이지 개발</p>
            <p> <i className="fas fa-caret-right"></i> 고객 행동에 따른 동적 UI 개발</p>
            <p> <i className="fas fa-caret-right"></i> 기획, 디자인, 개발자 와의 다양한 커뮤니케이션</p>
          </div>
        </div>

        <div className="contents">
          <h3> <i className="fas fa-user-astronaut"></i> 개인 작업 </h3>
          {/* <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span> React - 고객관리 매니저( 2019.04 )</p>
            <p> 개요 : React.js 로 만든 포트폴리오 프로젝트 </p>
            <p> <i className="fas fa-caret-right"></i> DB : Google - Firebase (API를 만들고, axios 통신) </p>
            <p> <i className="fas fa-caret-right"></i> React.js </p>
            <p> <i className="fas fa-caret-right"></i> Redux </p>
            <p> <i className="fas fa-caret-right"></i> axios </p>
            <div className="btnGroup">
              <p className="linkBtn">
                <a href="https://customer-manager-pro.firebaseapp.com/" target="_blank" rel="noopener noreferrer">Demo</a> 
              </p>
              <p className="linkBtn">
                <a href="https://github.com/kim-kwan/customer-manager" target="_blank" rel="noopener noreferrer">GitHub</a> 
              </p>
            </div>
          </div> */}
          <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span>CHEAT FIELD( 2017.12 ~ 2018.07 )</p>
            <p> 개요 : 웹 기반 실시간 채팅 및 매치 하이브리드 앱  </p>
            <p> <i className="fas fa-caret-right"></i> 서버 : node.js Express</p>
            <p> <i className="fas fa-caret-right"></i> DB : mongoDB , MySql</p>
            <p> <i className="fas fa-caret-right"></i> JS , HTML5 , CSS</p>
            <p> <i className="fas fa-caret-right"></i> Apache Cordova</p>
            <p> <i className="fas fa-caret-right"></i> Socket.io</p>
            <div className="btnGroup cheatfield">
              <p className="linkBtn">
                <a href="https://play.google.com/store/apps/details?id=com.cafe24app.cheatfield&hl=en_US" target="_blank" rel="noopener noreferrer">Play Store</a> 
              </p>
              <p className="linkBtn">
                <a href="https://appadvice.com/app/ec-b9-98-ed-8a-b8-ed-95-84-eb-93-9c-cheatfield/1417977776" target="_blank" rel="noopener noreferrer">App Store</a> 
              </p>
              <p className="linkBtn">
                <a href="https://kimkwanjs.herokuapp.com/" target="_blank" rel="noopener noreferrer">Demo</a> 
              </p>
            </div>
          </div>
          <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span> JS - PT 형 웹사이트</p>
            <p> 개요 : 포트폴리오 를 PT 형식으로 상세설명 을 제공하는 페이지 </p>
            <p> <i className="fas fa-caret-right"></i> JS , jQuery , CSS </p>
            <div className="btnGroup">
              <p className="linkBtn">
                <a href="https://kwan-kim.github.io/pt" target="_blank" rel="noopener noreferrer">Demo</a> 
              </p>
              <p className="linkBtn">
                <a href="https://github.com/kwan-kim/pt" target="_blank" rel="noopener noreferrer">GitHub</a> 
              </p>
            </div>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}

export default Project