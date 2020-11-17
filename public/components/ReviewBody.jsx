import React from 'react';
import ReviewRatingMeter from './ReviewRatingMeter.jsx'
import styled from 'styled-components';


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
  font-size: 16px;
  font-family: arial, sans-serif;
  line-height: 20px;
  padding: 0 20px;
}`;


const ReviewBody = ({rating, title, text, photos, experienceDate})=> {


  var number = rating;
  return(
    <div className="space">
    <ReviewWrapper>
      <img src="https://placeimg.com/1000/200/arch"/>
      <ReviewRatingMeter rating={rating}/>
        <h4>{title}</h4>
        <p>{text}</p>
        <h5><span className="bold">Date of experience:</span> {experienceDate}</h5>
    </ReviewWrapper>
    </div>
  )

}

export default ReviewBody;

