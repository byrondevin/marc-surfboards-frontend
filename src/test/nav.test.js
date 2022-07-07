import Nav from '../components/Nav';
import React from 'react';
import renderer from 'react-test-renderer'; 
import "@testing-library/jest-dom";







//nav component snapshot test

test('nav matches snapshot', () => {
    const tree = renderer
  
      .create(<Nav />)
      .toJSON()
      expect(tree).toMatchSnapshot();
    
  });

