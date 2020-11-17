import React from 'react';


const LanguageForm = ({languages, totalReviews, handleFilterClick}) => {
  const languageOptions = ["All Languages", "English", "Chinese(Trad.)", "Japanese"]; //dynamically render this? get all languages?



  return (
    <div className="filterFormContainer" id="LanguageForm">


      <h2>Language</h2>
      <div className ="inputLine">
        <label>
          <input type="radio" className="languageFilter" name="languages" value="allLanguages" onClick={handleFilterClick}/>All Languages ({totalReviews})
        </label>
      </div>
        {languages.map((option, i) => (
          <div className ="inputLine" key={i}>
              <label>
                <input type="radio" className="languageFilter" name="languages" value={option.language} onClick={handleFilterClick}/>{option.language} ({option.total})
              </label>
          </div>
        ))}

    </div>
  )

}


export default LanguageForm;