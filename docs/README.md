# 🧩 Smart Lost & Found Portal (SLF)

A full-stack solution that allows students to **report, track, and match lost-and-found items** with AI-powered assistance.  

✨ Built using **React + Vite (frontend)**, **Node.js + Express (backend)**, **MongoDB Atlas (database)**, and a **FastAPI microservice (AI matching)**.

---

## 🚀 Features
- 🔑 User Authentication (JWT-based)  
- 👤 User Dashboard for reporting & tracking items  
- 🛠️ Admin Dashboard for managing lost/found data  
- 🤖 AI microservice for text & image similarity  
- 💾 MongoDB Atlas cloud database  
- 🎨 Beautiful UI with Tailwind CSS + Framer Motion animations  

---

## 📂 Folder Structure
```bash
smart-lost-found-portal/
├── frontend/       # React, Tailwind, Framer Motion client
├── backend/        # Express REST API with JWT auth + MongoDB
├── aiml-service/   # FastAPI microservice for similarity matching
└── docs/           # Documentation assets

---

## 🛠️ Tech Stack
**Frontend:** React 19, Vite, Tailwind CSS, Framer Motion, Radix UI  
**Backend:** Node.js, Express, JWT, Nodemailer, Bcrypt.js  
**AI Service:** FastAPI, Sentence Transformers, Pillow, OpenCV  
**Database:** MongoDB Atlas (cloud-hosted)  

---

## ⚡ Setup Guide

### 1️⃣ Clone the repository
```bash
https://github.com/babulydv1211/SmartLostAndFound_Portal-Sfl.git
cd smart-lost-found-portal

### Frontend Setup (React + Vite)
cd frontend
npm install
npm run dev


Backend Setup (Node.js + Express)
cd backend
npm install


Create .env file inside backend/:

PORT=4000
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-secret-key
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-email-app password
EMAIL_SERVICE=gmail
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587



Run backend:

npm run dev


AI/ML Service Setup (FastAPI)
cd aiml-service
pip install -r requirements.txt
