# 📚 Book Library API

A simple RESTful API for managing a library of books, built with **Node.js**, **Express**, and **MongoDB**.

## ✨ Features

- Full CRUD operations for books (Create, Read, Update, Delete)
- File upload support using **Multer** — upload a cover image with each book
- User authentication (Signup / Login)
- Data validation using Mongoose schemas
- Environment variables managed with `.env`
- MongoDB Atlas as the database

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- Multer (file uploads)
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
   MONGODB_URI=MONGO_URI=mongodb+srv://aer32nu_db_user:INvf1KUB0hBhOfTT@cluster0.gmxvnbp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   DB_NAME=test
   ```
5. Run the server:
   ```bash
   node server.js
   ```
6. The server will start on `http://localhost:5000`

## 📮 API Usage Examples

### Books

- **Get all books** — Sends a GET request to the books endpoint and returns a list of all books stored in the database.
- **Create a new book** — Sends a POST request with the book details (title, author, category, price, published year) as form-data, including an image file for the book cover. The server saves the book data along with the uploaded image.
- **Update a book** — Sends a PATCH request with the book's ID and the fields to be updated.
- **Delete a book** — Sends a DELETE request with the book's ID to remove it from the database.

### Users

- **Signup** — Sends a POST request with name, email, and password to create a new user account.
- **Login** — Sends a POST request with email and password to authenticate an existing user.

## 👤 Author

Made by erenyywadie as part of a graduation project.
