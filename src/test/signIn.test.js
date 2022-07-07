import SignIn from '../components/SignIn';
import React from 'react';
import renderer from 'react-test-renderer'; 
import "@testing-library/jest-dom";
import axios from "axios";



//fetch users from db test
test('sign in', async () => {
  
  let user = await axios.post(`http://localhost:5000/sign-in`, {email: "e@e", password: "e"});
  expect(user.data.token).to.be.defined();
});




//sign-in page snapshot test

test('signIn matches snapshot', () => {
    const tree = renderer
  
      .create(<SignIn />)
      .toJSON()
      expect(tree).toMatchSnapshot();
    
  });

