# Farm Fresh Grocery Store

Welcome to the Farm Fresh Grocery Store project! This web-based application provides users with a convenient way to browse and purchase fresh produce online.

## Description

The Farm Fresh Grocery Store allows users to browse a selection of fruits and vegetables, add items to their cart, and place orders for delivery. It includes features such as user authentication, inventory management, and a checkout process.


## Technologies Used

- Node.js
- Express.js
- MySQL
- Body-parser

## Installation

To run this project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install Node.js and npm if you haven't already.
3. Install the project dependencies by running `npm install` in the project directory.
4. Set up a MySQL database and import the necessary schema and data.
5. Update the database configuration in the `app.js` file with your MySQL credentials.
6. Run the application by executing `node app.js` in the project directory.
7. Access the application in your web browser at `http://localhost:3306`.

## Features

- **User Authentication**: Authenticate users with their username and password.
- **Inventory Management**: Manage the inventory of fruits and vegetables in the database.
- **Dynamic Cart Functionality**: Allow users to add and remove items from their shopping cart.
- **Checkout Process**: Enable users to place orders securely.

## Usage

1. Start the server by running `node app.js` in the project directory.
2. Access the application in your web browser.
3. Log in with your credentials to browse the inventory and add items to your cart.
4. Proceed to checkout to place your order.

## API Endpoints

- **POST /auth**: Authenticate users with their username and password. Returns user information if authentication is successful.

## Contributors

This project was created by [Your Name]. Contributions are welcome!

## License

This project is licensed under the [License Name] License.
