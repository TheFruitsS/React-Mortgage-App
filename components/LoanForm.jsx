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
}) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Loan Details</h2>

      {/* Loan Amount */}
      <label className="block mb-4">
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

      {/* Deposit */}
      <label className="block mb-4">
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

      {/* Interest Rate */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Interest Rate (%)</span>
        <input
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </label>

      {/* Loan Term */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Term (Years)</span>
        <input
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="mt-1 block w-full border rounded px-3 py-2"
        />
      </label>

      {/* Mortgage Type */}
      <label className="block mb-4">
        <span className="text-gray-700 font-medium">Mortgage Type</span>
        <select
          value={mortgageType}
          onChange={(e) => setMortgageType(e.target.value)}
          className="mt-1 block w-full border rounded px-3 py-2"
        >
          <option value="repayment">Repayment</option>
          <option value="interest-only">Interest-Only</option>
        </select>
      </label>
    </div>
  );
}