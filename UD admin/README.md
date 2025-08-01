<h1 align="center">🚀 BusinessPro Admin</h1>
<p align="center">
  <b>Smart Business Management Platform</b><br>
  Streamline your workflow. Maximize productivity. Empower growth.
</p>

---

## 🧠 Overview

BusinessPro Admin Panel is a modern, responsive admin dashboard built using **React**, **TypeScript**, and **Tailwind CSS**. Designed to efficiently manage business operations, it offers secure authentication, dynamic contact management, and a clean UI experience with dark mode support.

---

## 🚀 Overview

This admin panel is part of the BusinessPro platform and provides:

- 🔐 Secure user authentication and protected routes
- 📥 Contact form submissions with dynamic data tables
- 📱 Fully responsive sidebar navigation
- 🔔 Toast notifications for real-time feedback
- 🌗 Dark/light theme support
- ♻️ Reusable, scalable UI components

---

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **React Router v6**
- **Axios**
- **React Toastify**

---

## ⚙️ Features

- **Authentication:** JWT-based login system with route protection.
- **Contact Emails:** Manage submitted messages via sortable tables.
- **Sidebar Navigation:** Adaptive layout with collapsible sidebar.
- **Real-time Feedback:** Integrated toast messages for actions like login/logout/errors.
- **Dark Mode:** Toggle between light and dark themes.
- **Component Reusability:** Includes tables, forms, modals, etc.

---

## 📂 Project Structure

```bash
src/
│
├── api/ # Axios setup and API utilities
├── components/ # Reusable UI components
├── context/ # React context providers (Sidebar, Auth, etc.)
├── icons/ # Icon SVGs and components
├── layout/ # Main layout components
├── middleware/ # Route guards and auth middleware
├── pages/ # Page-level components
├── App.tsx # Main App component with routes
└── main.tsx # App entry point
```

---

## 🚧 Getting Started

### Prerequisites

- Node.js v18+ (v20 recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/Ankitrathore2006/businessPro-project-admin.git
cd businessPro-project-admin
npm install  # or yarn install
```
Start Development Server
```bash


npm run dev  # or yarn dev
```
Visit: http://localhost:5173

🔐 Authentication Flow
Protected routes auto-redirect unauthenticated users to /signin

Logged-in users cannot revisit the sign-in page

Token-based session management

🧩 Customization
Sidebar Items: Edit in src/layout/AppSidebar.tsx

API Endpoints: Update in src/api/axios.ts

Themes & Styles: Modify Tailwind config and global styles

📄 License
Licensed under the MIT License.

💬 Support
If you found this project helpful:

⭐ Star the repo
🐛 Report issues
💡 Suggest features

BusinessPro Admin Panel – Crafted with ❤️ using React & Tailwind.


