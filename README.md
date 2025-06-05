# ui-design-system-challenge
🎨 Scalable, accessible React + TypeScript Design System with token-based theming and reusable enterprise-grade UI components. Built as part of a front-end internship assignment. Includes Storybook documentation.

# 🎨 ui-design-system-challenge – Nitish Kumar

A scalable, enterprise-grade **React + TypeScript + Tailwind CSS** design system built as part of a **Front-End Development Internship Assignment**.

This project demonstrates strong UI engineering fundamentals: **color theming**, **accessibility**, **component reusability**, and thorough **Storybook documentation**.

---

## 📁 Project Overview

This project was developed to meet the specific requirements outlined in the assignment brief, focusing on:

- A **token-based color system** for light and dark themes
- Fully responsive and accessible UI components
- Detailed component documentation using **Storybook**
- Scalable project structure using **TypeScript**, **TailwindCSS**, and **React**

---

## 🎯 Objectives

✅ Design and implement a robust, token-based color system  
✅ Build **2 enterprise-grade components**:  
  1. **Multi-Step Wizard Form**  
  2. **Advanced Modal System**  
✅ Apply proper state management, interaction logic, and accessibility  
✅ Document all features clearly in Storybook for developer usability

---

## 🧱 Color System

A flexible, WCAG-compliant color system using CSS variables and utility classes.

Includes:

- 🎨 **Primary, Secondary, Tertiary Colors**
- ⚪ **Neutral Palette** (white, greys, borders, backgrounds)
- ✅ **Semantic Tokens**: Success, Info, Warning, Error
- 🌓 **Light and Dark Theme Support**
- ♿ **Accessibility**: Contrast ratio friendly

💡 Tokens are implemented using CSS variables and integrated with Tailwind’s theming.

---

## 🧩 UI Components

### 1. 🧭 Multi-Step Wizard Form

- Progress indicator with checkmarks
- Next, Previous, and Skip navigation
- Step transitions with animations
- Form validation and async loading states
- Optional and completed steps support
- Fully responsive layout

### 2. 🪟 Advanced Modal System

- Modal sizes: small, medium, fullscreen
- Multiple animations: fade, scale, slide
- Drawer-style variant
- Stacked modals support
- ESC to close, focus trap, keyboard nav
- Loading spinner overlay support

---

## 📘 Storybook Documentation

Each component includes:

- ✅ Name & Description
- 🔧 Props with TypeScript Types
- 🔁 States & Variants
- ⚙️ Interaction Behaviors
- ♿ Accessibility Notes (ARIA roles, keyboard nav)
- 🧩 Real-world Use Cases
- 🧠 Best Practices and Do’s & Don’ts
- 🎨 Theming & Responsiveness Support

> 📚 Accessible at: **[Live Storybook Preview (Chromatic/Vercel link here)]**

---

## 📂 Folder Structure

```

src/
│
├── components/
│   ├── ColorSystem/
│   ├── MultiStepWizard/
│   └── AdvancedModal/
│
├── theme/
│   └── colorVariables.css
├── styles/
├── App.tsx
└── index.tsx

````

- Each component is isolated, typed, and documented
- Props defined using TypeScript interfaces
- CSS tokens handled with global variables
- Tailwind CSS utilities integrated

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/design-system-assignment-nitish.git
cd design-system-assignment-nitish
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

### 4. Run Storybook

```bash
npm run storybook
```

---

## 🌍 Deployment

* 📦 Storybook deployed via **Chromatic** or **Vercel**
* 📌 Live link: *\[Add deployed link here]*

---

## 📸 Screenshots / GIFs

*Optional: Include modal transitions, wizard navigation GIFs, or color system grid preview.*

---

## 🧑‍💻 Author

**Nitish Kumar**
\[LinkedIn Profile : https://www.linkedin.com/in/nitish-kumar-69b32b232
\[GitHub Profile: whoisni30 

---

## 📄 License

This project is licensed for review and educational purposes as part of the internship assignment.

``
