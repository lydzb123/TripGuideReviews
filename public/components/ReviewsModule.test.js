import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';

jest.useFakeTimers();

// render fullapp

// Components
import ReviewsModule from './ReviewsModule.jsx';
import AllForms from './AllForms.jsx';


// function setup() {
//   const props = {
//     imgPath: 'some/image/path/to/a/mock/image',
//   };
//   const wrapper = shallow(<WelcomeMessage />);
//   return { wrapper, props };
// }

// describe('WelcomeMessage Test Suite', () => {
//   it('Should have an image', () => {
//     const { wrapper } = setup();
//     expect(wrapper.find('img').exists()).toBe(true);
//   });
// });
// describe('Testing ReviewsModule: Clicking Filter Inputs', () => {

  function setup() {
    const wrapper = shallow(<ReviewsModule/>);
    return {wrapper};
  }

describe('ReviewsModule Component: ', () => {
  it('renders form components', () => {
  const {wrapper} = setup();
  expect(wrapper.find(AllForms).exists()).toBe(true);
  });

});


// it('renders an `.icon-star`', () => {
//   const wrapper = shallow(<MyComponent />);
//   expect(wrapper.find('.icon-star')).to.have.lengthOf(1);
// });


//   it('should send a GET request for reviews on click select', ()=> {

//   });

// });



// it('should add the clicked value to the correlating state filter', () => {


//   expect(checkbox.text()).toEqual('Off');

//   checkbox.find('input').simulate('change');

//   expect(checkbox.text()).toEqual('On');




//   });

//   it('should send a GET request for reviews on click select', ()=> {

//   });


//   it('should send a GET request for reviews on click deselect', ()=> {

//   });

//   it('should send an allfilters query object with keys for every filter', ()=> {

//   });

//   it('should not get back reviews that do not match the filters', ()=> {

//   });

// });

//when i click an input type checkbox
//it should add the event.target.value to the correlating state filter

//when i click an input type checkbox
//it should send a get req request with allfilters object

//when i click an input type checkbox
//it should send a get req request with allfilters object
  //all filters object should have keys for x, y, z filters

//when i click an input type checkbox
  //it should get a response of 5 reviews


//when i deselect an input checkbox
  //it should remove the event.target.value from the associated filter state

