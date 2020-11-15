import React from 'react';
import styled from 'styled-components';
import RatingBar from './RatingBar.jsx';

const TravelerRatingForm = ({ratings, totalReviews}) => {
  const travelerRatingOptions = ["Excellent", "Very Good", "Average", "Poor", "Terrible"];

  const RatingBarBackground = styled.div`
  background-color: #e0e0e0;
  border-radius: 2px;
  background-color: black;
  `;



  return (
    <div className="filterFormContainer" id="TravelerRatingForm">

      <h2>Traveler Rating</h2>

        {ratings.map((option, index) => (
          <div className ="inputLine">
              <label>
                <input type="checkbox" className="filterFormCheckbox" name={travelerRatingOptions[index]} value={travelerRatingOptions[index]}/>{travelerRatingOptions[index]}<RatingBar totalReviews={totalReviews} optionTotal={option.total}/>
              </label>

              {/* <RatingBar/> //make a separte rating bar component, pass down width measurements */}

        <div className="ratingCount">{option.total}</div>
          </div>
        ))}

    </div>

  )

}


export default TravelerRatingForm;