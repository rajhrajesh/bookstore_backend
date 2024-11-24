Here's a `README.md` file template for your backend project:

```markdown
# Bookstore Backend API

This is a backend API for a Bookstore application. It provides user authentication, registration, and other backend functionalities using Node.js, Express.js, and MongoDB.

## Features
- User Registration
- User Login with JWT Authentication
- Password Hashing with bcrypt.js
- MongoDB Database Integration
- Error Handling

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MongoDB](https://www.mongodb.com/) instance running
- [Postman](https://www.postman.com/) or any API client for testing

### Steps
1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd bookstore-backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```
5. Start the server:
   ```bash
   npm start
   ```

---

## API Endpoints

### Base URL
`http://localhost:5000/api/auth`

### Endpoints

#### 1. Register a User
- **URL:** `/register`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "user@example.com",
    "password": "your_password"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token_here",
    "userId": "user_id_here"
  }
  ```

#### 2. Login a User
- **URL:** `/login`
- **Method:** `POST`
- **Headers:** `Content-Type: application/json`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "your_password"
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token_here",
    "userId": "user_id_here"
  }
  ```

---

## Directory Structure
```
bookstore-backend/
├── controllers/
│   ├── authController.js   # Handles authentication logic
├── models/
│   ├── userModel.js        # Mongoose schema and model for users
├── routes/
│   ├── authRoutes.js       # Routes for authentication
├── .env                    # Environment variables
├── package.json            # Project dependencies
├── server.js               # Entry point of the application
```

---

## Dependencies
- **bcryptjs**: For password hashing
- **jsonwebtoken**: For generating JWT tokens
- **mongoose**: For MongoDB interaction
- **dotenv**: For managing environment variables
- **express**: Framework for Node.js

---

## Testing
You can test the API endpoints using Postman or any API client:
1. Register a new user with the `/register` endpoint.
2. Login with the `/login` endpoint to receive a JWT token.
3. Use the token in the `Authorization` header to authenticate other requests.

---

## Troubleshooting

### Common Issues:
- **`JWT_SECRET` not set:** Ensure you have added a valid secret in the `.env` file.
- **Database connection error:** Check if your MongoDB instance is running and the `MONGODB_URI` is correct.

For additional support, please contact the repository maintainer.

---

## License
This project is licensed under the MIT License. Feel free to use and modify it for your projects.
```

### Customization:
- Replace `<repository_url>` with your actual repository URL.
- Modify feature descriptions, dependencies, or sections based on additional functionality in your project.
