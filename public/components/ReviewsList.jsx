import React from 'react';
import UserHeader from './UserHeader.jsx';
import ReviewBody from './ReviewBody.jsx';
import styled from 'styled-components';

const ReviewEntry = styled.div`
margin-bottom: 12px;
background-color: white;
`;

const ButtonBar = styled.div`
width: 100%;
height: 66px;
background-color: white;
display: flex;
justify-content: space-between;

  button {
    padding: 10px 12px 12px 12px;
    display: inline;
    vertical-align: text-top;
    margin: 12px;
    border-radius: 3px;
  }
  .previous{
    background-color: white;
    border: 1px solid grey;

  }

  .next{
    background-color: black;
    color: white;
  }
}
`;


const ReviewsList = ({reviewsList, keywords, offsetAndSearch}) => {
  return (
    <div>
      <div>
        {reviewsList.map((review, i) => (
          <ReviewEntry key={i}>
            <UserHeader name={review.username} profilePhoto={review.profilePhoto} reviewDate={review.dateOfReview} location={review.userLocation} contributions={review.contributions}/>
            <ReviewBody photos={review.photos} rating={review.travelerRating} title={review.title} text={review.reviewText} experienceDate={review.dateOfExperience} keywords={keywords}/>
          </ReviewEntry>
        ))}
      </div>
      <ButtonBar>
      <button className="previous" name="previous" onClick={(e)=> {offsetAndSearch(e)}}>Previous</button>
      <button className ="next" name ="next" onClick={(e)=> {offsetAndSearch(e)}}>Next</button>
      </ButtonBar>
    </div>
  )

}


export default ReviewsList;