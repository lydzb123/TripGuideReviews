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
  background-color: white;
  outline: none;
}

.allReviewsButton {

}

button:hover {
  background-color: #D3D3D3;
  outline: none;

}

button:focus {
  background-color: black;
  color: white;
  outline: none;
}
`;

const FilterFormContainer = styled.div`
background-color: white;
padding: 12px;
`;



const PopularMentionsForm = ({keywords, handleFilterClick}) => {

  const [words, setWords] = useState({});

  var isSelected = false;

  const addWord = (e) => {
    //if value is not in words obj already
    const newObj = {...words};
    let word = e.target.value;
    newObj[word]? delete newObj[word] : newObj[word] = true;
    setWords({
    ...newObj
    });
  };





  return (
     <FilterFormContainer>

        <label>Popular Mentions</label>
          <ButtonsContainer>
          <button className="popularMentionsFilter" value="allReviews"
            onClick={(e) => {
              handleFilterClick(e);
            }}>
          All Reviews
          </button>
            {keywords.map((word, i) => (
                <button className="popularMentionsFilter" value={word}
                onClick={(e) => {
                  handleFilterClick(e);
                  addWord(e);
                  }} key={i}>{word}
                </button>
            ))}
          </ButtonsContainer>

      </FilterFormContainer>
  )

}


export default PopularMentionsForm;