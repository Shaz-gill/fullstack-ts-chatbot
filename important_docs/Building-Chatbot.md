# AI-Powered Chatbot with Modern Full-Stack Architecture

## Overview

We built a fully functional **AI-powered chatbot** from the ground up using a clean, modern full-stack architecture. This project combined a robust backend powered by **Express** and **TypeScript** with a sleek, interactive frontend crafted using **React** and **Tailwind CSS**.

## Backend Development

The backend was developed using **Express** and **TypeScript**, integrating the **OpenAI API** to generate responses.

### Initial Endpoint

We began by implementing a basic `/api/chat` endpoint that:

- Received user prompts.
- Forwarded them to the OpenAI model.
- Returned the AI-generated responses to the client.

### Incremental Improvements

To make the API more reliable and maintainable, we added:

- **Input validation** to handle invalid requests.
- **Error handling** to manage network or API issues gracefully.
- **Conversation IDs** to maintain context across multi-turn interactions.

### Modular Architecture

We embraced separation of concerns by dividing the backend into distinct modules:

- **Routes** – handled routing logic.
- **Controller** – processed and routed incoming requests.
- **Service** – managed communication with the OpenAI API.
- **Repository** – handled data persistence or conversation history.

This modular design improved readability, testability, and scalability.

## Frontend Development

The frontend was built using **React**, styled with **Tailwind CSS**, and enhanced with **shadcn/ui** for a modern interface and accessible design components.

### Core Features

We implemented a dynamic and user-friendly chat interface that included:

- **Message rendering** with custom styles per sender.
- **Markdown support** for rich message formatting.
- **Typing indicator** to simulate real-time responses.
- **Auto-scrolling** to ensure the latest messages remain in view.

### Form Handling

Using **react-hook-form**, we managed input validation and submission, ensuring a responsive and bug-free prompt experience. Preventing empty or whitespace-only messages contributed to a clean, consistent user experience.

## Code Organization and Refactoring

Once the chatbot became fully functional, we modularized the frontend components:

- **ChatInput** – handled prompt entry and submission.
- **ChatMessages** – rendered message history.
- **TypingIndicator** – displayed AI response activity.
- **Chatbot** – composed and managed the main chat flow.

Each component followed the principle of **abstraction**, exposing a clear public interface while keeping implementation details private. This approach enhanced flexibility and maintainability as the project evolved.

## Engineering Principles

Throughout the build, we emphasized core software engineering habits:

- **Separation of concerns**.
- **Clean architecture**.
- **Modular and reusable code structures**.

These practices fostered a scalable, maintainable, and professional-grade AI chatbot system.
