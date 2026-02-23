# Notes App – Frontend

This is the frontend of the Notes Application built using React (Vite).  
The application allows users to sign up, log in, create notes, update notes, and delete notes.  
It also supports role-based access (Admin & User).

## 🚀 Tech Stack

- React (Vite)
- React Router
- Tailwind CSS
- Fetch API
- JWT Authentication

## 🌐 Live Demo

[https://your-frontend-url.vercel.app](https://notesapp-frontend-mocha.vercel.app/)

## 🔗 Backend API

The frontend connects to the deployed backend API hosted on Render.

Base URL is managed using environment variables:
VITE_API_URL=[https://your-backend-url.onrender.com](https://notesapp-backend-asli.onrender.com)
## ⚙️ Installation (Local Setup)

1. Clone the repository:

2. 2. Navigate to project folder:

cd frontend


3. Install dependencies:

npm install

4. Create a `.env` file:

VITE_API_URL=[https://your-backend-url.onrender.com](https://notesapp-backend-asli.onrender.com)


5. Start development server:

npm run dev


## 🔐 Features

- User Authentication (Signup/Login)
- JWT Token-based Authorization
- Role-Based Access (Admin/User)
- Create / Read / Update / Delete Notes
- Admin can view all users
- Protected Routes

## 📁 Folder Structure


src/
├── pages/
├── components/
├── config/
└── App.jsx


## 👨‍💻 Author

Aditya

git clone https://github.com/yourusername/frontend-repo.git
