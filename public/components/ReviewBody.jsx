import React from 'react';
import styled from 'styled-components';


const ReviewBody = ({rating, title, text, photos, experienceDate})=> {


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
    font-weight: 500;
    margin-top: -4px;
    line-height: 22px;
    padding: 0 20px;
    font-size: 14px;

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
    font-size: 12px;
    font-family: arial;
    line-height: 20px;
    padding: 0 20px;
  }`;

  const RatingMeter = styled.div`
    --percent: calc(var(--ratingNum) / 5 * 100%);

    display: inline-block;
    font-size: var(--dot-size);
    font-family: Times; // make sure ★ appears correctly
    line-height: -10;
    padding: 0 20px;

    &::before {
      content: '•••••';
      letter-spacing: 3px;
      padding: 0;
      margin: 0;
      background: linear-gradient(90deg, var(--dot-fill) var(--percent), var(--dot-color) var(--percent));
      -webkit-background-clip: text;
      -webkit-text-fill-color: #00aa6c;
      -webkit-text-stroke: 3px #00aa6c;

    }
  `;

  var number = rating;
console.log(number);
  return(
    <div class="space">
    <ReviewWrapper>
      <img src="https://placeimg.com/1000/200/arch"/>
      <RatingMeter style={{ratingNum: number}}/>
      <h4>{title}</h4>
      <p>{text}</p>
      <h5><span class="bold">Date of experience:</span> {experienceDate}</h5>


      </ReviewWrapper>
    </div>
  )

}

export default ReviewBody;

