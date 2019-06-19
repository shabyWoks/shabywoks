import React from 'react';
import Question from '../components/question/Question';

class Display extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      left  : 0,
      right : 3,
      count : props.item.items.length
    }
  }
  startPos = 0;

  displayQuestions = () => {
    return this.props.item.items.map((question) => {
      return <Question questionDetails= {question} badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
    });
  }

  onLeftMoveClick = () => {
    let uiWidth = document.getElementsByClassName('display-holder')[0].clientWidth;
    let count   = 4;
    if(this.state.left <= 0) {
      return;
    }
    if (this.state.left - 4 < 0) {
      count = this.state.left
    }
    uiWidth       = (count/4) * uiWidth;
    this.startPos = this.startPos + uiWidth;
    this.setState((state) => {
      return {
        ...state,
        left  : state.left  - count,
        right : state.right - count
      }
    })
    this.translateXY(document.getElementById('display-holder-main'), this.startPos);
  }

  translateXY (elem, xPos) {
    elem.style.transition = `500ms`;
    elem.style.transform = `translateX(${xPos}px)`;
  }

  onRightMoveClick = () => {
    let uiWidth = document.getElementsByClassName('display-holder')[0].clientWidth;
    let count   = 4;
    if(this.state.right >= this.state.count - 1) {
      return;
    }
    if (this.state.right + 4 >= this.state.count - 1) {
      count = this.state.count - this.state.right - 1
    }
    uiWidth       = (count/4)*uiWidth;
    this.startPos = this.startPos - uiWidth;
    this.setState((state) => {
      return {
        ...state,
        left  : state.left  + count,
        right : state.right + count
      }
    })
    this.translateXY(document.getElementById('display-holder-main'), this.startPos);
  }

  render () {
    return (
      <div className="display-holder">
        <span className={`arrow left-arrow ${this.state.left == 0 ? "hide" : "" }`} onClick= {this.onLeftMoveClick}>
          <img src="/images/leftArrow.png" width="30px" height="30px" style= {{ padding: '10px', paddingLeft: '7px' }} />
        </span>
        <span className={`arrow right-arrow ${this.state.right == this.state.count - 1 ? "hide" : ""} `} onClick= {this.onRightMoveClick}>
        <img src="/images/rightArrow.png" width="30px" height="30px" style= {{ padding: '10px', paddingRight: '7px' }} />
        </span>
        <div>{this.props.item.name}</div>
        <div style={{overflow:'hidden', height: '100%'}}>
          <div id="display-holder-main" style={{height: '100%', whiteSpace: 'nowrap'}}>
          {
            this.displayQuestions()
          }
          </div>
        </div>
      </div>
    )
  }
}

export default Display;