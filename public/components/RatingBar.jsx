import React from 'react';
import styled from 'styled-components';

const RatingBar = ({totalReviews, optionTotal}) => {

  const percentage = Number(optionTotal/ totalReviews * 100).toFixed(1) +'%';

  const RatingBarBorder = styled.div`
  width: 100px;
  background-color: #e0e0e0;
  border-radius: 2px;
  `;

  const RatingBarInside = styled.div`
  width: ${percentage};
  height: 14px;
  background-color: black;
  border-radius: 2px 0 0 2px;;

  `;

return (
  <div>
  <RatingBarBorder>
    <RatingBarInside/>
  </RatingBarBorder>
  </div>
)
};

export default RatingBar;
