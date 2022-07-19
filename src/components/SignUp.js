//IMPORTS
import axios from "axios";


export default function SignUp() {


    // signUp function. Triggered when signup form is subitted
    async function signUpAddUser (e) {

        //prevent default form redirection
        e.preventDefault();


            //Try add user to DB with post request
            try{

                //sign up new user
                let addUser = await axios.post(`https://marc-surfboards-backend.herokuapp.com/sign-up` , {email: e.target[0].value, password: e.target[1].value});

                //Alert user of sign up success
                alert("Sign Up Success: You will be redirected to the login page");
        
                //redirect to login page after sign-up
                window.location.replace('/login');
                
            }
            //Catch error from Add user to DB with post request
            catch(e){

                console.log('ERROR: add user to DB failed')
                console.log(e)
                alert("Sign Up Failed: try a different email address");

            }

    }



  return (
    <>
    {/* SIGNUP COONTENT CONTAINER */}
      <div className="SignUp container-fluid">

        {/* Heading 1 row an col */}
        <div className="row text-center">
            <div className="col">
                <h1>Sign up</h1>
            </div>
        </div>

        {/* Form row */}
        <div className="row justify-content-center text-center">
            
            {/* Form col. Responsive */}
            <div className="col-sm-6 m-5">

                {/* Sign up form. Submit triggers signup(). Email & Password fields.  */}
                <form onSubmit={signUpAddUser}>

                    {/* Email address input */}
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>

                    {/* password input */}
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password"/>
                    </div>

                    {/* submit button */}
                    <button type="submit" className="btn btn-primary mt-4">Sign Up</button>
                </form>
            </div>
        </div>
      </div>

      
    </>
  )
}
