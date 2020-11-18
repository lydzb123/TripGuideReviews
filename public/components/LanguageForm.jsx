import React, {useState} from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx'

const More = styled.div`
  font-weight: bold;
`;






const LanguageForm = ({languages, totalReviews, handleFilterClick}) => {
  const languageOptions = ["All Languages", "English", "Chinese(Trad.)", "Japanese"]; //dynamically render this? get all languages?

  const [status, setStatus] = useState(false);


  return (
    <div className="filterFormContainer" id="LanguageForm">


      <h2>Language</h2>
      <div className ="inputLine">
        <label>
          <input type="radio" className="languageFilter" name="languages" value="allLanguages" onClick={handleFilterClick} checked/>All Languages ({totalReviews})
        </label>
      </div>

      {languages.slice(0,3).map((option, i) => (
        <div className ="inputLine" key={i}>
            <label>
              <input type="radio" className="languageFilter" name="languages" value={option.language} onClick={handleFilterClick}/>{option.language} ({option.total})
            </label>
        </div>
      ))}

    { status && (<Modal closeModal={() => setStatus(false)}>
      <div className ="inputLine">
          <label>
            <input type="radio" className="languageFilter" name="languages" value="allLanguages" onClick={handleFilterClick} checked="checked"/>All Languages ({totalReviews})
          </label>
        </div>
        {languages.map((option, i) => (
          <div className ="inputLine" key={i}>
              <label>
                <input type="radio" className="languageFilter" name="languages" value={option.language} onClick={handleFilterClick}/>{option.language} ({option.total})
              </label>
          </div>))}
      </Modal>)}

        <div className="container">
        <More onClick={() => setStatus(true)}>More</More>
        </div>


    </div>
  )

}


export default LanguageForm;