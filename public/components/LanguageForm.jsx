import React from 'react';


const LanguageForm = ({languages, totalReviews}) => {
  const languageOptions = ["All Languages", "English", "Chinese(Trad.)", "Japanese"]; //dynamically render this? get all languages?






  return (
    <div className="filterFormContainer" id="LanguageForm">


      <h2>Language</h2>
      <div className ="inputLine">
        <label>
          <input type="radio" className="filterFormRadio" name="allLanguages" value="allLanguages"/>All Languages ({totalReviews})
        </label>
      </div>
        {languages.map(option => (
          <div className ="inputLine">
              <label>
                <input type="radio" className="filterFormRadio" name={option.language} value={option.language}/>{option.language} ({option.total})
              </label>
          </div>
        ))}

    </div>
  )

}


export default LanguageForm;