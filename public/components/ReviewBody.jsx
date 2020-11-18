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


.link{
  font-size: 14px;
  color: #8c8c8c;
}
`;


const ReviewBody = ({rating, title, text, photos, experienceDate})=> {


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
      <img src="https://placeimg.com/1000/200/arch"/>
      <ReviewRatingMeter rating={rating}/>
        <h4>{title}</h4>
        <p>{content}</p>

        <a className="read-more-link" onClick={()=>{setReadMore(!readMore)}}><p class="linkName">{linkName}</p></a>
      {readMore && extraContent}


        <h5><span className="bold">Date of experience:</span> {experienceDate}</h5>
    </ReviewWrapper>
    </div>
  )

}

export default ReviewBody;

// https://tripreviews.s3-us-west-1.amazonaws.com/icons8-sort-up-24.png