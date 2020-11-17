import React from 'react';


const TimeOfYearForm = ({handleFilterClick}) => {
  const TimeOfYearOptions = ["Mar-May", "Jun-Aug", "Sep-Nov", "Dec-Feb"];

  return (
    <div className="filterFormContainer" id="TimeOfYearForm">

      <h2>Time of Year</h2>
        {TimeOfYearOptions.map((option, i) => (
          <div className ="inputLine" key={i}>
              <label>
                <input type="checkbox" className="timeOfYearFilter" name={option} value={option} onClick={handleFilterClick}/>{option}
              </label>
          </div>
        ))}
    </div>
  )

}


export default TimeOfYearForm;