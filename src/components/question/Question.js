import React from 'react';
import Badge from '../Badge';
import Tag from '../Tag';
import ImageComp from '../ImageComp';

/*

question : {
  baseImageUrl  : "/images/img2.jpg",
  qusetionLink  : "link here",
  answerLink    : "answer link here"
  tags : [
    { tagName : "react" },
    { tagName : "angular" }
  ],
  badge : {
    tagName   : "android",
    imageUrl  : "/images/android.png"
  },
  user : {
    imageUrl : "/images/android.png"
  }
}

*/

class Question extends React.Component {
  constructor (props) {
    super(props);
  }

  getAllTags = (tags) => {
    return tags.map((tag, i) => {
      return <Tag tagName= {tag.tagName} id= {i} closeable="false" />
    })
  }

  render () {
    return (
      <div className= "q-body">
        <div className= "q-img-body">
          <img className= "q-img" src = {this.props.questionDetails.baseImageUrl} />
          <Badge src= {this.props.questionDetails.badge.imageUrl} tagName= {this.props.questionDetails.badge.tagName} />
          <div className="q-img-body-tag-holder">
            { this.getAllTags(this.props.questionDetails.tags) }
          </div>
          <ImageComp src = {this.props.questionDetails.user.imageUrl} />
        </div>
        <div className= "q-footer">
          <div className="q-footer-link">
            <a target= "_blank" href= {this.props.questionDetails.questionLink} >QUESTION</a> | <a href= {this.props.questionDetails.answerLink} target= "_blank" >ANSWER</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Question;