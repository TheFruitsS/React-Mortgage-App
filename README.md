
🏡 Mortgage Comparison Tool

A responsive, user-friendly mortgage comparison app built with React. Designed to help users explore repayment scenarios across providers with clarity, transparency, and visual insight.

---

🚀 Features

- **Loan Form Inputs**  
  - Loan Amount, Deposit, Interest Rate, Term  
  - Buyer Status (First-Time Buyer / Moving Home)  
  - Interest Rate Type (Fixed / Flexible)  
  - Mortgage Type (Repayment / Interest-Only)

- **Provider Comparison Panel**  
  - Calculates Monthly Payment, Total Repayment, and Total Interest  
  - Sorts providers by selected metric  
  - Displays enriched provider cards with contextual info

- **Repayment Chart**  
  - Bar chart visualizing total repayment across providers  
  - Responsive and styled with Tailwind  
  - Tooltip formatting for currency values

- **UX Enhancements**  
  - Inline “Info only” badges for non-calculated fields  
  - Expandable info panels for Buyer Status, Rate Type, and Mortgage Type  
  - Disclaimer block clarifying calculation scope  
  - Animated title banner and clean layout

---

📦 Tech Stack

- **React** – UI framework  
- **Tailwind CSS** – Utility-first styling  
- **Chart.js + react-chartjs-2** – Data visualization  
- **react-currency-input-field** – Formatted currency inputs

---

📁 Folder Structure Highlights

```plaintext
src/
├── assets/
│   └── cad-green-bg.png
├── components/
│   ├── LoanForm.jsx
│   ├── ComparePanel.jsx
│   └── ProviderChart.jsx
├── styles/
│   └── index.css
├── utils/
│   └── calcHelpers.js
├── App.jsx
├── tailwind.config.js
└── README.md
```

---

🛡️ Disclaimer

> Buyer Status, Interest Rate Type, and Mortgage Type are shown for guidance only and are **not used in repayment calculations**. This tool is for demonstrative purposes and may not reflect actual eligibility or offers. Always consult with a mortgage advisor for personalized advice.

---
🧪 Getting Started

```bash
npm i 
  to install the package you want 
npm start
  to start a local server
```

