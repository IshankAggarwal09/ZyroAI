# Website Builder AI Project

An intelligent, AI-powered website builder designed to streamline the web development process. This project leverages a modern tech stack to provide a seamless user experience for building and deploying websites.

![Website Builder Banner](https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=1200&h=400)

## 🚀 Features

- **AI-Driven Design**: Generate website layouts and content using AI.
- **Modern UI/UX**: Built with a responsive and accessible design system.
- **Secure Authentication**: Integrated user authentication flows using Better Auth.
- **Project Management**: Create, edit, and preview multiple website projects.
- **Version Control**: Automatic versioning of generated code with rollback capabilities.
- **Monetization**: Credit-based system integrated with Stripe for purchases.

## 🏗️ Architecture Overview

```mermaid
graph TD
    Client[Client (React + Vite)]
    Server[Server (Node.js + Express)]
    DB[(PostgreSQL)]
    AI[OpenAI API]
    Payment[Stripe]
    Auth[Better Auth]

    Client <-->|HTTP/REST| Server
    Server <-->|Prisma ORM| DB
    Server -->|Generate Code| AI
    Server -->|Process Payments| Payment
    Server -->|Auth Flows| Auth
```

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

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` files.

### Client (`client/.env`)
```bash
VITE_API_URL=http://localhost:3000 # URL of your backend server
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_... # Stripe Public Key
```

### Server (`server/.env`)
```bash
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"

# Authentication (Better Auth)
BETTER_AUTH_SECRET=your_auth_secret
BETTER_AUTH_URL=http://localhost:3000

# AI
OPENAI_API_KEY=sk-...

# Payments
STRIPE_SECRET_KEY=sk_test_...
```

## 📡 API Reference

### User Routes (`/api/user`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/credits` | Get current user's credit balance. |
| `POST` | `/purchase-credits` | Initiate a purchase for more credits. |
| `GET` | `/projects` | Get all projects belonging to the user. |
| `POST` | `/project` | Create a new project. |
| `GET` | `/project/:projectId` | Get details of a specific project. |
| `GET` | `/publish-toggle/:projectId` | Toggle publish status of a project. |

### Project Routes (`/api/projects`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/revision/:projectId` | Request an AI revision for the project. |
| `PUT` | `/save/:projectId` | Save the current code state manually. |
| `GET` | `/rollback/:projectId/:versionId` | Rollback project to a previous version. |
| `DELETE` | `/:projectId` | Delete a project. |
| `GET` | `/preview/:projectId` | Get the preview URL/content for a project. |
| `GET` | `/published` | List all published projects (Public). |

## 🗄️ Database Schema

The comprehensive schema is defined in `server/prisma/schema.prisma`. Key models include:

- **User**: Stores account info, credits, and verification status.
- **WebsiteProject**: Represents a generated website. Links to Versions and Conversations.
- **Version**: Snapshots of the website code for history and rollbacks.
- **Conversation**: Chat history between User and AI Assistant for a specific project.
- **Transaction**: Records of credit purchases.

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
Configure your `.env` file as described above.

### 3. Setup Server
Navigate to the server directory and install dependencies:
```bash
cd ../server
npm install
```
Configure your `.env` file. Then, initialize the database:
```bash
npx prisma generate
npx prisma db push
```

## 🏃‍♂️ Usage

### Running the Client
In the `client` directory:
```bash
npm run dev
```

### Running the Server
In the `server` directory:
```bash
npm run dev
```

## 🤝 Contributing
Contributions are welcome! Please fork the repository and submit a pull request for review.
