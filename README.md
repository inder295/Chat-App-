# Real Time Chat App

### DEMO Link -> https://chat-app-wsb1.onrender.com/

A full-stack real-time chat application built using the MERN stack with Socket.io for instant messaging. The app supports private chats, file sharing, message replies, and real-time online user tracking with a scalable backend architecture.

<img width="1920" height="1080" alt="Image" src="https://github.com/user-attachments/assets/90f716ea-37df-4a83-a569-98521b0835b0" />

## 🚀 Features

🔐 JWT-based Authentication & Authorization

💬 Real-time one-to-one messaging using Socket.io

👥 Online / Offline user status

📎 File sharing (images & attachments)

↩️ Message reply functionality

🔔 Notification counters for unread messages

🔗 URL preview support inside chat

🤖 Gemini API integration for AI-powered responses

⚡ Optimized RESTful APIs for low-latency performance

📱 Responsive UI using modern design principles

##  🛠️ Tech Stack

### Frontend:

React.js

Zustand (State Management)

Tailwind CSS

Axios

### Backend:

Node.js

Express.js

MongoDB

Socket.io

JWT Authentication

Other Integrations:

Gemini API

Cloudinary (for file uploads, if used)

## ⚙️ Installation & Setup

~~~ bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
~~~ 

### Backend Setup

~~~ bash
cd backend
npm install
npm run dev
~~~

### frontend Setup

~~~ bash
cd frontend
npm install
npm run dev
~~~

### 🔐 Environment Variables

Create a .env file in backend:

~~~bash
PORT=
MONGO_URI=
JWT_SECRET=
NODE_ENV=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
~~~

## 📈 Future Improvements

- Group chat support

- Typing indicator

- Message reactions

- Voice & video calling

- CI/CD deployment pipeline
