import React,  { useState } from 'react';
import styled from 'styled-components';
import RatingBar from './RatingBar.jsx';


const TravelerRatingsForm = styled.div`
.inputLine {
width: 100%;



label {
  display: flex;
  align-items: flex-start;


  p {
    margin-top: 12px;

  }

  .optionLabel {
  width: 80px;
  margin-left: 24px;
  margin-top: 10px;

  }


  input[type=checkbox] {
    position: absolute;
    cursor: pointer;

  }

  input[type=checkbox]:before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      top: 0;
      left: 0;
      border-radius: 3px;

      background-color: white;
      border: 1px solid black;
  }
  input[type=checkbox]:checked:before {
      content: "";
      display:  block;
      width: 16px;
      height: 16px;
      top: 0;
      left: 0;
      background-color: black;
  }

  input[type=checkbox]:checked:after {
      content: "";
      display: inline-flex;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
      position: absolute;
      top: 2px;
      left: 6px;
  }


}
}


`;



// onClick={() => {
//   greeting();
//   waveHello();
// }}


const TravelerRatingForm = ({ratings, totalReviews, handleFilterClick}) => {

  // const [selected, setSelected] = useState(false);
//cani have 2 event handlers on one button?


  const travelerRatingOptions = ["Excellent", "Very Good", "Average", "Poor", "Terrible"];

  return (
    <div>
    <TravelerRatingsForm>
      <h2>Traveler Rating</h2>

        {ratings.map((option, index) => (
          <div className ="inputLine" key={index}>
              <label>
                <input type="checkbox" className="travelerRating" name={travelerRatingOptions[index]} value={travelerRatingOptions[index]} onClick={(e)=> {handleFilterClick(e)}}/>

                <span className="optionLabel">{travelerRatingOptions[index]}</span>

                <RatingBar totalReviews={totalReviews} optionTotal={option.total}/>
                <p>{option.total}</p>
              </label>
          </div>
        ))}

  </TravelerRatingsForm>
  </div>

  )

}


export default TravelerRatingForm;