import React, {useState} from 'react';
import ReviewRatingMeter from './ReviewRatingMeter.jsx';
import styled from 'styled-components';


const ReviewWrapper = styled.div`
display: inline-block;
text-transform: capitalize;

.space {
  margin-bottom: 22px;
}

img {
  width: 100%;
  margin: 0;
}

h4 {
  font-weight: 600;
  margin-top: -4px;
  line-height: 22px;
  padding: 0 20px;
  font-size: 18px;
}

h5 {
  font-weight: 300;
  padding: 0 20px;
}

.bold {
  font-weight: 400;
}

p {
  margin-top: -12px;
  font-size: 14px;
  line-height: 20px;
  padding: 0 20px;
}

.photo {
  width: 100%;
  height: 20%;

}

.link{
  font-size: 14px;
  color: #8c8c8c;
}
`;

const PhotoBar = styled.div`
background: url(${props=> props.photo});
background-size: cover;
background-repeat: no-repeat;
background-position: center;

width: 100%;
height: 200px;
`;


const ReviewBody = ({rating, title, text, photos, experienceDate, keywords})=> {

const [readMore, setReadMore] = useState(false);

  var number = rating;


  const content= text.slice(0,277);
  const extraContent= (
  <div>
    <p className="extra-content">
      {text}
    </p>
  </div>
  )

  const linkName = readMore ? 'Read Less ' :'Read More >> ';

  return(
    <div className="space">
    <ReviewWrapper>
      <PhotoBar photo={photos}/>
      <ReviewRatingMeter rating={rating}/>
        <h4>{title}</h4>
        <p>{text}</p>

        <h5><span className="bold">Date of experience:</span> {experienceDate}</h5>
    </ReviewWrapper>
    </div>
  )

}

export default ReviewBody;

// https://tripreviews.s3-us-west-1.amazonaws.com/icons8-sort-up-24.png