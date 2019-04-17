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
          <h3><i className="fas fa-building"></i> (주)인포플라 </h3>
          <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span> 인천국제공항공사 패스워드관리 관리자 페이지 ( 2019.03 ~ 2019.03 ) </p>
            <p> 개요 : 전체 화면 설계 및 Vue.js , GraphQL 를 사용하여 프론트단 개발 </p>
            <p> <i className="fas fa-caret-right"></i> 서버에 저장되어있는 데이터 출력 List Component 개발</p>
            <p> <i className="fas fa-caret-right"></i> 데이터 검색 Component 개발</p>
            <p> <i className="fas fa-caret-right"></i> 데이터 수정 Page Component 개발</p>
            <p> <i className="fas fa-caret-right"></i> Header Component</p>
            <p> <i className="fas fa-caret-right"></i> 소스관리 : git lab</p>
          </div>
          <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span> (주)대동항업 견적서 페이지 부분 개발 ( 2019.02 ~ 2019.03 ) </p>
            <p> 개요 : JavaScript/jQuery 를 이용한 견적서 페이지 개발 </p>
            <p> <i className="fas fa-caret-right"></i> 견적서 8개 항목 개발</p>
            <p> <i className="fas fa-caret-right"></i> 데이터 저장 을 위한 ajax 사용</p>
          </div>
        </div>
        <div className="contents">
          <h3> <i className="fas fa-building"></i> (주)레드홀릭 </h3>
          <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span> 삼성물산 SSF SHOP 웹 사이트 운영팀 (파견) ( 2016.09 ~ 2018.10 ) </p>
            <p> 개요 : SSF SHOP 이벤트 페이지 개발 및 UI 마크업  </p>
            <p> <i className="fas fa-caret-right"></i> 기획전 페이지 퍼블리싱 마크업</p>
            <p> <i className="fas fa-caret-right"></i> 다수의 이벤트 페이지 개발</p>
            <p> <i className="fas fa-caret-right"></i> 고객 행동에 따른 동적 UI 개발</p>
            <p> <i className="fas fa-caret-right"></i> 기획자 , 디자이너 , 개발자 와의 다양한 커뮤니케이션</p>
          </div>
        </div>
        <div className="contents">
          <h3> <i className="fas fa-user-astronaut"></i> 개인 포트폴리오 </h3>
          <div className="projectArea">
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
          </div>
          <div className="projectArea">
            <p className="cardTitle"><span className="titleLabel"></span> JS - CHEAT FIELD (하이브리드 앱) ( 2018.04 ~ 2018.07 )</p>
            <p> 개요 : 1인 개발 프로젝트 ( 기획 , 디자인 , 개발 ) 배포완료 </p>
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
                <a href="https://kim-kwan.github.io/PT-Portfolio/" target="_blank" rel="noopener noreferrer">Demo</a> 
              </p>
              <p className="linkBtn">
                <a href="https://github.com/kim-kwan/PT-Portfolio" target="_blank" rel="noopener noreferrer">GitHub</a> 
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