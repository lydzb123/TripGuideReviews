import React from 'react';
import styled from 'styled-components';


const SearchBarInput = styled.div`
input {
  width: 100%;
  height: 44px;
  margin: 20px 0;
  border-color: #000;
  outline-color: #000;
}
`;

const SearchBar = () => {
  return (
    <SearchBarInput>
          <label>
            <input type="text" name="search"/>
          </label>
    </SearchBarInput>
  )

}


export default SearchBar;