# 🎢 WonderWorld AI Chatbot

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge" />
  <img src="https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white" />
  <img src="https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white" />
</p>

---

## ✨ Overview

**WonderWorld AI Chatbot** is an AI-powered conversational assistant designed for a theme park experience. It helps visitors with ride information, park rules, ticket guidance, timings, events, food options, and general inquiries using natural language.

Built with a modern **full-stack architecture**, the chatbot delivers fast performance, a polished UI, and intelligent responses powered by OpenAI.

---

## 🤖 Features

- 🎢 Theme park–specific AI chatbot (WonderWorld)
- 🗺️ Ride details, timings & attractions info
- 🎟️ Ticket & pricing guidance
- 🍔 Food, events & facility queries
- ⚡ Real-time AI responses using OpenAI API
- 🎨 Modern UI with shadcn/ui & Tailwind CSS
- 🔐 Secure environment variable handling

---

## 🧱 Tech Stack

### Frontend

- **React**
- **Tailwind CSS**
- **shadcn/ui**

### Backend

- **Node.js**
- **Express.js**
- **OpenAI API**

### Tooling

- **Bun** (runtime & package manager)

---

## 📂 Project Structure

```bash
root/
├── packages/
│   ├── client/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   └── App.tsx
│   │   │   └── main.tsx
│   │   └── package.json
│   │
│   └── server/
│       ├── src/
│       │   ├── controllers/
│       │   ├── prompts/
│       │   ├── repositories/
│       │   └── services
│       ├── routes.ts
│       ├── index.ts
│       ├── .env
│       └── package.json
│
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **packages/server** directory:

```env
OPENAI_API_KEY=your_openai_api_key_here
```

> ⚠️ Never commit `.env` files to version control.

---

## 🛠️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/wonderworld-ai-chatbot.git
cd wonderworld-ai-chatbot
```

---

## 🧪 Best Practices

- 🔒 Secure API key management
- 🧩 Clean separation of frontend & backend
- ♻️ Reusable UI components
- ⚡ High-performance runtime with Bun

---

## 📄 License

This project is licensed under the **MIT License**.

---

## ⭐ Support

If you like **WonderWorld AI Chatbot**, consider giving it a ⭐ on GitHub!
