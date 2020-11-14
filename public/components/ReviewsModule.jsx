import React from 'react';
import TravelerRatingForm from './TravelerRatingForm.jsx';
import TravelerTypeForm from './TravelerTypeForm.jsx';
import TimeOfYearForm from './TimeOfYearForm.jsx';
import LanguageForm from './LanguageForm.jsx';
import PopularMentionsForm from './PopularMentionsForm.jsx';


class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelerRatingFilter: [],
      travelerTypeFilter: [],
      timeOfYearFilter: [],
      languageFilter: [],
      popularMentionsFilter: []
    };
    //put any binded functions here
  }

  render() {

    return (
      <div>
        <div className="filtersAndReviewsList">
          <h1>Reviews</h1>

          <div className="filterReviews">

            <div className ="mainFilters">
              <TravelerRatingForm/>
              <TravelerTypeForm/>
              <TimeOfYearForm/>
              <LanguageForm/>
              <PopularMentionsForm/>
            </div>

          </div>

          <div className="searchBar">
            [SomeSearchBar]
          </div>

           <div className="reviewsList">
            [ReviewListHere]
          </div>

        </div>

      </div>
    )
  }


};


export default ReviewsModule;