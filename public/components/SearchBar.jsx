import React from 'react';
import styled from 'styled-components';


const SearchBarInput = styled.form`
input {
  width: 600px;
  height: 40px;
  margin: 20px 0px;
  border-color: #000;

  outline-color: #000;
  background: white url("https://tripreviews.s3-us-west-1.amazonaws.com/icons8-search-24.png") no-repeat scroll 7px 7px; padding-left:30px;
}
`;



const SearchBar = ({selectedPopularMentions, handleSearchChange, handleSearchSubmit, query}) => {

  let inputs = selectedPopularMentions+ query;
  return (
    <SearchBarInput>
          <label>
            <input type="text" name="search" value={inputs} onChange={handleSearchChange}/>
          </label>
    </SearchBarInput>
  )

}


export default SearchBar;