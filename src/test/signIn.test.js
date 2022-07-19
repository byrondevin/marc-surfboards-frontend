import SignIn from '../components/SignIn';
import React from 'react';
import renderer from 'react-test-renderer'; 
import "@testing-library/jest-dom";
import axios from "axios";



//fetch users from db test
test('sign in', async () => {
  
  let user = await axios.post(
    `https://marc-surfboards-backend.herokuapp.com/sign-in`, 
    {email: "r@r", password: "r"}
  );
  expect(user.data.token).toBe("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJAciIsImFkbWluIjp0cnVlfQ.HaQpcsr8nqCvnMlPIO55ufUhq1csbzTsSVQCDE3yWMo");
//to be json
});




//sign-in page snapshot test
test('signIn matches snapshot', () => {
    const tree = renderer
  
      .create(<SignIn />)
      .toJSON()
      expect(tree).toMatchSnapshot();
    
  });

