import React from 'react';
import TravelerRatingForm from './TravelerRatingForm.jsx';
import TravelerTypeForm from './TravelerTypeForm.jsx';
import TimeOfYearForm from './TimeOfYearForm.jsx';
import LanguageForm from './LanguageForm.jsx';
import PopularMentionsForm from './PopularMentionsForm.jsx';
import ReviewsList from './ReviewsList.jsx'
import axios from 'axios';


class ReviewsModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      travelerRatingFilter: [],
      travelerTypeFilter: [],
      timeOfYearFilter: [],
      languageFilter: [],
      popularMentionsFilter: [],

      totalReviews: [],
      totalRatings: [],
      totalLanguages: [],
      reviewsList: []
    };
    //put any binded functions here
    this.getReviews = this.getReviews.bind(this);
  }

  //when combining components, i will need to find the attractionID

  getReviews(attractionID) {
    axios.get(`/api/attractions/${attractionID}/reviews`)
    .then((res) => {
      this.setState({
        reviewsList: res.data
      });
    })
    .catch((err) => {
      console.log('unncessucful get')
    })
  }


  getMetrics(attractionID) {
    axios.get(`/api/attractions/${attractionID}/reviews/metrics`)
    .then((res) => {
      this.setState({
        totalReviews: res.data[0][0].totalReviews,
        totalRatings: res.data[1],
        totalLanguages: res.data[2]
      });
      console.log(this.state.totalRatings);
    })
    .catch((err) => {
      console.log('unncessucful get')
    })
  }





  componentDidMount() {
    var attractionID = 1;
    this.getReviews(attractionID);
    this.getMetrics(attractionID);




  }

  render() {

    return (
      <div>
        <div className="filtersAndReviewsList">
          <h1>Reviews</h1>

          <div className="filterReviews">

            <div className ="mainFilters">

              <form className="filterForm">
              <TravelerRatingForm ratings={this.state.totalRatings}/>
              <TravelerTypeForm/>
              <TimeOfYearForm/>
              <LanguageForm/>
              </form>

            </div>
            <PopularMentionsForm/>

          </div>



          <div className="searchBar">
            [SomeSearchBar]
          </div>

           <div className="reviewsList">
             <ReviewsList reviewsList={this.state.reviewsList}/>
          </div>

        </div>

      </div>
    )
  }


};


export default ReviewsModule;