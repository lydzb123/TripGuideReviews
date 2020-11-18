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
  background-color: white;
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

button:active {
  color: white;
}
`;

const FilterFormContainer = styled.div`
background-color: white;
padding: 12px;
`;



const PopularMentionsForm = ({keywords, handleFilterClick}) => {

  const [words, setWords] = useState({});

  const addWord = (e) => {
    const newObj = {...words};
    let word = e.target.value;
    if(newObj[word]) {
      newObj[word]  = "white";
    } else {
      newObj[word] = "black";
      }

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
                  }}
                  style={{backgroundColor: words[word]}}
                  key={i}>
                  {word}
                </button>
            ))}
          </ButtonsContainer>

      </FilterFormContainer>
  )

}


export default PopularMentionsForm;