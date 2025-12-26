# Website Builder AI Project

An intelligent, AI-powered website builder designed to streamline the web development process. This project leverages a modern tech stack to provide a seamless user experience for building and deploying websites.

## 🚀 Features

- **AI-Driven Design**: Generate website layouts and content using AI.
- **Modern UI/UX**: Built with a responsive and accessible design system.
- **Secure Authentication**: Integrated user authentication flows.
- **Robust Backend**: Scalable server architecture handling business logic and data persistence.
- **Database Integration**: Structured data management with PostgreSQL and Prisma.

## 🛠️ Tech Stack

### Client (Frontend)
- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **State/Logic**: Context API / Custom Hooks
- **Routing**: React Router

### Server (Backend)
- **Runtime**: [Node.js](https://nodejs.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **Database**: [PostgreSQL](https://www.postgresql.org/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [Better Auth](https://better-auth.com/)
- **AI Integration**: [OpenAI API](https://openai.com/)
- **Payments**: [Stripe](https://stripe.com/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [PostgreSQL](https://www.postgresql.org/) (running locally or a remote instance)
- npm or yarn package manager

## 📦 Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository_url>
cd Website_Builder_AI_Project
```

### 2. Setup Client
Navigate to the client directory and install dependencies:
```bash
cd client
npm install
```
Create a `.env` file in the `client` directory with necessary frontend environment variables (e.g., API URLs, public keys).

### 3. Setup Server
Navigate to the server directory and install dependencies:
```bash
cd ../server
npm install
```
Create a `.env` file in the `server` directory. You will likely need variables for:
- `DATABASE_URL` (PostgreSQL connection string)
- `OPENAI_API_KEY`
- `STRIPE_SECRET_KEY`
- Authentication secrets

Generate Prisma client:
```bash
npx prisma generate
```

## 🏃‍♂️ Usage

### Running the Client
In the `client` directory:
```bash
npm run dev
```
The application should be running at `http://localhost:5173` (or similar).

### Running the Server
In the `server` directory:
```bash
npm run dev
# OR for production-like start
npm start
```
The server will start on the configured port (default is usually 3000 or 8080).

## 📂 Project Structure

```
Website_Builder_AI_Project/
├── client/                 # Frontend React Application
│   ├── src/                # Source code
│   ├── public/             # Static assets
│   ├── package.json        # Frontend dependencies
│   └── ...
├── server/                 # Backend Node.js Application
│   ├── src/                # Source code (routes, controllers, etc.)
│   ├── prisma/             # Database schema and migrations
│   ├── package.json        # Backend dependencies
│   └── ...
└── README.md               # Project Documentation
```

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.
