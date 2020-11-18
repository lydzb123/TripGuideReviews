import React from 'react';
import { shallow } from 'enzyme';
// import sinon from 'sinon';

jest.useFakeTimers();

// render fullapp

// Components
import ReviewsModule from './ReviewsModule.jsx';

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

describe('Testing ReviewsModule: Clicking Filter Inputs', () => {
  it('should add the clicked value to the correlating state filter', () => {
    // expect(appController.add(2, 2)).toBe(4);

    // labelOn="On" labelOff="Off"
      // Render a checkbox with label in the document
  const app = shallow(<ReviewsModule/>);


  const input = [
    { id: 1, url: "https://www.url1.dev" },
    { id: 2, url: "https://www.url2.dev" },
    { id: 3, url: "https://www.link3.dev" }
  ];

  const output = [{ id: 3, url: "https://www.link3.dev" }];

  expect(filterByTerm(input, "link")).toEqual(output);


  const mockFn = jest.fn();
  mockFn();
  expect(mockFn).toHaveBeenCalled();


});





  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');




  });

  it('should send a GET request for reviews on click select', ()=> {

  });


  it('should send a GET request for reviews on click deselect', ()=> {

  });

  it('should send an allfilters query object with keys for every filter', ()=> {

  });

  it('should not get back reviews that do not match the filters', ()=> {

  });

});

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




