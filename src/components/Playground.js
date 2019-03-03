import React from 'react';
import Question from '../components/question/Question';

class Playground extends React.Component {
  baseImageUrl  = "/images/img2.jpg"
  qusetionLink  = "link here"
  answerLink    = "answer link here"
  tags          = [ { tagName : "react" }, { tagName : "angular" } ]
  badge         = { tagName   : "android", imageUrl  : "/images/android.png" }
  user          = { imageUrl : "/images/android.png" }
  render () {
    
    return (
      <div className="plygnd-body">
        <div className="display-holder">
          <span className="arrow left-arrow">	&lt; </span>
          <span className="arrow right-arrow">	&lt; </span>
          <div style={{height: '100%', overflow: 'hidden', whiteSpace: 'nowrap'}}>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
          </div>
        </div>

        <div className="display-holder">
          <span className="arrow left-arrow">	&lt; </span>
          <span className="arrow right-arrow">	&lt; </span>
          <div style={{height: '100%', overflow: 'hidden', whiteSpace: 'nowrap'}}>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
            <Question badge={this.badge} user={this.user} tags={this.tags} baseImageUrl = {this.baseImageUrl}/>
          </div>
        </div>

        

        
      </div>
    )
  }
}

export default Playground;