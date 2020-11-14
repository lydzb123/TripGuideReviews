import React from 'react';


const LanguageForm = () => {
  const languageOptions = ["All Languages", "English", "Chinese(Trad.)", "Japanese"]; //dynamically render this? get all languages?

  return (
    <div className="filterFormContainer" id="LanguageForm">

      <h2>Language</h2>
      <form className="filterForm">

        {languageOptions.map(option => (
          <div className ="inputLine">
              <label>
                <input type="radio" className="filterFormRadio" name={option} value={option}/>{option} (someCount)
              </label>
          </div>
        ))}

      </form>
    </div>
  )

}


export default LanguageForm;