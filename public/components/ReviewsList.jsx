import React from 'react';
import UserHeader from './UserHeader.jsx';
import ReviewBody from './ReviewBody.jsx';

const ReviewsList = ({reviewsList}) => {

  return (
    <div>
      <h2>Reviews List</h2>
      <div>
        {reviewsList.map(review => (
          <div className="reviewEntry">
          <UserHeader name={review.username} profilePhoto={review.profilePhoto} reviewDate={review.dateOfReview} location={review.userLocation} contributions={review.contributions}/>
          <ReviewBody rating={review.travelerRating} title={review.title} text={review.reviewText} experienceDate={review.dateOfExperience}/>
          </div>
        ))}
      </div>

    </div>
  )

}


export default ReviewsList;