# PopX Authentication UI

A mobile-first authentication interface built using **React**, **Tailwind CSS**, and **React Router**.  
This project focuses on clean UI, reusable components, and smooth navigation flow as part of a frontend assignment.

---

## 🚀 Features

- 📱 Mobile-first layout (375px design)
- 🔐 Sign In screen with reusable Input & Button components
- ⚙️ Global container with:
  - Top-right settings icon
  - Bottom navigation (Back / Home / Next)
- 🧩 Reusable UI components
- 🔁 Client-side routing using React Router
- 🎨 Styled using Tailwind CSS

---

## 🛠️ Tech Stack

- **React**
- **React Router DOM**
- **Tailwind CSS**
- **JavaScript (ES6+)**

---

## 📂 Project Structure
src/
├── ui/
│ ├── container.jsx
│ ├── input.jsx
│ └── button.jsx
├── pages/
│ └── SignIn.jsx
├── App.jsx
└── main.jsx


---

## 🧱 Key Components

### 🔹 Container
- Acts as the base layout for all screens
- Handles:
  - Mobile card layout
  - Settings navigation
  - Bottom navigation bar

### 🔹 Input
- Reusable input field with label
- Supports required fields and different input types

### 🔹 Button
- Reusable button component
- Customizable styles via props

---

## 🧭 Routing

- `/` → Home Page
- `/dashboard` → Dashboard (placeholder)
- `/account-settings` → Account Settings (placeholder)
- `/create-account` → Account Creation
- `/signin` → Account SignIn
---

## ▶️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone <repo-url>
cd popx-app

2️⃣ Install dependencies
npm install

3️⃣ Run the project
npm run dev