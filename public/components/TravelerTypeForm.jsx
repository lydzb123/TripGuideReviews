import React from 'react';


const TravelerTypeForm = () => {
  const travelerTypeOptions = ["Families", "Couples", "Solo", "Business", "Friends"];

  return (
    <div className="filterFormContainer" id="TravelerTypeForm">

      <h2>Traveler Type</h2>
        {travelerTypeOptions.map(option => (
          <div className ="inputLine">
              <label>
                <input type="checkbox" className="filterFormCheckbox" name={option} value={option}/>{option}
              </label>
          </div>
        ))}

    </div>
  )

}


export default TravelerTypeForm;