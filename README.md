# Life Insurance Recommendation Backend (Node.js + Express + PostgreSQL)

This is the backend service for the Life Insurance Recommendation MVP. It exposes a RESTful API endpoint to process user input and return personalized life insurance recommendations.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- TypeScript
- Docker-ready
- Deployed on Render

---

## 📦 Features

- `/recommendation` POST endpoint to process user data (age, income, dependents, risk tolerance)
- Returns personalized life insurance plan + explanation
- Stores user submissions in PostgreSQL
- Ready for deployment (Docker, Render, AWS-friendly)

---

## 🚀 How to Set Up Locally

### 1. Clone the repo

```bash
git clone https://github.com/aadilmanzoordev/insurance_backend_express_postgres.git
cd insurance_backend_express_postgres

```

### 2 Install dependencies

npm install

### 3. Set environment variables

- Create a .env file in the root of your project with the following:

DATABASE_URL=postgres://your_user:your_password@localhost:5432/life
PORT=5000

### 4. Run the app in development

npm run dev
