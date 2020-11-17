import React from 'react';
import styled from 'styled-components';




const RatingBarBorder = styled.div`
width: 100px;
background-color: #e0e0e0;
border-radius: 2px;
padding: 0;
margin: 0 4px;
`;

const RatingBarInside = styled.div`
width: ${props => props.width ? props.width : 0};
height: 14px;
background-color: black;
border-radius: 2px 0 0 2px;;
margin: 0;
padding: 0;
`;


const RatingBar = ({totalReviews, optionTotal}) => {

  const percentage = Number(optionTotal/ totalReviews * 100).toFixed(1) +'%';

return (
  <div>
  <RatingBarBorder>
    <RatingBarInside width={percentage}></RatingBarInside>
  </RatingBarBorder>
  </div>
)
};

export default RatingBar;
