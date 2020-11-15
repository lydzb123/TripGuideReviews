import React from 'react';
import UserHeader from './UserHeader.jsx';
import ReviewBody from './ReviewBody.jsx';
import styled from 'styled-components';


const ReviewsList = ({reviewsList}) => {

  const ReviewEntry = styled.div`
  margin-bottom: 12px;
  background-color: white;

  `;

  return (
    <div>
      <h2>Reviews List</h2>
      <div>
        {reviewsList.map(review => (
          <ReviewEntry>
            <UserHeader name={review.username} profilePhoto={review.profilePhoto} reviewDate={review.dateOfReview} location={review.userLocation} contributions={review.contributions}/>
            <ReviewBody rating={review.travelerRating} title={review.title} text={review.reviewText} experienceDate={review.dateOfExperience}/>
          </ReviewEntry>
        ))}
      </div>

    </div>
  )

}


export default ReviewsList;