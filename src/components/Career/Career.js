import React from 'react'
// import './Introduce.css'

class Career extends React.Component {
  componentDidMount(){
    this.props.getObjectTop('careerWrap')
  }
  render(){
    return (
      <div className="careerWrap" id="경력">
        <h1 className="profileTitle title">경력</h1>
        <div className="contents">
          <p>
            (주) 구하다 2019. 04 ~          
          </p>
          <p>
            (주) 레드홀릭 2017. 01 ~ 2018. 10 
          </p>
          <p>
            (주) 레드홀릭(계약직) 2016. 09 ~ 2016. 12 
          </p>
        </div>
        <hr />
      </div>
    )
  }
}

export default Career