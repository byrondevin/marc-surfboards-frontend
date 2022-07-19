
export default function Nav() {


    return(
        <>
            {/* Bootstrap navbar */}
            <nav class="navbar navbar-expand-lg navbar-light bg-light">

                <div class="navbar" id="navbarNav">

                    <ul class="navbar-nav">

                        {/* Home link */}
                        <li class="nav-item active">

                            <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                        
                        </li>

                       
                       {/* Login link */}
                        <li class="nav-item">
                        
                            <a class="nav-link" href="/login">Login</a>
                        
                        </li>


                        {/* Sign-up link */}
                        <li class="nav-item">
                        
                            <a class="nav-link" href="/signup">Sign-Up</a>
                        
                        </li>


                         {/* Enquiries link */}
                         <li class="nav-item">
                        
                            <a class="nav-link" href="/enquiries">Enquiries</a>
                        
                        </li>
                        

                        {/* Users link */}
                        <li class="nav-item">
                        
                            <a class="nav-link" href="/users">Users</a>
                        
                        </li>
                    </ul>
                </div>
            </nav>
        </>
        
    )
}