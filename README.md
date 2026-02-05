# Pai Min Thway - Software Engineer Portfolio

A modern, interactive portfolio website built to showcase my projects, skills, and experience. Designed with a focus on clean aesthetics, responsiveness, and seamless user experience.

## 🔗 Live Demo

https://portfolio-seven-eta-53.vercel.app/
[View Live Site](#)

## 🛠️ Tech Stack
*   **Frontend:** React, TypeScript, Tailwind CSS
*   **Animations:** Framer Motion
*   **Build Tool:** Vite
*   **Services:** EmailJS (Contact Form)

## 🌟 Features
*   **Interactive UI:** Smooth animations, glassmorphism effects, and engaging layout.
*   **Dark/Light Mode:** Fully supported theme toggling with persistence.
*   **Project Showcase:** Detailed presentation of my work in **Web Development, Robotics, and AI**.
*   **Functional Contact Form:** Connected directly to email via EmailJS with real-time feedback.
*   **Responsive Design:** Optimized for all devices, from mobile to desktop.

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

1.  **Clone the repository**
    ```bash
    git clone https://github.com/RavenPai/my-portfolio.git
    cd my-portfolio
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    bun install
    ```

3.  **Configure Environment Variables**
    Create a `.env` file in the root directory and add your EmailJS credentials:
    ```env
    VITE_EMAILJS_SERVICE_ID=your_service_id
    VITE_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_EMAILJS_PUBLIC_KEY=your_public_key
    ```

4.  **Run the development server**
    ```bash
    npm run dev
    ```

## 🚀 Building for Production

To create an optimized production build:

```bash
npm run build
```

The output will be in the `dist` directory, ready for deployment on Vercel, Netlify, or any static host.

## 📂 Project Structure

```
src/
├── components/   # Reusable UI components and Sections (Hero, About, etc.)
├── constants/    # Data for projects, skills, and social links
├── contexts/     # Global state (ThemeContext)
├── types/        # TypeScript interfaces
└── App.tsx       # Main application entry
```
