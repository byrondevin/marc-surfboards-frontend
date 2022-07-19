import Users from '../components/Users';
import React from 'react';
import renderer from 'react-test-renderer'; 
import "@testing-library/jest-dom";


//user page  snapshot test
test('users matches snapshot', () => {
    const tree = renderer
  
      .create(<Users />)
      .toJSON()
      expect(tree).toMatchSnapshot();
    
  });


 