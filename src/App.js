//IMPORTS
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Homepage";
import Nav from "./components/Nav";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Users from "./components/Users";
import Enquiry from "./components/Enquiry";



function App() {



  return (
    // React router used to define routes for each component
      <Router>
        <div className="App" >

          <Nav/>

            <div className="content">
              <Switch>

                <Route exact={true} path="/">
                  <Home/>
                </Route>

                <Route path="/test">
                  <Home/>
                </Route>

                <Route path="/login"> 
                  <SignIn/> 
                </Route> 

                <Route path="/signup">
                  <SignUp/>
                </Route>

                <Route path="/enquiries">
                  <Enquiry/>
                </Route>

                <Route path="/users">
                  <Users/>
                </Route>

              </Switch>
              
            </div>

        </div>
      </Router>
  );
}

export default App;
