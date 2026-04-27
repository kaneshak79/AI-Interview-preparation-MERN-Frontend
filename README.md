# 🚀 Intervexa AI – Frontend (AI Interview Preparation Platform)

A modern, responsive frontend for the **Intervexa AI** platform, built using React.js. This application enables users to practice real-time AI-powered interviews, receive feedback, and track their performance through an intuitive UI.

---

## 🌟 Overview

The frontend of **Intervexa AI** provides a seamless user experience for interacting with the AI interview system. It connects with the backend APIs to manage authentication, interview sessions, analytics, and payments.

---

## ✨ Features

* 🎯 AI-powered interview simulation UI
* 🔐 User authentication (Login/Register)
* 📊 Performance analytics dashboard
* 🧠 Real-time interview question interface
* 📜 Interview history tracking
* 💳 Payment integration (Razorpay UI flow)
* 👤 User profile management
* ⚡ Fast and responsive design (Vite + React)
* 🎨 Styled with Tailwind CSS

---

## 🧰 Tech Stack

* React.js (with Hooks)
* Vite
* React Router DOM
* Axios (API communication)
* Tailwind CSS
* Context API / State Management

---

## 📁 Folder Structure

```
frontend/
│
├── src/
│   ├── api/
│   │   └── axios.js
│   │
│   ├── assets/
│   │   └── (images, icons, etc.)
│   │
│   ├── pages/
│   │   ├── AdminQuestions.jsx
│   │   ├── AdminRoute.jsx
│   │   ├── AdminUsers.jsx
│   │   ├── Analytics.jsx
│   │   ├── Dashboard.jsx
│   │   ├── ForgotPassword.jsx
│   │   ├── History.jsx
│   │   ├── Home.jsx
│   │   ├── Interview.jsx
│   │   ├── InterviewDetails.jsx
│   │   ├── InterviewSetup.jsx
│   │   ├── Login.jsx
│   │   ├── Payment.jsx
│   │   ├── Pricing.jsx
│   │   ├── Profile.jsx
│   │   ├── Register.jsx
│   │   ├── ResetPassword.jsx
│   │   ├── Result.jsx
│   │   ├── StartInterview.jsx
│   │   └── Upload.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── vite.config.js
├── package.json
└── .gitignore
```

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```
VITE_API_BASE_URL=http://localhost:5000/api
VITE_RAZORPAY_KEY=your_key_here
```

---

## 🚀 Installation & Setup

### 1. Clone the repository

```
git clone https://github.com/your-username/intervexa-ai-frontend.git
cd intervexa-ai-frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Setup environment variables

Create `.env` file and add required values.

### 4. Run the development server

```
npm run dev
```

Frontend will run at:

```
http://localhost:5173
```

---

## 🔗 API Integration

The frontend communicates with backend APIs for:

* Authentication (Login/Register)
* Interview session management
* AI question generation & evaluation
* Analytics & performance tracking
* Payment processing

---

## 🧠 Core User Flow

1. User registers/logs in
2. Selects interview role & difficulty
3. Starts AI interview session
4. Answers AI-generated questions
5. Receives feedback & score
6. Views analytics & history

---

## 🎨 UI Highlights

* Clean and modern design
* Responsive across devices
* Interactive interview interface
* Smooth navigation using React Router

---

## 🔐 Security Practices

* Token-based authentication (JWT)
* Protected routes (Admin/User separation)
* Secure API calls using Axios interceptors
* Environment variable protection

---

## 📌 Future Enhancements

* 🎤 Voice-based interview support
* 📹 Video interview simulation
* 📈 Advanced analytics visualization
* 🌐 Multi-language support

---

## 👨‍💻 Author

**Kanesha K**

GitHub: https://github.com/kaneshak79

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
