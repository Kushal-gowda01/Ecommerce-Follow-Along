# E-Commerce-_FollowAlong

## 🚀 Project Overview

This is a full-featured E-Commerce web application built with the **MERN stack** (MongoDB, Express, React, Node.js). It includes complete user authentication, product management, order processing, and payment gateway integration.

---

## 🔧 Features

### Authentication Page  
- User login and signup functionality  
- Password encryption and validation  
- Token-based session management  

### Product Page  
- Display available products  
- Search and filter support  

### Order Page  
- View and track orders  

### Payment Gateway  
- Multiple payment methods (Credit/Debit, UPI, Wallet)  
- Mock payment integration  
- Secure transaction handling  

---

## 🛠 Tech Stack

### Frontend  
- **React** – UI library  
- **Next.js** – Server-side rendering and routing  

### Backend  
- **Node.js & Express** – RESTful API  
- **Mongoose** – MongoDB ODM  

### Database  
- **MongoDB** – Stores users, products, orders, and payments  

---

### Ecommerce-Follow-Along

## Project Milestones

### Milestone 1: Project Overview
- Defined project scope and key features
- Selected MERN stack for development
- Planned implementation of user authentication, product management, and order handling

### Milestone 2: Project Setup and Login Page
- Created structured folder hierarchy
- Set up React app for frontend
- Set up Node.js server for backend
- Configured Tailwind CSS for styling
- Built functional Login Page

### Milestone 3: Backend Structure Setup
- Set up dedicated folders for backend code organization
- Initialized and configured Node.js server
- Connected application to MongoDB
- Implemented basic error handling

### Milestone 4: User Management
- Created User Model for database structure
- Developed User Controller for managing user interactions
- Configured Multer for file uploads

### Milestone 5: Frontend Signup Page
- Developed frontend signup page with React
- Added form validation for email and password
- Integrated with backend API
- Implemented error handling

### Milestone 6: JWT Authentication
- Implemented secure authentication using JSON Web Tokens
- Added protected routes with middleware
- Used bcrypt.js for password hashing
- Created user login/logout API endpoints
- Implemented token storage for session management

### Milestone 7: Backend User Login Authentication
- Created login API endpoint
- Implemented password validation with bcrypt
- Added error handling for invalid credentials

### Milestone 8: Frontend Product Card & Homepage
- Designed reusable product card component
- Created structured homepage layout
- Implemented array mapping for dynamic product display

### Milestone 9: Frontend Product Input Form
- Created form to collect product details
- Added multiple image upload functionality
- Implemented form validation

### Milestone 10: Backend Product Schema & API
- Created Mongoose schema for products
- Built POST endpoint for storing product details
- Implemented validation for data integrity

### Milestone 11: Dynamic Home Page
- Created endpoint to fetch product data from MongoDB
- Implemented frontend data fetching
- Displayed products dynamically using card component

### Milestone 12: My Products Page
- Added backend endpoint to fetch products by user email
- Created function to retrieve and display user's products
- Utilized Card component for product presentation

### Milestone 13: Edit Product Functionality
- Added endpoint to update existing data
- Implemented autofill for edit forms

### Milestone 14: Delete Product Functionality
- Created endpoint to delete products
- Added delete functionality on frontend

### Milestone 15: Responsive Navbar
- Created reusable Nav component
- Added links to Home, Add product, and Cart pages
- Implemented responsive design for all screen sizes

### Milestone 16: Product Detail Page
- Created detailed product view page
- Added Buy and Cart buttons
- Implemented similar products section

### Milestone 17: Cart Functionality Backend
- Set up cart model in MongoDB
- Created API endpoints for managing cart

### Milestone 18: Fetch Products in Cart
- Implemented endpoint to fetch cart products by user email
- Added structured data format for cart display

### Milestone 19: Cart Functionality Frontend
- Built responsive cart page to display products
- Added quantity adjustment buttons
- Created backend endpoints for quantity updates

### Milestone 20: Profile Page and User Data API
- Implemented profile page showing user information
- Created backend endpoint for retrieving user data
- Added address display section

### Milestone 21: Address Form
- Created form for inputting address details
- Implemented state management for form data
- Added navigation from profile page

### Milestone 22: Save Address in User Profile
- Created backend endpoint to store addresses
- Updated user collection to include multiple addresses

### Milestone 23: Place Order and Select Address Page
- Added Place Order button in cart page
- Created select address page to choose delivery address
- Set up backend API for addresses
- Defined Order Schema for MongoDB

### Milestone 24: Order Confirmation Page
- Created page to review order details
- Displayed ordered products and selected address
- Added total price calculation
- Implemented Place Order button

### Milestone 25: Place Order Endpoint
- Developed endpoint to handle order placement
- Created functionality to store orders in MongoDB

### Milestone 26: Get User Orders Endpoint
- Created endpoint to retrieve user orders
- Implemented email-based user identification

### Milestone 27: My Orders Page
- Built frontend page to display user orders
- Integrated with backend endpoint
- Added to navbar for easy access

### Milestone 28: Cancel Order Feature
- Added Cancel Order button to orders page
- Created backend endpoint for order cancellation
- Implemented conditional button visibility

### Milestone 29: PayPal Integration Setup
- Created PayPal Developer account
- Set up Sandbox Account
- Added payment options to order confirmation page
- Implemented radio buttons for payment method selection

### Milestone 30: PayPal Payment Processing
- Integrated PayPal API for secure payments
- Used react-paypal-js for UI integration
- Added support for multiple payment methods

