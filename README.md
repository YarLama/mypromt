# My Promt Generator

My Promt Generator is a lightweight tool designed to help software engineers and prompt engineers create structured, consistent, and effective prompts for Large Language Models (LLMs).

It separates the prompt into two main parts: a **Constitution** for setting the persona and global rules, and **Tasks** for specific requests.

## 🚀 Live Demo

You can try the tool here: [https://yarlama.github.io/mypromt/](https://yarlama.github.io/mypromt/)

## ✨ Features

- **Constitution Generator**: Define the LLM's persona.
  - **Role**: Set the specific role (e.g., "Senior Fullstack Engineer").
  - **Tech Stack**: Specify the technologies the LLM should focus on.
  - **Rules & Marks**: Maintain a set of core rules and shorthand marks for consistent output.
  - **One-click Copy**: Instantly copy the generated Constitution to your clipboard.
- **Task Generator**: Create specific, trackable requests.
  - **Task Lists**: Add multiple tasks to a single request.
  - **Data Attachment**: Include code snippets or context data within the task.
  - **Unique IDs**: Every task prompt is generated with a unique ID for better tracking in long conversations.
  - **One-click Copy**: Quickly copy the formatted task prompt.
- **PWA Support**: Install it as a Progressive Web App for a native-like experience on your desktop or mobile.
- **Modern Architecture**: Built with custom Web Components for a lightweight and framework-agnostic UI.

## 🛠️ Tech Stack

- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI**: Custom Web Components (Vanilla JS/TS)
- **PWA**: [`vite-plugin-pwa`](https://vite-pwa-org.netlify.app/)

## 📦 Installation & Development

If you want to run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yarlama/mypromt.git
   cd mypromt
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📖 How to Use

1. **Set the Constitution**: Open the "Constitution" block, enter the desired role and tech stack, and click "Copy Constitution". Paste this as the first message to your LLM.
2. **Create Tasks**: Open the "Tasks" block, add your specific requirements and any necessary code/data, then click "Copy Task". Paste this into the chat to get the work done.
