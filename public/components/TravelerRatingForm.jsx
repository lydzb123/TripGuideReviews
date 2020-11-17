import React from 'react';
import styled from 'styled-components';
import RatingBar from './RatingBar.jsx';


const TravelerRatingsForm = styled.div`
.inputLine {
width: 220px;
label {
  display: flex;
  align-items: flex-start;
  padding: 6px;

  .optionLabel {
  width: 80px;
  }
}
`;


const TravelerRatingForm = ({ratings, totalReviews, handleFilterClick}) => {
  const travelerRatingOptions = ["Excellent", "Very Good", "Average", "Poor", "Terrible"];

  return (
    <div>
    <TravelerRatingsForm>
      <h2>Traveler Rating</h2>

        {ratings.map((option, index) => (
          <div className ="inputLine" key={index}>
              <label>

                <input type="checkbox" className="travelerRatingFilter" name={travelerRatingOptions[index]} value={travelerRatingOptions[index]} onClick={handleFilterClick}/>

                <span className="optionLabel">{travelerRatingOptions[index]}</span>

                <RatingBar totalReviews={totalReviews} optionTotal={option.total}/>
                {option.total}

              </label>





          </div>
        ))}

  </TravelerRatingsForm>
  </div>

  )

}


export default TravelerRatingForm;