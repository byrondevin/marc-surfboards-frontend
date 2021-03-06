import axios from "axios";
import React, { useState, useEffect } from 'react';


export default  function Users() {

    //state variable for array of user objects. Mapped to display list of users
    const [userState, setUserState] = useState([{_id: 'Log In to see users', email: 'Only admin users have access to this page', password: 'You have been denied entry', admin: false}, {_id: 'Log In to see users 2', email: 'Only admin users have access to this page 2', password: 'You have been denied entry 2', admin: false}]);
    
    
    //get jwt from session storage
    let JWT = sessionStorage.getItem('JWT');
  

    //Request to Get all users 
      async function getUsers () {

        let users = await axios.get(`https://marc-surfboards-backend.herokuapp.com/users`, {headers: {"Authorization": `Bearer ${JWT}`, "Content-Type": "application/json"}});

        users= users.data.users;

        setUserState(users);

        return users;

    }

    //Request to Delete all users 
    async function deleteUser(e){
    
        //Try axios post with method ovverride to change to delete request.
        try{

          //request to express that handles the db delete
          let userDelete = await axios.delete(`https://marc-surfboards-backend.herokuapp.com/usersdel/${e.target.id}/`, {headers: {"Authorization": `Bearer ${JWT}`}});

          //removing item from state array. updates display
          setUserState(userState.filter(user => user._id !== e.target.id))

          return userDelete;
        }
        catch(e){

          //catching and throwing any error if axios get fails. Alerting user of failed search.
          console.log("axois delete  from db failed");
          throw(e);

        }
  
  }



  //EDIT USER REQUEST
  async function editUser(e){

    //prevent reload on form submit
    e.preventDefault();

    //extract new user info from form
    const userId = e.target.id;
    const userEmail = e.target[0].value;
    const userPW = e.target[1].value;
    let userAdmin = e.target[2].checked;

    const params = JSON.stringify({
      "userId":userId,
      "userEmail":userEmail,
      "userPW":userPW,
      "userAdmin":userAdmin
    })

    try{
      
      //request to edit user
      let editedUser = await axios.put(
        //request URL
        `https://marc-surfboards-backend.herokuapp.com/users`, 
        //request body
        params,
        //request headers
        {
          "headers":{
            "content-type":"application/json"
          }
        }
      )

      //fetch new, edited list of users from db
      getUsers ();
      
      //return edited user
      return editedUser;


    //catch errors related to the edit user PUT request
    }catch(e){

      console.log("Axios PUT request to edit users failed");
      console.log(e);
    }
  }
    


  //run getUsers() function to get all users from db after page loaded
  useEffect(() => {

    getUsers ();

  },[])

    

  return (
    <div className="Users">

      <div className="container-fluid">

        {/* Main heading and subheading */}
        <div className="row text-center">
          <div className="col">

            <h1>Users</h1>
            <p className='h3'>Marc Surfboards</p>

          </div>
        </div>

            {/* Mapping users to display the list of users retrieved from DB fetch */}
                { 
                  userState.map(item => (
                        // User ID used as item container key
                        <div key={item._id}>
                            
                            <div className='row border p-5'>

                                {/* Col: DISPLAY User data  */}
                                <div className='col'>

                                    {/* Display user info heading */}
                                    <h3>User Information</h3>
                                    
                                    {/* User Id */}
                                    <p>ID: {item._id}</p>

                                    {/* User email */}
                                    <p>Email address: {item.email}</p>

                                    {/* User password */}
                                    <p>Password: {item.password}</p>

                                    {/* User admin access */}
                                    <p>Admin: {item.admin.toString()}</p>

                                    <button id={item._id} onClick={deleteUser} type="btn" className="btn btn-primary mt-4">Delete</button>

                                </div>


                                {/* Col: EDIT User data  */}
                                <div className='col'>

                                    {/* Edit form heading */}
                                    <h3>Edit User Details</h3>

                                    {/* Edit form b */}
                                    <form onSubmit={editUser} id={item._id}>

                                        {/* Email address input */}
                                        <div className="form-group" key={item._id}>
                                          
                                            <label for="emailEditForm">Email address</label>
                                            <input type="email" className="form-control" name="emailEditForm" aria-describedby="emailHelp" placeholder="Enter email" key={item._id}/>
                                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                        
                                        </div>

                                        {/* password input */}
                                        <div className="form-group">

                                            <label for="passwordEditForm">Password</label>
                                            <input  type="password" className="form-control"  name="passwordEditForm" placeholder="Password" key={item._id}/>
                                        
                                        </div>

                                        {/* admin acces input */}
                                        <div className="form-group form-check">

                                            <input type="checkbox" className="form-check-input checked" name="adminCheckbox"/>
                                            <label className="form-check-label" for="adminCheckbox"  >Admin access</label>
                                        
                                        </div>

                                        {/* form submit button */}
                                        <button  type="submit" className="btn btn-primary mt-4">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                  ))
                }


      </div>

      
    </div>
  )
}
