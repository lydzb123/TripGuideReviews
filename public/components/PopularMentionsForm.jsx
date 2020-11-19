import React, {useState} from 'react';
import styled from 'styled-components';



const ButtonsContainer = styled.div`
padding: 4px 0 12px 0;
display: flex-inline;
justify-content: space-around;
width: 100%;

label {
  font-size: 14px;
}

button {
  border: 1px solid black;
  border-radius: 4px;
  padding: 6px 10px;
  margin: 8px 0 0 8px;
  x white;
  outline: none;
}
`;

const FilterFormContainer = styled.div`
background-color: white;
padding: 12px;
`;



const PopularMentionsForm = ({keywords, handleFilterClick, onPopularClick, isSelected}) => {



  return (
     <FilterFormContainer>
        <label>Popular Mentions</label>
          <ButtonsContainer>
          <button className="reviewText" style={{backgroundColor: isSelected.allReviews? "black" : "white", color: !isSelected.allReviews? "black" : "white"}} value="allReviews"
            onClick={(e) => {
              handleFilterClick(e);
              onPopularClick(e);
            }}>
          All Reviews
          </button>
            {keywords.map((word, i) => (
                <button className="reviewText" value={word}
                  onClick={(e) => {
                    handleFilterClick(e, word);
                    onPopularClick(e);
                  }}
                  style={{backgroundColor: isSelected[word]? "black" : "white", color: !isSelected[word]? "black" : "white"}}
                  key={i}>
                  {word}
                </button>
            ))}
          </ButtonsContainer>

      </FilterFormContainer>
  )

}


export default PopularMentionsForm;