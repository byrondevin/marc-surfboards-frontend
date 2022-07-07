import SignUp from '../components/SignUp';
import React from 'react';
import renderer from 'react-test-renderer'; 
import "@testing-library/jest-dom";




//sign-up page snapshot test
test('signUp matches snapshot', () => {
    const tree = renderer
  
      .create(<SignUp />)
      .toJSON()
      expect(tree).toMatchSnapshot();
    
  });

