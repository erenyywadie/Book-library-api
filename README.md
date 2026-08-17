   # 📚 Book Library API

A simple RESTful API for managing a library of books, built with **Node.js**, **Express**, and **MongoDB**.

## ✨ Features
- Full CRUD operations for books (Create, Read, Update, Delete)
- File upload support using **Multer** — upload a cover image with each book
- User authentication (Signup / Login) with **JWT**
- Role-based access control (User / Admin)
- Password hashing with **bcryptjs**
- Data validation using Mongoose schemas
- Environment variables managed with `.env`
- MongoDB Atlas as the database

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB & Mongoose
- Multer (file uploads)
- bcryptjs (password hashing)
- jsonwebtoken (JWT authentication)
- Dotenv

## 🚀 How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/erenyywadie/book-library-api.git
   ```
2. Navigate into the project folder:
   ```bash
   cd book-library-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root folder with the following:
   ```env
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.gmxvnbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   DB_NAME=test
   JWT_SECRET=your_jwt_secret_key
   JWT_EXPIRES_IN=90d
   ```
5. Run the server:
   ```bash
   node server.js
   ```
6. The server will start on `http://localhost:5000`

## 📡 API Usage Examples

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/books` | Get all books |
| POST | `/api/v1/books` | Create a new book (with cover image) |
| PATCH | `/api/v1/books/:id` | Update a book |
| DELETE | `/api/v1/books/:id` | Delete a book |

- **Get all books** – Sends a GET request to the books endpoint and returns a list of all books stored in the database.
- **Create a new book** – Sends a POST request with the book details (title, author, category, price, published year) as form-data, including an image file for the book cover. The server saves the book data along with the uploaded image.
- **Update a book** – Sends a PATCH request with the book's ID and the fields to be updated.
- **Delete a book** – Sends a DELETE request with the book's ID to remove it from the database.

### Users / Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/users/signup` | Register a new user and return a JWT token |
| POST | `/api/v1/users/login` | Authenticate a user and return a JWT token |
| GET | `/api/v1/users/protected-test` | Example protected route (requires valid JWT) |

**Signup** – Sends a POST request with `name`, `email`, and `password` to create a new user account. The password is hashed automatically before being saved, and the response includes a JWT token plus the created user's data.

Example request body:
```json
{
  "name": "ereny",
  "email": "ereny@example.com",
  "password": "123456"
}
```

**Login** – Sends a POST request with `email` and `password` to authenticate an existing user. If the credentials are correct, a JWT token is returned; otherwise a 401 error is returned.

Example request body:
```json
{
  "email": "ereny@example.com",
  "password": "123456"
}
```

### Protected Routes & Roles

Some routes are protected and require a valid JWT token to be accessed. To access a protected route, include the token in the request header:

```
Authorization: Bearer <your_token_here>
```

Example — `GET /api/v1/users/protected-test` returns:
```json
{
  "message": "You accessed a protected route!",
  "user": { ... }
}
```

- The `protect` middleware checks that the token is valid and that the user still exists before allowing access.
- The `restrictTo` middleware limits certain actions (e.g. creating, updating, or deleting books) to specific roles such as `admin`.

**User Roles:**
- `user` (default) – Regular user with standard access
- `admin` – Has permission to perform restricted actions

## 🧪 Testing with Postman
- Registered a user via `/api/users/signup` and verified the returned JWT token
- Tested `/api/users/login` with both correct and incorrect credentials
- Used the returned token in the `Authorization` header to access a protected route
- Verified that role-restricted routes correctly reject users without the required role

## 📁 Project Structure
```
├── controllers/
├── models/
├── routes/
├── middlewares/
├── .env
├── server.js
└── README.md
```
