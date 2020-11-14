import React from 'react';


const PopularMentionsForm = () => {
  //get all keywords
  //assign to keywordOptions array
  const keywordOptions = ["keyword1", "keyword2", "keyword3", "keyword4"];

  return (
    <div className="filterFormContainer" id="PopularMentionsForm">

      <h2>Popular Mentions</h2>
      <form className="filterForm">

        {keywordOptions.map(option => (
          <div className ="inputLine">
              <label>
                <input type="button" className="filterFormbutton" name={option} value={option}/>
              </label>
          </div>
        ))}

      </form>
    </div>
  )

}


export default PopularMentionsForm;