import React from 'react';
import styled from 'styled-components';


const Checkbox = styled.div`

  p{
    margin-left: 26px;
    margin-top: 18px;

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
`;

const TravelerTypeForm = ({handleFilterClick}) => {
  const travelerTypeOptions = ["Families", "Couples", "Solo", "Business", "Friends"];

  return (
    <div className="filterFormContainer" id="TravelerTypeForm">

      <h2>Traveler Type</h2>

        {travelerTypeOptions.map((option, i) => (
          <Checkbox key={i}>
          <div className ="inputLine" key={i}>
              <label>
                <input type="checkbox" className="travelerType" name={option} value={option} onClick={handleFilterClick} key={i}/><p>{option}</p>
              </label>
          </div>
          </Checkbox>
        ))}

    </div>
  )

}


export default TravelerTypeForm;