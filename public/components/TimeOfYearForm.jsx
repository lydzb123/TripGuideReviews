import React from 'react';


const TimeOfYearForm = () => {
  const TimeOfYearOptions = ["Mar-May", "Jun-Aug", "Sep-Nov", "Dec-Feb"];

  return (
    <div className="filterFormContainer" id="TimeOfYearForm">

      <h2>Time of Year</h2>

        {TimeOfYearOptions.map(option => (
          <div className ="inputLine">
              <label>
                <input type="checkbox" className="filterFormCheckbox" name={option} value={option}/>{option}
              </label>
          </div>
        ))}
    </div>
  )

}


export default TimeOfYearForm;