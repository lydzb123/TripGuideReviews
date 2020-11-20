import React, {useState} from 'react';
import ReviewRatingMeter from './ReviewRatingMeter.jsx';
import styled from 'styled-components';
import moment from 'moment';


const ReviewWrapper = styled.div`
display: inline-block;
text-transform: capitalize;

.space {
  margin-bottom: 22px;
}

img {
  width: 100%;
  margin: 0;
}

h4 {
  font-weight: 600;
  margin-top: -4px;
  line-height: 22px;
  padding: 0 20px;
  font-size: 18px;
}

h5 {
  font-weight: 300;
  padding: 0 20px;
}

.bold {
  font-weight: 400;
}

p {
  margin-top: -12px;
  font-size: 14px;
  line-height: 20px;
  padding: 0 20px;
}

.photo {
  width: 100%;
  height: 20%;

}

.link{
  font-size: 14px;
  color: #8c8c8c;
  text-decoration-style: dotted;
  text-decoration-line: underline;
  text-decoration-color: #8c8c8c;

}


.arrow {
  width: 24px;
  height: 24px;
  vertical-align: sub;
}

.highlight {
  background-color: yellow;
}
`;

const PhotoBar = styled.div`
background: url(${props=> props.photo});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
width: 100%;
height: 150px;
`;


const ReviewBody = ({rating, title, text, photos, experienceDate, keywords})=> {


  //keyword highlighter:
  // var splitText = text.split(' ');
  // var joinedText = ""
  // for( let i = 0; i < keywords.length; i++) {
  //   for (let j = 0; j < splitText.length; j++) {
  //     if(splitText[j] !== keywords[i]) {
  //       joinedText += `<span>${splitText[j]} </span>`
  //     } else {
  //       joinedText += `<span className='highlight'>${splitText[j]}</span>`
  //     }
  //   }
  // };

  var number = rating;

  const [isTruncated, setIsTruncated] = useState(true);
  const toggleReadMore = () => {
    setIsTruncated(!isTruncated);
  }

  var truncated = text.slice(0,277);
  var timestamp = moment(experienceDate).format('LL');



  return(
    <div className="space">
    <ReviewWrapper>
      <PhotoBar photo={photos}/>
      <ReviewRatingMeter rating={rating}/>
      <h4>{title}</h4>
        <p>{isTruncated? truncated : text}</p>
  <div className="read" onClick={toggleReadMore}>{isTruncated?
  <p className="link">Read More<img className="arrow" src="https://tripreviews.s3-us-west-1.amazonaws.com/icons8-sort-down-24.png"/> </p>:
  <p className="link">Read Less<img className="arrow" src="https://tripreviews.s3-us-west-1.amazonaws.com/icons8-sort-up-24.png"/></p>}

  </div>

        <h5><span className="bold">Date of experience:</span> {timestamp}</h5>
    </ReviewWrapper>
    </div>
  )

}

export default ReviewBody;

// https://tripreviews.s3-us-west-1.amazonaws.com/icons8-sort-up-24.png