import React from 'react';


const TravelerRatingForm = () => {
  const travelerRatingOptions = ["Excellent", "Very Good", "Average", "Poor", "Terrible"];

  return (
    <div className="filterFormContainer" id="TravelerRatingForm">

      <h2>Traveler Rating</h2>
      <form className="filterForm">

        {travelerRatingOptions.map(option => (
          <div className ="inputLine">
              <label>
                <input type="checkbox" className="filterFormCheckbox" name={option} value={option}/>{option}
              </label>
              <span className="ratingProgressBar">[SomeProgressBar]</span>
              <span className="progressBarCount">(SomeCount)</span>
          </div>
        ))}

      </form>
    </div>

  )

}


export default TravelerRatingForm;