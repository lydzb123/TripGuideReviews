import React from 'react';
import TravelerRatingForm from './TravelerRatingForm.jsx';
import TravelerTypeForm from './TravelerTypeForm.jsx';
import TimeOfYearForm from './TimeOfYearForm.jsx';
import LanguageForm from './LanguageForm.jsx';
import PopularMentionsForm from './PopularMentionsForm.jsx';
import styled from 'styled-components';


const FormWrapper = styled.div`
display: flex;
justify-content: space-around;

  input {
    padding: 12px 0 0 0;
    transition: background-color 0.5s ease-out;
  }

  .filterForm {
    display: flex;
    justify-content: space-between
    width: 100%;
  }
  `
const Filter = styled.div`
  font-size: 13px;
  font-family: arial;
  padding: 8px 8px;

  h2 {
    font-size: 13px;
  }

`;


class AllForms extends React.Component {
constructor(props) {
  super(props);

  this.state = {
    allReviews: true
  }
  this.onPopularClick = this.onPopularClick.bind(this);
}

onPopularClick (e) {
  let oldState = this.state;

if(e.target.value === "allReviews") {

for(let key in oldState) {
  oldState[key] = false;
};
oldState.allReviews = true;
this.setState({
  ...oldState
});

}

else {
oldState.allReviews = false;
  if(oldState[e.target.value] === undefined) {
    this.setState({
      ...oldState,
     [e.target.value]: true,
    });
  } else {
    oldState[e.target.value] = !oldState[e.target.value];
    this.setState({
      ...oldState
    });
  }
}
}

  render() {
  return(
    <div>
    <FormWrapper>
    <Filter><TravelerRatingForm ratings={this.props.ratings} totalReviews={this.props.totalReviews} handleFilterClick={this.props.handleFilterClick}/></Filter>

        <Filter><TravelerTypeForm handleFilterClick={this.props.handleFilterClick}/></Filter>
        <Filter><TimeOfYearForm handleFilterClick={this.props.handleFilterClick}/></Filter>
        <Filter><LanguageForm languages={this.props.languages} totalReviews={this.props.totalReviews} handleFilterClick={this.props.handleFilterClick}/></Filter>
      </FormWrapper>
      <PopularMentionsForm keywords={this.props.keywords} handleFilterClick={this.props.handleFilterClick} onPopularClick={this.onPopularClick} isSelected={this.state}/>
    </div>
  )
  }
}

export default AllForms;
