# Next.js + Prisma Starter Kit

A clean and simple starter kit for building modern full-stack apps with **Next.js** and **Prisma**.

## Features
- 🚀 Full-stack setup with Next.js (frontend + backend)
- 🗄 Prisma ORM with type-safe queries
- 📂 Clean folder structure
- 🛡 Safe Prisma client setup for dev & prod

## Tech Stack
- **Frontend & Backend:** Next.js (Javascript)
- **Database ORM:** Prisma
- **Database:** PostgreSQL (can switch to MySQL or SQLite)

## Getting Started
```bash
# 1. Clone this repo
git clone https://github.com/gajjarumesh/next.js-prisma-boilerplate.git

# 2. Install dependencies
npm install

# 3. Copy and edit environment variables
cp .env.example .env

# 4. Run Prisma migrations
npx prisma migrate dev --name init

# 5. Start the server
npm run dev
