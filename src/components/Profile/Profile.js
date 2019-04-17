import React from 'react'
import './Profile.css'
import es6img from '../../es6-mark.png'
import jsimg from '../../javascript-mark.png'
import reactimg from '../../react-mark.png'
import htmlimg from '../../html5-mark.png'
import cssimg from '../../css3-mark.png'
import sassimg from '../../sass-mark.png'
import nodeimg from '../../node-mark.png'
import sqlimg from '../../sql-mark.png'
class Profile extends React.Component {
  componentDidMount(){
    this.props.getObjectTop('profileWrap')
  }
  render(){
    return(
      <div className="profileWrap" id="프로필">
        <h1 className="profileTitle title">프로필</h1>
        <div className="contents">
          <p>
            이 름 : 김 관
          </p>
          <p>
            생년월일 : 1990 .09 .22
          </p>
          <p>
            지원분야 : 프론트엔드
          </p>
          <p>
            학 력 : 컴퓨터공학 3년 중퇴
          </p>
          <p>
            위 치 : 경기도 하남시
          </p>
          <p>
            스 킬
            <ul className="skillImg">
              <li>
                <img src={es6img} alt="es6 symbol" />
                <span className="skillText">ES6</span>
              </li>
              <li>
                <img src={jsimg} alt="javascript symbol" />
                <span className="skillText">Javascript</span>
              </li>
              <li>
                <img src={reactimg} alt="react symbol" />
                <span className="skillText">React</span>
              </li>
              <li>
                <img src={htmlimg} alt="html5 symbol" />
                <span className="skillText">HTML5</span>
              </li>
              <li>
                <img src={cssimg} alt="css3 symbol" />
                <span className="skillText">CSS3</span>
              </li>
              <li>
                <img src={sassimg} alt="sass symbol" />
                <span className="skillText">Sass</span>
              </li>
              <li className="nodeimg">
                <img src={nodeimg} alt="node symbol" />
                <span className="skillText">Node</span>
              </li>
              <li>
                <img src={sqlimg} alt="sql symbol" />
                <span className="skillText">sql</span>
              </li>
            </ul>
          </p>
        </div> 
      </div>
    )
  }
}

export default Profile;