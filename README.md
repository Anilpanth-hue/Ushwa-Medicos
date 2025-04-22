# Ushwa MEDICAL AGENCY - E-commerce Platform

Welcome to the official GitHub repository for **Ushwa MEDICAL AGENCY**'s e-commerce platform. This project enables **Ushwa Medical Agency** to manage their product inventory, customer orders, and admin analytics for their wholesale medical supply business.

## Project Overview

### Business Details

- **Name:** Ushwa Medical Agency
- **Address:** Old Bus Stand, Shahid Chowk, Garoth, Distt-Mandsaur, Madhya Pradesh - 458880
- **Owner:** Praveen Gupta
- **Contact:** +91 98264 54554
- **Email:** v_meddical@yahoo.in
- **Established:** 1992

### Tech Stack

- **Frontend:** React.js, Bootstrap CSS (mobile-first, responsive design)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **User Authentication:** JSON Web Tokens (JWT), OAuth (Google/Facebook login)
- **Hosting:** To be configured (suggested: DigitalOcean for backend and MongoDB Atlas for database)

## Features

### Admin Panel

1. **Authentication**

   - Single admin account with predefined credentials:
     - **Username:** Ushwa
     - **Password:** Ushwa@123
   - Protected routes with JWT-based authentication.

2. **Dashboard**

   - **Sales Analytics:** Filter by daily, weekly, monthly, and yearly statistics.
   - **Stock Management:** Live tracking and low-stock alerts.
   - **Order Statistics:** View order completion rates and outstanding orders.

3. **Product Management**

   - **CRUD Operations** for products, including:
     - **Fields:** Name, drug formula, unit price, box price, image, category, stock.
     - **Image Upload:** Integration with cloud storage for image management.
   - **Category Management:** Create, view, edit, and delete product categories.

4. **Order Management**

   - **Order Overview:** Modify orders, update statuses (pending/completed/delivered).
   - **Stock Adjustment:** Real-time adjustments on stock levels when orders are processed.

5. **Notifications**
   - **New Order Alerts:** Real-time notifications for new orders.
   - **Low Stock Warnings:** Notifications when stock reaches below the specified threshold.

### Customer Panel

1. **Authentication**

   - **Social Login:** Sign in with Google or Facebook.
   - **Email/Phone Registration:** Custom registration with a default "Dr." prefix and standard Indian phone number format.

2. **Shopping Experience**

   - **Product Browsing:** View products with grid/card views.
   - **Search:** Quick search by drug/product name.
   - **Cart Management:** Add/remove items, checkout process.
   - **Order Tracking:** Track order status and estimated delivery.
   - **Profile Management:** Update profile details, including mobile number and address.
   - **Contact Form:** Integrated contact form for support and inquiries.

3. **Navigation**
   - **Home:** Company history and about page.
   - **Products:** List of available products.
   - **Notifications:** User-specific notifications for order status and promotions.
   - **Cart:** Shopping cart overview.
   - **Orders:** View past and current orders.
   - **Profile:** User profile management.

### Additional Functionalities

- **Responsive Design:** Mobile-first with a teal pastel medical-themed UI.
- **Toast Notifications:** Instant feedback on user actions.
- **Data Validation and Error Handling:** Form validation and proper error messaging.
- **Performance Optimization:** Improved response times and caching techniques.
- **Automated Backups:** Regular backups for data reliability.
- **Analytics Integration:** Integration with Google Analytics for user activity insights.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/kartik2629/Ushwa-medical-agency.git
   cd Ushwa-medical-agency
   ```

2. **Backend Setup**

   - Install dependencies:
     ```bash
     cd backend
     npm install
     ```
   - Create a `.env` file in the backend directory:
     ```plaintext
     MONGODB_URI=your-mongodb-connection-string
     JWT_SECRET=your-jwt-secret
     ADMIN_USERNAME=Ushwa
     ADMIN_PASSWORD=Ushwa@123
     ```
   - Start the server:
     ```bash
     npm start
     ```

3. **Frontend Setup**
   - Install dependencies:
     ```bash
     cd frontend
     npm install
     ```
   - Create a `.env` file in the frontend directory:
     ```plaintext
     REACT_APP_API_URL=http://localhost:5000
     REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
     REACT_APP_FACEBOOK_APP_ID=your-facebook-app-id
     ```
   - Start the frontend server:
     ```bash
     npm start
     ```

## Folder Structure

```plaintext
.
├── backend
│   ├── config
│   ├── controllers
│   ├── models
│   ├── routes
│   └── server.js
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.js
└── README.md
```

## Dependencies

### Backend

- **Express.js**: Node.js web application framework.
- **MongoDB**: Database.
- **Mongoose**: MongoDB object modeling tool.
- **JWT**: JSON Web Token for secure user authentication.
- **Bcrypt**: Password hashing.

### Frontend

- **React.js**: JavaScript library for building user interfaces.
- **Bootstrap**: CSS framework for styling.
- **Axios**: HTTP client for API requests.

## Future Enhancements

- **Payment Gateway Integration**: Integrate Razorpay or Stripe for online payments.
- **Product Reviews**: Allow customers to review and rate products.
- **Push Notifications**: Real-time notifications for app users.
- **SEO Optimization**: Improve search engine visibility with meta tags and social sharing.
