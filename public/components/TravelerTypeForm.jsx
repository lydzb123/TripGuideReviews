import React from 'react';


const TravelerTypeForm = ({handleFilterClick}) => {
  const travelerTypeOptions = ["Families", "Couples", "Solo", "Business", "Friends"];

  return (
    <div className="filterFormContainer" id="TravelerTypeForm">

      <h2>Traveler Type</h2>

        {travelerTypeOptions.map((option, i) => (
          <div className ="inputLine" key={i}>
              <label>
                <input type="checkbox" className="travelerTypeFilter" name={option} value={option} onClick={handleFilterClick}/>{option}
              </label>
          </div>
        ))}

    </div>
  )

}


export default TravelerTypeForm;