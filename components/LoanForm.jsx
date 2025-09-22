import React from 'react';
import CurrencyInput from 'react-currency-input-field';



export default function LoanForm({
  loanAmount,
  setLoanAmount,
  deposit,
  setDeposit,
  interestRate,
  setInterestRate,
  loanTerm,
  setLoanTerm,
  mortgageType,
  setMortgageType,
  isFirstTimeBuyer,
  setIsFirstTimeBuyer,
  rateType,
  setRateType,
  showRateInfo,
  setShowRateInfo,
  showMortgageInfo,
  setShowMortgageInfo,
  showBuyerInfo,
  setShowBuyerInfo,
}) {

return (
  <div className="relative bg-white/0 backdrop-blur-sm border border-emerald-100/10 ring-1 ring-emerald-100/10 p-6 max-w-7xl mx-auto rounded-xl shadow-sm">

    {/* 🏠 Roof Accent */}
    <svg
      className="absolute top-0 left-0 w-full h-24 z-0 opacity-20 pointer-events-none"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="0,100 50,0 100,100" fill="#3c1707ff" />
    </svg>

    {/* 🏡 House Grid */}
    <div className="grid grid-cols-3 gap-6 z-10 relative">

      {/* 🏡 Title Banner */}
      <div className="col-span-3 text-center mb-2">
      <div className="inline-block px-6 py-2 rounded border border-orange-400 shadow-[0_0_12px_rgba(255,165,0,0.4)]">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-300 to-red-500 text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(255,165,0,0.6)] animate-pulse tracking-wide">
          Loan Details
        </h2>
      </div>
      </div>

      {/* 🛏️ Buyer Status */}
      <div className="col-span-3 bg-green-100/30 p-4 rounded shadow">
        <span className="text-gray-700 font-medium">Buyer Status</span>
        <button
          type="button"
          onClick={() => setShowBuyerInfo(!showBuyerInfo)}
          className="mt-1 text-xs text-gray-500 hover:text-indigo-600 flex items-center gap-1"
        >
          <span className="text-base">ℹ️</span>
          <span>What’s the difference?</span>
        </button>
        {showBuyerInfo && (
          <div className="mt-3 p-3 bg-gray-100 rounded text-sm text-gray-700">
        
            <p><strong>First-Time Buyer:</strong> You’re purchasing your first property and haven’t owned a home before. You may qualify for special schemes, lower stamp duty, or tailored mortgage products.</p>
            <p><strong>Stamp Duty Relief:</strong> As a first-time buyer in England or Northern Ireland, you pay <span className="font-semibold">0% Stamp Duty</span> on properties up to £300,000. For homes between £300,001 and £500,000, you pay reduced rates only on the portion above £300,000.</p>
            <p className="mt-2">If the property costs more than £500,000, standard rates apply.</p>
            <p className="mt-2"><strong>Moving Home:</strong> You already own a property and are selling or transitioning to a new one. Your mortgage options may differ, and you might carry equity from your current home.</p>
            <p><strong>Standard Stamp Duty:</strong> Moving home means you pay Stamp Duty on any property over £125,000. Rates increase progressively based on price bands.</p>
            <p className="mt-2">For example, a £400,000 home would incur Stamp Duty on the portion above £125,000, with rates ranging from 2% to 5% depending on the band.</p>
          </div>
        )}
        <div className="mt-2 flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="buyerStatus"
              checked={isFirstTimeBuyer === true}
              onChange={() => setIsFirstTimeBuyer(true)}
              className="form-radio"
            />
            <span className="ml-2 text-gray-700">First-Time Buyer</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="buyerStatus"
              checked={isFirstTimeBuyer === false}
              onChange={() => setIsFirstTimeBuyer(false)}
              className="form-radio"
            />
            <span className="ml-2 text-gray-700">Moving Home</span>
          </label>
        </div>
      </div>

      {/* 💰 Loan Amount & Deposit */}
      <div className="col-span-3 bg-white/10 p-4 rounded shadow">
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-700 font-medium">Loan Amount</span>
            <CurrencyInput
              value={loanAmount}
              onValueChange={(value) => setLoanAmount(value)}
              decimalsLimit={2}
              allowDecimals
              decimalSeparator="."
              groupSeparator=","
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium">Deposit</span>
            <CurrencyInput
              value={deposit}
              onValueChange={(value) => setDeposit(value)}
              decimalsLimit={2}
              allowDecimals
              decimalSeparator="."
              groupSeparator=","
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </label>
        </div>
      </div>

      {/* 🛠️ Interest Rate, Term, Rate Type */}
      <div className="col-span-3 bg-white/10 p-4 rounded shadow">
        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="text-gray-700 font-medium">Interest Rate (%)</span>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(parseFloat(e.target.value))}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </label>
          <label className="block">
            <span className="text-gray-700 font-medium">Term (Years)</span>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="mt-1 block w-full border rounded px-3 py-2"
            />
          </label>
        </div>

        <div className="mt-6">
          <span className="text-gray-700 font-medium">Interest Rate Type</span>
          <button
            type="button"
            onClick={() => setShowRateInfo(!showRateInfo)}
            className="mt-1 text-xs text-gray-500 hover:text-indigo-600 flex items-center gap-1"
          >
            <span className="text-base">ℹ️</span>
            <span>What’s the difference?</span>
          </button>
          {showRateInfo && (
            <div className="mt-3 p-3 bg-gray-100 rounded text-sm text-gray-700">
              {/* Rate info content */}
              <p><strong>Fixed Rate:</strong> Your interest stays the same for the entire deal period—usually 2 to 5 years. This gives you predictable monthly payments and protection if rates rise.</p>
              <p className="mt-2"><strong>Flexible Rate:</strong> Also called tracker or discount mortgages, these follow the Bank of England base rate or lender’s variable rate. Your payments may go up or down over time.</p>

            </div>
          )}
          <div className="mt-2 flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="interestRateType"
                checked={rateType === "fixed"}
                onChange={() => setRateType("fixed")}
                className="form-radio"
              />
              <span className="ml-2 text-gray-700">Fixed Rate</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="interestRateType"
                checked={rateType === "flexible"}
                onChange={() => setRateType("flexible")}
                className="form-radio"
              />
              <span className="ml-2 text-gray-700">Flexible Rate</span>
            </label>
          </div>
        </div>
      </div>

      {/* 🚪 Mortgage Type */}
      <div className="col-span-3 bg-white/10 p-4 rounded shadow">
        <span className="text-gray-700 font-medium">Mortgage Type</span>
        <button
          type="button"
          onClick={() => setShowMortgageInfo(!showMortgageInfo)}
          className="mt-1 text-xs text-gray-500 hover:text-indigo-600 flex items-center gap-1"
        >
          <span className="text-base">ℹ️</span>
          <span>What’s the difference?</span>
        </button>
        {showMortgageInfo && (
          <div className="mt-3 p-3 bg-gray-100 rounded text-sm text-gray-700">
            {/* Mortgage info content */}
            <p><strong>Repayment Mortgage:</strong> You pay back both the loan and interest monthly. Your balance reduces over time until it's fully paid off.</p>
            <p className="mt-2"><strong>Interest-Only Mortgage:</strong> You only pay the interest each month. The loan amount remains unchanged and must be repaid later—often via savings, investments, or selling the property.</p>
          </div>
        )}
        <select
          value={mortgageType}
          onChange={(e) => setMortgageType(e.target.value)}
          className="mt-4 block w-full border rounded px-3 py-2"
        >
          <option value="repayment">Repayment</option>
          <option value="interest-only">Interest-Only</option>
        </select>
      </div>
    </div>
  </div>
);
}