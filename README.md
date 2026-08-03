# 🔗 URL Shortener API

A simple and efficient **URL Shortener** built using **Node.js**, **Express.js**, **MongoDB Atlas**, **Mongoose**, and **NanoID**. This application allows users to shorten long URLs into unique, easy-to-share links and automatically redirects users to the original URL.

---

## 📖 Overview

This project provides a RESTful API that accepts a long URL, generates a unique 7-character short code, stores the mapping in MongoDB, and redirects users to the original URL when the shortened link is accessed.

If a URL has already been shortened, the API returns the existing short code instead of creating a duplicate entry.

---

## ✨ Features

* 🔗 Shorten long URLs into unique links
* ⚡ Generate unique 7-character short codes using NanoID
* 🗄️ Store URL mappings in MongoDB Atlas
* 🔁 Prevent duplicate URL entries
* 🚀 Redirect users to the original URL
* 🌐 RESTful API built with Express.js
* 📦 Environment variable support using dotenv
* 🔓 CORS enabled

---

## 🛠️ Tech Stack

| Technology    | Purpose                       |
| ------------- | ----------------------------- |
| Node.js       | JavaScript Runtime            |
| Express.js    | Backend Framework             |
| MongoDB Atlas | Database                      |
| Mongoose      | MongoDB ODM                   |
| NanoID        | Short Code Generator          |
| dotenv        | Environment Variables         |
| CORS          | Cross-Origin Resource Sharing |

---

## 📁 Project Structure

```text
url-shortener/
│
├── models/
│   └── urlSchema.js
│
├── routes/
│   └── urlRouter.js
│
├── connectDB.js
├── server.js
├── package.json
├── .env
└── README.md
```

---

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/AnuragMishra-dev/url-shortener.git
```

### 2. Navigate to the project directory

```bash
cd url-shortener
```

### 3. Install dependencies

```bash
npm install
```

### 4. Create a `.env` file

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Replace `your_mongodb_connection_string` with your MongoDB Atlas connection string.

### 5. Run the application

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

---

## 🚀 API Endpoints

### Create a Short URL

**POST**

```http
POST /api/url/acceptlongURLs
```

### Request Body

```json
{
  "originalUrl": "https://www.example.com"
}
```

### Response

```json
{
  "success": true,
  "message": "Shortcodes created!",
  "shortcode": "AbC12xY",
  "shortUrls": "http://localhost:5000/api/url/AbC12xY"
}
```

### If the URL Already Exists

```json
{
  "success": true,
  "shortcode": "AbC12xY"
}
```

---

### Redirect to Original URL

**GET**

```http
GET /api/url/:shortcode
```

Example:

```text
http://localhost:5000/api/url/AbC12xY
```

If the shortcode exists, the server redirects the user to the original URL.

---

## 🗃️ Database Schema

```javascript
{
  originalURLs: {
    type: String,
    required: true
  },

  shortCodes: {
    type: String,
    unique: true,
    required: true
  }
}
```

---

## 🔄 How It Works

1. The user sends a long URL to the API.
2. The server checks whether the URL already exists in MongoDB.
3. If it exists, the existing short code is returned.
4. Otherwise, NanoID generates a new unique 7-character short code.
5. The URL mapping is stored in MongoDB Atlas.
6. The API returns the generated short URL.
7. When the shortened URL is visited, the server redirects the user to the original website.

---

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client
* Insomnia
* cURL

---

## 📌 Sample Request

```bash
curl -X POST http://localhost:5000/api/url/acceptlongURLs \
-H "Content-Type: application/json" \
-d "{\"originalUrl\":\"https://www.google.com\"}"
```

---

## 📌 Sample Response

```json
{
  "success": true,
  "message": "Shortcodes created!",
  "shortcode": "f8K2LmP",
  "shortUrls": "http://localhost:5000/api/url/f8K2LmP"
}
```

---

## 🚀 Future Enhancements

* Custom short URLs
* URL validation
* Click analytics
* QR code generation
* Link expiration
* User authentication
* React frontend
* Docker support
* Unit testing
* API documentation using Swagger

---

## 👨‍💻 Author

**Anurag Mishra**

* GitHub: https://github.com/AnuragMishra-dev

---

## 📄 License

This project is licensed for educational and learning purposes. Feel free to use, modify, and improve it for personal or academic projects.
