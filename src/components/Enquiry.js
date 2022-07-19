import axios from "axios";
import React, { useState, useEffect } from 'react';


export default  function Enquiry() {

    //state variable for array of user objects. Mapped to display list of users
    const [enquiryState, setEnquiryState] = useState([{_id: 'No Enquiries', email: 'Only admin users have access to this page', password: 'You have been denied entry', admin: false}, {_id: 'No Enquiries 2', email: 'Only admin users have access to this page 2', password: 'You have been denied entry 2', admin: false,}]);
    
    //get jwt from session storage
    let JWT = sessionStorage.getItem('JWT');
  

    //Request to Get all users 
      async function getEnquiries () {
        
        try{
        let enquiries = await axios.get(`https://marc-surfboards-backend.herokuapp.com/enquiry`, {headers: {"Authorization": `Bearer ${JWT}`}});
        enquiries=enquiries.data;
        setEnquiryState(enquiries);

        }
        catch(e){
          console.log("GET ALL ENQUIRIES FALIED");
          console.log(e);
        }
        
    }

    //Request to Delete all enquiries 
    async function deleteEnquiry(e){
      
      console.log (e.target.id);
    
        //Try axios post with method ovverride to change to delete request.
        try{
          console.log ("Into try");

          //request to express that handles the db delete
          let enquiryDelete = await axios.delete(`https://marc-surfboards-backend.herokuapp.com/enquiry/${e.target.id}`, {headers: {"Authorization": `Bearer ${JWT}`}});

          //removing item from state array. updates display
          setEnquiryState(enquiryState.filter(user => user._id !== e.target.id))

          return enquiryDelete;
        }
        catch(e){
          //catching and throwing any error if axios get fails. Alerting user of failed search.
          console.log("axois delete  from db failed");
          throw(e);

        }
  
  }
    


    //run getEnquiries() function to get all Enquiries from db after page loaded
    useEffect(() => {

      getEnquiries ();

    },[])



    

  return (
    <div className="Enquiries">

      <div className="container-fluid hi">

        {/* Main heading and subheading */}
        <div className="row text-center">
          <div className="col">
            <h1>Enquiries</h1>
            <p className='h3'>Marc Surfboards</p>
          </div>
        </div>
        {console.log(enquiryState)};
            {/* Mapping Enquiries to display the list of Enquiries retrieved from DB fetch */}
                {
                    enquiryState.map(item => (
                        // User ID used as item container key
                        <div key={item._id}>

                            
                            <div className='row border p-5'>

                                {/* Col: DISPLAY User data  */}
                                <div className='col'>

                                    {/* Display user info heading */}
                                    <h3>Enquiry Information</h3>
                                    {/* User Id */}
                                    <p>Enquiry ID: {item._id}</p>
                                    {/* Enquirer's Name */}
                                    <p>Enquirer's name: {item.name}</p>
                                    {/* User email */}
                                    <p>Enquirer's Email address: {item.email}</p>
                                    {/* User password */}
                                    <p>Board Type: {item.board}</p>
                                    {/* User admin access */}
                                    <p>Message: {item.message}</p>

                                    <button id={item._id} onClick={deleteEnquiry } type="btn" className="btn btn-primary mt-4">Delete</button>


                                </div>
                            </div>
                        </div>
                    ))
                }


      </div>

      
    </div>
  )
}
