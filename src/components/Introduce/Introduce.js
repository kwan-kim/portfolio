import React from 'react'
import './Introduce.css'

class Introduce extends React.Component {
  componentDidMount(){
    this.props.getObjectTop('introduceWrap')
  }
  render(){
    return (
      <div className="introduceWrap" id="시작하기">
        <h1 className="introduceTitle title">시작하기</h1>
        <div className="contents">
          <h3> " 몇 수 앞을 생각하는, 믿고 맡길 수 있는 구성원이 되겠습니다. "</h3>
          {/* <i className="fas fa-phone-square"></i> 휴대전화기 가 있으시면 <a href="tel:010-9132-6621"> 바로 시작</a> 가능합니다. */}
          <pre>
            <code className="tel">
              {`<a href="tel:010-9132-6621">시작하기</a>`}
            </code>
            {/* <p>
              * 현재 구직중
            </p> */}
          </pre>
        </div>
        <hr/>
      </div>
    )
  }
}


export default Introduce