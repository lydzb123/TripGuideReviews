import React from 'react';
import styled from 'styled-components';
import TravelerRatingForm from './TravelerRatingForm.jsx';
import TravelerTypeForm from './TravelerTypeForm.jsx';
import TimeOfYearForm from './TimeOfYearForm.jsx';
import LanguageForm from './LanguageForm.jsx';
import PopularMentionsForm from './PopularMentionsForm.jsx';
import ReviewsList from './ReviewsList.jsx'
import axios from 'axios';

const ReviewsModuleWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  display: flex;
  justify-content: space-around;
  width: 600px;
  margin: 0 auto;
  margin-top: -10px;
`
const FormWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  background-color: white;

  input {
    padding: 12px 0 0 0;
    transition: background-color 0.5s ease-out;
  }
  `
const Filter = styled.div`
  font-size: 12px;
  font-family: arial;
  padding: 8px 14px;
  display: inline-flex;


  h2 {
    font-size: 12px;
  }
`;
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
      reviewsList: [],
      popularMentions: []
    };
    //put any binded functions here
    this.getReviews = this.getReviews.bind(this);
    this.getMetrics = this.getMetrics.bind(this);
    this.getPopularMentions = this.getPopularMentions.bind(this);

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
      throw err;
      console.log('unsuccessful get reviews')
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
      console.log('lang:-------', this.state.totalLanguages);
    })
    .catch((err) => {
      throw err;
      console.log('unsuccessful get metrics')
    })
  }

  getPopularMentions(attractionID)
  {
    axios.get(`/api/attractions/${attractionID}/reviews/keywords`)
    .then((res) => {
      this.setState({
        popularMentions: res.data.keywords
      });
      console.log(this.state.popularMentions);
    })
    .catch((err) => {
      throw err;
      console.log('unsuccessful get popularmentions')
    })
  }





  componentDidMount() {
    var attractionID = 1;
    this.getMetrics(attractionID);
    this.getReviews(attractionID);
    this.getPopularMentions(attractionID);




  }

  render() {

    return (
      <ReviewsModuleWrapper>
        <div className="filtersAndReviewsList">
          <h1>Reviews</h1>

          <div className="filterReviews">

            <div className ="mainFilters">
              <FormWrapper>
                <form className="filterForm">
                  <Filter><TravelerRatingForm ratings={this.state.totalRatings}/></Filter>
                  <Filter><TravelerTypeForm/></Filter>
                  <Filter><TimeOfYearForm/></Filter>
                  <Filter><LanguageForm languages={this.state.totalLanguages} totalReviews={this.state.totalReviews}/></Filter>
                </form>
              </FormWrapper>

            </div>
            <PopularMentionsForm keywords={this.state.popularMentions}/>

          </div>



          <div className="searchBar">
            [SomeSearchBar]
          </div>

           <div className="reviewsList">
             <ReviewsList reviewsList={this.state.reviewsList}/>
          </div>

        </div>

      </ReviewsModuleWrapper>
    )
  }


};


export default ReviewsModule;