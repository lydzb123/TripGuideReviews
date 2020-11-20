import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import sinon from 'sinon';

import AllForms from './AllForms.jsx';
import ReviewsList from './ReviewsList.jsx';
import SearchBar from './SearchBar.jsx';
import PopularMentionsForm from './PopularMentionsForm.jsx';
import ReviewsModule from './ReviewsModule.jsx';
import UserHead from './SearchBar.jsx';
import ReviewEntry from './PopularMentionsForm.jsx';
import UserHeader from './UserHeader.jsx';
import ReviewBody from './ReviewBody.jsx';


function setup() {
  const wrapper = shallow(<ReviewsModule/>);
  return {wrapper};
}


describe('ReviewsModule renders: ', () => {

  it('should render all input forms', () => {
  const {wrapper} = setup();
  expect(wrapper.find(AllForms).exists()).toBe(true);
  });

  it('should render a list of reviews', () => {
    const {wrapper} = setup();
    expect(wrapper.find(ReviewsList).exists()).toBe(true);
    });

  it('should render a search bar', () => {
    const {wrapper} = setup();
    expect(wrapper.find(SearchBar).exists()).toBe(true);
    });

});
