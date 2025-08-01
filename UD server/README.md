<h1 align="center">🚀 BusinessPro Server</h1>
<p align="center">
  <b>Smart Business Management Platform</b><br>
  Streamline your workflow. Maximize productivity. Empower growth.
</p>

---

## 🧠 Overview

**BusinessPro Server** is a Node.js + Express backend powering the BusinessPro platform. It handles authentication, contact form submissions, and secure data communication with MongoDB using Mongoose.

---

## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT (Authentication)**
- **CORS**
- **Dotenv**

---

## 📁 Folder Structure

```bash
businessPro-project-server/
│
├── config/ # MongoDB connection setup
├── controllers/ # Logic for API routes (e.g. auth, contact)
├── middleware/ # Auth middleware (JWT protection)
├── models/ # Mongoose schemas (User, Contact)
├── routes/ # API route definitions
├── .env # Environment variables
├── server.js # App entry point
└── package.json

```



---

## 🌐 Available API Endpoints

| Method | Endpoint       | Description                   |
|--------|----------------|-------------------------------|
| POST   | `/api/auth/login`   | Login user & return token      |
| POST   | `/api/contact`      | Submit contact form data       |
| GET    | `/api/contact`      | Fetch all contact entries (protected) |

> Authenticated routes require a valid JWT in headers (`Authorization: Bearer <token>`)

---

## 🧪 Example `.env` File

```env
MONGO_URI=
JWT_SECRET=
PORT=
```

⚙️ How to Run
1. Clone & Install Dependencies
```bash
git clone https://github.com/Ankitrathore2006/businessPro-project-server.git
cd businessPro-project-server
npm install
```
2. Configure .env
Create a .env file in the root with the above variables.

3. Start the Server
```bash
npm start
Server runs on: http://localhost:3000
```
🔐 Auth Overview
Login returns a signed JWT token.

Protected routes are secured using a custom middleware that verifies the token.

JWT tokens should be included in the Authorization header on client requests.

🧹 Future Enhancements
Admin role-based access

Pagination and filtering

Email notifications

Rate limiting and logging

📜 License
Licensed under MIT

BusinessPro Server – Secure. Scalable. Simple. 🛡️
