# Full Stack Login Application

This project is a simple full-stack login system built with **React (frontend)** and **Node.js + Express (backend)**.

It validates user credentials and redirects authenticated users to a protected welcome page.

---

# Tech Stack
Frontend
- React
- React Router
- Vite

Backend
- Node.js
- Express.js

---

# Project Structure

login-app
│
├── backend
│   ├── server.js
│   ├── package.json
│
├── frontend
│   ├── package.json
│   ├── index.html
│   └── src
│       ├── App.jsx
│       ├── Login.jsx
│       ├── Welcome.jsx
│       ├── main.jsx
│       └── index.css

---

# Features

• Login form with username and password  
• Backend API authentication  
• React Router navigation  
• Local storage session handling  
• Protected welcome page  
• Logout functionality  

---

# Setup Instructions

## 1. Clone the repository

```

git clone https://github.com/pavankatari16/login-app
cd login-app

```

---

## 2. Start Backend Server

Open terminal:

```

cd backend
npm install
npm start

```

Server runs on:

```

[http://localhost:5001](http://localhost:5001)

```

---

## 3. Start Frontend

Open another terminal:

```

cd frontend
npm install
npm run dev

```

Frontend runs on:

```

[http://localhost:5175](http://localhost:5175)

```

---

# Test Credentials

Username:
```

admin

```

Password:
```

admin

```

---

# Application Flow

User enters credentials →  
Frontend sends request →  
Node.js backend validates →  
Successful login stored in localStorage →  
User redirected to welcome page →  
Logout clears session.

---

# Author

Pavan Katari
```
