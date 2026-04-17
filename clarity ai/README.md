# Clarity App

Clarity is a minimal task and productivity app with Google Calendar integration and natural language scheduling.

## Features
- Task management (CRUD)
- Google Calendar integration
- Natural language → calendar events
- Clean UI with Tailwind

## Tech Stack
- Frontend: React (Vite) + Tailwind
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)
- APIs: Google Calendar API, OpenAI

---

## Setup

### 1. Clone repo
git clone <your-repo>
cd clarity

---

### 2. Backend setup
cd backend
npm install

Create `.env`:
MONGO_URI=your_mongo_uri
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
GOOGLE_REDIRECT_URI=http://localhost:5000/api/google/oauth2callback
OPENAI_API_KEY=your_key

npm run dev

---

### 3. Frontend setup
cd ../frontend
npm install

Create `.env.local`:
VITE_API_BASE=http://localhost:5000

npm run dev

---

## Run
Frontend: http://localhost:5173  
Backend: http://localhost:5000  

---

## Next Steps
- Add authentication
- Deploy (Render + Vercel)
- Mobile app version