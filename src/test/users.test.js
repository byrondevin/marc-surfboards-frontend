import Users from '../components/Users';
import React from 'react';
import renderer from 'react-test-renderer'; 
import "@testing-library/jest-dom";
import axios from 'axios';




//fetch users from db test
test('fetch users from db', async () => {
  
  let users = await axios.get(`https://marc-surfboards-backend.herokuapp.com/users`);
  //expect(users[1]).toEqual(expect.arrayContaining(object));
  expect(users).toBeDefined();

});



//user page  snapshot test
test('users matches snapshot', () => {
    const tree = renderer
  
      .create(<Users />)
      .toJSON()
      expect(tree).toMatchSnapshot();
    
  });


 