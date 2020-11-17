import React from 'react';
import styled from 'styled-components';



const Dots = styled.div`
  display: inline-block;
  padding-left: 20px;
  font-size: 40px;
  font-family: Times;
  line-height: -10;

  &::before {
    content: '•••••';
    letter-spacing: 3px;
    padding: 0;
    margin: 0;
    background: linear-gradient(90deg, #00aa6c ${props => props.percentage}, white ${props => props.percentage});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 3px #00aa6c;
  }
`;

const ReviewRatingMeter = ({rating}) => {
  const percentage = (rating / 5 * 100) + '%';
  return (
    <Dots percentage={percentage} />
  )
};

export default ReviewRatingMeter;