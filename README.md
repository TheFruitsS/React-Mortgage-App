🏡 Mortgage Calculator App

A modular React-based mortgage calculator that helps users estimate monthly payments, compare mortgage types, and understand repayment strategies. Built with clarity, UX precision, and extensibility in mind.

---

🚀 Features

- 💰 Monthly Payment Estimator  
  Calculates payments based on loan amount, deposit, interest rate, term, and mortgage type.

- 🔍 Compare Mortgage Types 
  Side-by-side breakdown of repayment vs interest-only options, including total cost and interest paid.

- ℹ️ Expandable Mortgage Info 
  Interactive “i” icon reveals detailed explanations of fixed vs flexible rates and mortgage strategies.

- 🧩 Modular Architecture
  Clean separation of logic (`calcHelpers.js`), UI components, and state management via controlled inputs.

---

📦 Tech Stack

- React (functional components)
- Tailwind CSS (utility-first styling)
- `react-currency-input-field` (for formatted currency inputs)
- Modular helper functions for financial logic

---

🧠 How It Works

1. **Step 1: Input Loan Details**  
   Users enter loan amount, deposit, interest rate, term, and mortgage type. Controlled inputs sync with app state.

2. **Step 2: View Summary**  
   Displays formatted monthly payment using `toLocaleString()` and contextual info.

3. **Step 3: Compare Options**  
   Shows repayment vs interest-only breakdown, with expandable info and simulated examples.

---

📁 Folder Structure

```
src/
├── components/
│   ├── LoanForm.jsx
│   ├── SummaryPanel.jsx
│   ├── ComparePanel.jsx
│   ├── MortgageInfoToggle.jsx
│   ├── ControlBar.jsx
│   └── Breadcrumb.jsx
├── utils/
│   └── calcHelpers.js
├── App.jsx
└── index.js
```

---

🧪 Run Locally

```bash
npm install
npm start
```

Then open `http://localhost:3000` in your browser.

---

📈 Future Enhancements

- Amortization chart (monthly breakdown)
- Validation and error handling
- API integration for real-time rates
- Export to PDF or shareable summary
- Toggle buttons for info
- Comparing section
---


