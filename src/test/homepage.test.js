import Homepage from '../components/Homepage';
import React from 'react';
import renderer from 'react-test-renderer'; 
import "@testing-library/jest-dom";






//homepage snapshot test
test('homepage matches snapshot', () => {
    const tree = renderer
  
      .create(<Homepage />)
      .toJSON()
      expect(tree).toMatchSnapshot();
    
  });






