
import axios from "axios";


export default function SignIn() {




    //signIn function. Triggered when signup form is subitted
    async function login (e) {

        //prevent default form redirection
        e.preventDefault();

        //try axios.post to sign in
        try{
            //login with post. recieve JWT token in return at user.data.token
            const { user } = await axios.post(`api/sign-in`, {email: e.target[0].value, password: e.target[1].value});
            console.log("USER");
            console.log(user);

            //set JWT token in session storage
            sessionStorage.setItem('JWT', user.data.token);
            let JWT = sessionStorage.getItem('JWT');

            console.log("JWT");
            console.log(JWT);

            //Inform user of successfull login
            alert("Login successful");

            // //redirect back to homepage
            window.location.replace('/');


        }
        //catches axios post errors and prints them out
        catch(e){

            console.log("ERROR LOGGING IN")
            console.log(e)
        
        }

        


    }



  return (
    <>

    {/* SIGNIN CONTENT CONTAINER */}
      <div className="SignIn container-fluid">

            {/* Heading 1 row an col */}
            <div className="row text-center">
                <div className="col">
                    <h1>Log in</h1>
                </div>
            </div>

            {/* Form row */}
            <div className="row justify-content-center text-center">
                
                {/* Form col. Responsive */}
                <div className="col-sm-6 m-5">

                    {/* Sign up form. Submit triggers signin(). Email & Password fields.  */}
                    <form onSubmit={login}>

                        {/* Email field */}
                        <div className="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        {/* Password field */}
                        <div className="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="exampleInputPassword1" placeholder="Password"/>
                        </div>

                        {/* Submit button to log in */}
                        <button type="submit" className="btn btn-primary mt-4">Sign In</button>
                
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}
