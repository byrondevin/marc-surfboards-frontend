import Homepage from '../components/Homepage';
import React from 'react';
import renderer from 'react-test-renderer'; 
import "@testing-library/jest-dom";
import axios from 'axios';



//fetch users from db test
test('fetch users from db', async () => {
  
  let users = await axios.get(`http://localhost:5000/users`);
  expect(users[1]).toEqual(expect.arrayContaining(object));
});


//homepage snapshot test
test('homepage matches snapshot', () => {
    const tree = renderer
  
      .create(<Homepage />)
      .toJSON()
      expect(tree).toMatchSnapshot();
    
  });






