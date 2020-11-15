import React from 'react';

const ReviewBody = ({rating, title, text, experienceDate})=> {
  return(
    <div className="reviewBody">
      {rating}
      <h3>{title}</h3>
      <p>{text}</p>
      Date of experience: {experienceDate}


    </div>
  )

}

export default ReviewBody;

