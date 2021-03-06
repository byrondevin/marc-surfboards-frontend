

#Marc Surfboards
This is an informational site for MarcSurfboards, a company that manufactures custom surfboards.

Users can learn about the different boards sold and and make enquiries.

##Table of contents
1. Installation

2. Usage

3. Links to deployed apps

4. Credits

5. Software requirements

##Installation
No installation needed. Simply open https://illustrious-pavlova-ad9c7d.netlify.app/users using a web browser such as google chrome

##Usage
Provide potential Marc Surfboards customers with information about the product
Allows customers to lodge enquiries, which can be read by marcSurfboards website owners, who have admin access

##Links to deployed apps and git repositories
• Frontend deployed on Netlify
	⁃ https://illustrious-pavlova-ad9c7d.netlify.app/users
• Backend Deployed on Heroku
	⁃ https://marc-surfboards-backend.herokuapp.com/
• Git repositories
	⁃ Backend: https://github.com/byrondevin/marc-surfboards-backend
	⁃ Frontend: https://github.com/byrondevin/marc-surfboards-frontend

##Credits
Byron Devin - Website development
Marc Surfboards - Images

#Software Requirements document 


##System Architecture  
• App's web stack
	⁃ MERN stack (MongoDB, Express, React, Node.js)
• Architecture choice. 
	⁃ Deployed on Heroku because this service offers reliable and free hosting options
	⁃ Create react app
		⁃ Will be fetching info and content from DB to create pages
		⁃ Want to make use of the dynamic display that changes with user interactions when state values are updated
• Styling tools 
	⁃ Custom css, bootstrap
	⁃ Custom css
		⁃ Full control 
		⁃ Reliable
		⁃ Fast load speeds
	⁃ Bootstrap
		⁃ Convenience
		⁃ Responsive
• Reused architectural components that will be reused
	⁃ Navbar
	⁃ Board type div on homepage


##System Requirements  
• How the application will work
	⁃ Website for Marc Surfboards custom board orders
		⁃ No e-commerce capabilities
		⁃ Informational site about the custom boards and order process
		⁃ Contact form for custom orders
	⁃ Login
		⁃ Customer login
			⁃ Force customers to login for the purposes of this project
	⁃ Admin login
		⁃ access to edit User Info Page
		⁃ Form used to edit the user info
• Users
	⁃ Marc Surfboards potential customers
• Traffic sources
	⁃ Organic Social media (Instagram)
	⁃ Direct traffic
	⁃ Google
	⁃ Name searches (no SEO campaign targeting other keywords) 
• Site uses
	⁃ Informational website informing users about Marc Surfboards products and services (custom surfboards)
	⁃ Ability to contact the owner to make a purchase
		⁃ Done through contact form that includes information the shaper needs to understand what the customer has in mind
• User stories
	⁃ Create normal user account 
		⁃ From standard sign up page, linked to from homepage & sign in page
		⁃ The actor submits new customer account data from the sign up form
		⁃ The system assigns the customer an account number, creates a customer record, and creates an account record
		⁃ The actor is redirected to the sign in page
			⁃ Can I automatically log a user in after they create an account? If so, redirect to HP
	⁃ Create admin user account
		⁃ Navigate to secret admin signup url
			⁃ Secret link held by the website owner
			⁃ Website owner can use this link to create admin users
	⁃ Log In
		⁃ If user not logged in, they will be asked to navigate to the standard sign in page
			⁃ link to sign up page from here
		⁃ From the login page, the actor uses the login form to summit their login information 
		⁃ The system checks the login information against the database
			⁃ BCrypt encodes login info
			⁃ If the submitted information is successfully verified, a JWT toke is returned
				⁃ Depending on user permissions, a basic or admin JWT token is returned
				⁃ Admin users can edit product info
			⁃ If the submitted information does not match the DB info, users informed of the issue and asked to try again.
	⁃ View a type of custom surfboard & submit contact form
		⁃ From the homepage and Navbar, an actor is presented with 3 product options
			⁃ Custom shortboard
			⁃ Custom longboard
			⁃ Custom Fun-board / Mid-length
			⁃ Step-Up / Gun
		⁃ Once the actor clicks on one of the options, they are directed to the product information page
			⁃ Provides information on the order process and the client's various design options
			⁃ Enquiry form located at the bottom of the page
		⁃ Actor fills out and submits enquiry form
			⁃ No redirect after form submission
			⁃ Alert that the enquiry has been submitted 
	⁃ Log in as admin and change pricing
		⁃ From the login page, the actor uses the login form to summit their login information 
		⁃ The system checks the login information against the database
			⁃ BCrypt encodes login info
			⁃ If the submitted information is successfully verified, a JWT toke is returned
				⁃ Depending on user permissions, a basic or admin JWT token is returned
				⁃ Admin users can edit product info
			⁃ If the submitted information does not match the DB info, users informed of the issue and asked to try again.
		⁃ Once logged in as admin, The edit pricing page will be visible
			⁃ Link in navbar
		⁃ Actor clicks on the 'edit pricing' navbar item and is redirected to the edit pricing page
			⁃ This page includes a form that includes price input fields with accompanying labels that allow the actor to edit the various types of custom-boards' prices
• Competing software: Wordpress 
	⁃ How this software will be different?
		⁃ Custom coded vs Templates and page building software
	⁃ Benefits of chosen software
		⁃ Potential advantages of custom code
			⁃ Faster page speeds without optimism
			⁃ No plugins to update
				⁃ can cause conflicts and break parts of the site
				⁃ out of date plugins = security risk
			⁃ No potential security breaches from 3rd party software
			⁃ No subscription fees to paid plugins
	⁃ Potential disadvantages of custom code
		⁃ Need a developer to add a product or update product info
		⁃ No access to plugins
	⁃ Need to create aim dashboard
