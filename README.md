# E-Commerce-_FollowAlong
 **Features**

1. **Authentication Page**  
   - User Login and Signup functionality.  
   - Password security.  
   - Token-based authentication for session management.  

2. **Product Page**  
   - Displays a list of available products.  
   - Search and filter functionality for efficient product browsing.  

3. **Order Page**  
   - View all past orders with relevant details (product name, price, date).  
   - Track the status of current orders.  

4. **Payment Gateway**  
   - Multiple payment methods (credit/debit card, UPI, wallet).  
   - Secure transaction handling.  
   - Mock payment integration for testing.


   ## Tech Stack

### **Frontend**  
- **React**: For building an interactive and dynamic user interface.  
- **Next.js**: For server-side rendering and improving performance.  

### **Backend**  
- **Express.js**: For building the RESTful API to handle business logic.  
- **Mongoose**: For managing the MongoDB database and creating schemas.  

### **Database**  
- **MongoDB**: To store user information, product data, orders, and payment records. 
---

## MILESTONE1 :-
1. Set Up the Development Environment
Installed all the necessary tools and dependencies to set up the development environment for the MERN (MongoDB, Express, React, Node.js) stack project. This includes configuring the backend and frontend dependencies to ensure smooth development.
2. Understand Server-Client Interaction
Gained an understanding of how the frontend (React) interacts with the backend (Node.js/Express) using APIs. Focused on how the client sends requests to the server, and how the server processes them and sends back responses.
3. Set Up a Simple Server
Created a basic server using Node.js and Express, laying the foundation for the project. The server is set up to handle API requests and provide a foundation for future endpoints and business logic.

---
## MILESTONE 2  :-
1. Create a Structured Folder Hierarchy
Designed and implemented a structured folder hierarchy for the project, organizing the files in a way that ensures easy maintainability and scalability for both the frontend and backend.
2. Set Up React App (Frontend) and Node.js Server (Backend)
Frontend: Set up a React app to serve as the user interface for the project.
Backend: Configured a Node.js server using Express to handle API requests, providing the foundation for server-side logic and database interaction.
3. Configure Tailwind CSS for Styling
Integrated and configured Tailwind CSS into the project to streamline the styling process and improve the overall design flexibility with utility-first CSS.
4. Add Optional Extensions for Development Efficiency
Installed and configured optional extensions such as Prettier, ESLint, and others to improve code formatting, quality, and overall development workflow.
5. Build a Functional and Styled Login Page (Frontend)
Developed and styled a Login Page for the frontend using React, Tailwind CSS, and connecting it to the backend for user authentication functionality.

---
## MILESTONE3 :- 
1. Set Up Dedicated Folders for Organizing Backend Code
Created dedicated folders for organizing the backend code. This ensures better structure and maintainability of the server-side code, with clear separation of concerns.
2. Initialized and Configured a Node.js Server
Set up a Node.js server using Express to handle API requests. This provides the backbone for the backend, allowing it to process incoming requests and return responses.
3. Connected the Application to MongoDB
Established a connection to MongoDB, enabling the application to store and manage data in a NoSQL database. This allows for flexible data handling and seamless interactions with the backend.
4. Implemented Basic Error Handling
Incorporated basic error handling in the server to ensure smooth operation. This handles potential errors gracefully, improving the reliability and stability of the application.

---

## MILESTONE4 :-
1. Create a User Model
Designed and implemented a User Model that serves as a blueprint for how user data is structured and stored in the database. This model defines the user schema and the fields that are needed for user-related data.
2. Create a User Controller
Developed a User Controller that handles the logic related to user data. It manages tasks such as adding a new user, retrieving user information, and other user-related operations.
3. Enable and Configure Multer for File Uploads
Configured Multer to handle file uploads in the application. This allows users to upload files (like images) which will be stored appropriately in the system. Multer is set up to handle storage configurations and file validation.


---


## MILESTONE5 :-
1. Created a Sign-Up Page in React.
2. Implemented form validation for:
      Name (required)
      Email (valid format required)
      Password (minimum 2 characters)
      Password Confirmation (must match password)

4. Used React Router for navigation.

---


## Milestone 6: User Registration and Authentication
1. User Creation Endpoint (/create-user):
 Implemented an endpoint to create a new user.
 Validated the email to ensure the user doesn’t already exist.
 Successfully handled file uploads (e.g., avatar) using multer.

 2. Password Hashing:
 Used bcryptjs to hash passwords before saving them to the database, ensuring secure password storage.

4. Error Handling:
Incorporated centralized error handling using a custom ErrorHandler class.
Applied catchAsyncErrors middleware to manage asynchronous errors in the routes.

5. User Data Storage:
Stored user details (e.g., name, email, password, avatar) in MongoDB with encrypted password.

6. Email Notification (Optional):
Integrated an email notification system to send a welcome email to the user after successful registration (using sendMail).

7. JWT Token Generation:
Added a method to generate JWT tokens upon user login (for future use in authentication routes).
---

## Milestone 7: Create Login Endpoint
1. Task Completed ✅
2. Implemented a login API endpoint.
3. Accepted user credentials (email/username and password).
4. Retrieved the corresponding user from the database.
5. Validated the password using bcrypt.
6. Compared the entered password with the stored hashed password for authentication.
7. Generated a JWT token upon successful login for authentication.
8. Implemented error handling for invalid credentials and server errors.




---

## MILESTONE 8:- 
Design the Homepage Layout.
Set up a responsive grid layout to display multiple product cards neatly.
Ensured the layout adapts to different screen sizes for a better user experience.
done

## Milestone 9:-
Created the form for products
This form will take multiple product images images as input

## Milestone 10:-
Builded a POST endpoint to receives product data.
Validated and saved the product details to MongoDB.


## Milestone 11:-
Fetch & Display Products
Created an API endpoint to fetch all products from the database.
Implemented a frontend function to fetch and display product data dynamically.
Used useState and useEffect to manage the data lifecycle.


## Milestone 12:- 
Fetch & Display Filtered Products
Created an API endpoint to fetch products based on the user's email.
Implemented frontend logic to request and display filtered products.
Ensured efficient state management using React hooks.

## Milestone 13:- 
Edit Product Functionality
Created a PUT API endpoint to update product details in MongoDB.
Added an Edit button on the product card.
Implemented auto-filled form for editing existing product details.
Connected frontend with backend to send PUT requests.
Handled errors and ensured data validation.

# Milestone 14:-

Edit & Delete Product Functionality 
Created a PUT API endpoint to update product details in MongoDB. 
Added an Edit button on the product card. 
Implemented auto-filled form for editing existing product details. 
Connected frontend with backend to send PUT requests. 
Handled errors and ensured data validation. 
Created a DELETE API endpoint to remove products from MongoDB. 
Added a Delete button to the product card. 
Integrated frontend with backend to send DELETE requests. 

# Milestone 15:- 

Create a New Nav Component
The Navbar should include links to the following pages:
- Home
- My Products
- Add Product
- Cart
Navbar is responsive and adapts to different screen sizes.
Add Navbar to All Pages
Import and integrate the Nav component into all pages.
Ensure smooth navigation between different sections of the application.
Make the Navigation Smooth & User-Friendly
Use React Router for handling navigation.
Implement active link highlighting for better UX.
Optimize the layout to be mobile-friendly.

# Milestone 16 :- 
Creating a Product Info Page 🛒
Create a New Product Info Page
The page should display detailed information about a product.
Include product name, image, price, and description.
Add a Quantity Selector
Allow users to select the desired quantity of the product.
Ensure the quantity selection updates dynamically.
Implement the Add to Cart Button
Add a button that allows users to add the selected quantity of the product to their cart.
Ensure smooth user interaction and feedback after adding to cart.

# Milestone 17:-
 Add Products to Cart & Store in Database
1. Created the Cart Schema: Defined a schema to store cart products linked to users.
2. Implemented an API endpoint: Developed a backend route to handle adding products to the cart.
3. Stored Cart Data: Successfully saved product details in the database under the user's cart.
----

# Milestone 18: 
Fetch Products Inside Cart
Developed an API endpoint: Allowed the frontend to send requests to retrieve cart products.
Fetched Cart Data: Implemented a query to get products inside the cart for a specific user.
Tested API Responses: Ensured data retrieval worked seamlessly.

# Milestone 19:-

1. reate the Cart Frontend Page

Design and implement a Cart page in the frontend.
Fetch the cart products from the backend and display them.
Ensure that the cart layout is user-friendly and responsive.

2. Implement Quantity Controls

For each product, add + and - buttons to modify the quantity.
Update the UI dynamically when the quantity changes.
Ensure that the quantity does not go below 1.

3. Develop Backend Endpoints for Quantity Updates

Create an endpoint to increase the product quantity in the cart.
Create an endpoint to decrease the product quantity.
Ensure that the backend updates the cart data correctly in the database.
Handle edge cases like product quantity limits and stock availability.


# milestone 20
Profile Page Implementation 

1. Create a Backend Endpoint for User Data

- Develop an endpoint that retrieves and sends user data.
- Ensure secure handling of user information.

2. Create the Frontend Profile Page

- Design a profile page layout that is clean and user-friendly.
- Fetch and display user data from the backend.

3. Display User Information

Show profile photo, name, and email in one section.
Display addresses in another section with an "Add Address" button.
If no addresses are available, display "No address found".

# Milestone 21  
1. Address Input Form   

Create the Address Form Page   
Build a React component for the address input form.  
Use controlled inputs to manage form state.

2. State to Store Input Address

Use useState to store the form data.
Update state whenever the user types in the form fields.

3. Implement Navigation to Address Form

When clicking Add Address in the Profile page, navigate to the address form page.
Use React Router for navigation.

# Milestone 22 - 
 Implement Address Storage Endpoint
 
1. Create the Endpoint in Express
- Defined a `POST` route to handle incoming address data.
- Extracted the user ID and address from the request body.
- Updated the user document by adding the new address to the `address` array.
2. Update the User Schema (if necessary)
- Ensured that the `User` schema has an `address` field as an array.
3. Test the Endpoint
- Used Thunder Client, Postman, or a frontend form to test the functionality.

---
# Milestone 23: 
Implementing Place Order Functionality 

1. **Create a Place Order Button**
   - Inside the **Cart Page**, add a `Place Order` button.
   - When clicked, navigate to the **Select Address** page.
2. **Create the Select Address Page**
   - Display all available addresses of the user.
   - Provide an option to **select one address**.
3. **Backend Endpoint for User Addresses**
   - Write a backend API endpoint to fetch all the addresses of the user

      ---
# Milestone 24: 
Finalizing the Order Process 

1. **Display Ordered Products**
   - Show all the products that the user is ordering.
2. **Display Selected Address**
   - Show the address chosen by the user for delivery.
3. **Show Cart Total Value**
   - Calculate and display the total amount of the cart.
4. **Add Place Order Button**
   - At the bottom, provide a `Place Order` button to confirm the order.

---

# Milestone 25 

1. create an endpoint that will receive the products, user, address details.
2. get the mail of the user using that retrive the _id of the user
3. the order will be different with same address
4. created earlier  store order details in mongodb order collection

# Milestone 26

1. created an endpoint that will receive the user mail
2. the mail of the user to retrive the _id of the user
3. Using that _id it  get all the orders of that user

### Milestone 27: 
Frontend page for displaying all the orders.

- created an my-orders page
- get request to my-orders endpoint that we created in previous milestone.
- Displayed all the user orders
- added my-orders page in navbar for better navigation.


### Milestone 28: 
Feature to cancel the placed orders.

- In my-orders page for every order added cancel order button
- created an endpoint that will receive the order-id