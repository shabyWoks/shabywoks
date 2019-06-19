import React from 'react';
import Question from '../components/question/Question';
import Display from './Display';

class Playground extends React.Component {

  constructor(props) {
    super(props);
  }

  displayItems = [
    {
      name : "Questions",
      items : [
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } },
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } },
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } },
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } },
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } },
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } },
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } },
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } },
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } },
        { baseImageUrl: "/images/img2.jpg", qusetionLink: "link here", answerLink: "answer link here", tags: [ { tagName : "react" }, { tagName : "angular" } ], badge: { tagName   : "android", imageUrl  : "/images/android.png" }, user: { imageUrl : "/images/android.png" } }
      ]
    }
  ]

  setDisplayItems() {
    return this.displayItems.map((displayItem) => {
      return <Display item={displayItem} />
    })
  }

  render () {
    return (
      <div className="plygnd-body">
        {this.setDisplayItems()}
      </div>
    )
  }
}

export default Playground;