
# Flipkart Clone (MERN Stack)

![Flipkart Clone](./preview.png)

![Flipkart Clone](./details.png)

![Flipkart Clone](./cart.png)

## Description

This project is a clone of the popular e-commerce platform Flipkart, built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It aims to replicate the core functionalities of Flipkart, including browsing products, adding items to the cart, processing orders, user authentication, and integrating payment via Paytm.

## Features

- **User Authentication**: Allows users to sign up, log in, and manage their accounts securely.
- **Product Catalog**: Displays a wide range of products categorized into various departments for easy navigation.
- **Product Search**: Enables users to search for specific products based on keywords.
- **Product Details**: Provides detailed information about each product, including images, descriptions, prices, and customer reviews.
- **Shopping Cart**: Allows users to add products to their cart, update quantities, and remove items.
- **Checkout Process**: Guides users through a seamless checkout process, including address selection and payment.
- **Payment Integration**: Supports payment via Paytm, allowing users to securely complete transactions.
- **Order History**: Displays a history of past orders for each user.
- **Admin Dashboard**: Offers administrators the ability to manage products, categories, users, and orders.

## Technologies Used

- **Frontend**: React.js, Redux, Material-UI
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Payment Gateway**: Paytm API
- **Deployment**: vercel

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/flipkart_clone_mern.git
   ```

2. Navigate to the project directory:

   ```bash
   cd flipkart_clone_mern
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   ```

4. Set up environment variables:
   
   - Create a `.env` file in the `backend` directory.
   - Define the required environment variables, such as `MONGODB_URI`, `JWT_SECRET`, and `PAYTM_MERCHANT_ID`, `PAYTM_MERCHANT_KEY`, etc., required for Paytm integration.

5. Run the backend server:

   ```bash
   npm start
   ```

6. Run the frontend development server:

   ```bash
   npm start
   ```

7. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Feel free to submit bug reports, feature requests, or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Flipkart](https://www.flipkart.com/) for inspiring this project.
- [Paytm](https://paytm.com/) for providing the payment gateway.
- [Material-UI](https://material-ui.com/) for the UI components.

# flipkart_mern_app
# flipkart-clone-frontend
