import React from 'react';


const TravelerRatingForm = ({ratings}) => {
  const travelerRatingOptions = ["Excellent", "Very Good", "Average", "Poor", "Terrible"];
  var ratingsArr = ratings.map(rating => {
    rating
  });

  console.log(ratingsArr);



  return (
    <div className="filterFormContainer" id="TravelerRatingForm">

      <h2>Traveler Rating</h2>

        {travelerRatingOptions.map((option, index) => (
          <div className ="inputLine">
              <label>
                <input type="checkbox" className="filterFormCheckbox" name={option} value={option}/>{option}
              </label>
              <span className="ratingProgressBar">[SomeProgressBar]</span>
        <div className="progressBarCount"></div>
          </div>
        ))}

    </div>

  )

}


export default TravelerRatingForm;