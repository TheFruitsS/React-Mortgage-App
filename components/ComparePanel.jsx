import { useState } from 'react';
import ProviderChart from './ProviderChart';
import { calculateMonthlyPayment } from '../utils/calcHelpers';

const mockProviders = [
  { id: 'providerA', name: 'Lloyds Bank', initialRate: 3.75, fees: 0 },
  { id: 'providerB', name: 'HSBC', initialRate: 3.98, fees: 799 },
  { id: 'providerC', name: 'NatWest', initialRate: 4.04, fees: 0 },
];

export default function ComparePanel({ loanAmount, deposit, loanTerm }) {
  const [sortBy, setSortBy] = useState('monthly');

  const principal = Number(loanAmount) - Number(deposit);
  const termYears = Number(loanTerm);

  const enrichedProviders = mockProviders.map((p) => {
    const monthlyPayment = calculateMonthlyPayment(principal, p.initialRate, termYears);
    const totalRepayment = monthlyPayment * termYears * 12 + p.fees;
    const totalInterest = totalRepayment - principal;
    return { ...p, monthlyPayment, totalRepayment, totalInterest, principal };
  });
  console.log(enrichedProviders.map(p => ({
  name: p.name,
  monthly: p.monthlyPayment,
  total: p.totalRepayment,
  interest: p.totalInterest,
  })));
  const sortedProviders = [...enrichedProviders].sort((a, b) => {
    if (sortBy === 'monthly') return a.monthlyPayment - b.monthlyPayment;
    if (sortBy === 'total') return a.totalRepayment - b.totalRepayment;
    if (sortBy === 'interest') return a.totalInterest - b.totalInterest;
    return 0;
  });

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Compare Options</h2>

      {/* 💰 Borrowed & Deposit Summary */}
      <div className="mb-4 text-sm text-gray-700">
        <p>Borrowed Amount: <span className="font-semibold">£{principal.toLocaleString()}</span></p>
        <p>Deposit: <span className="font-semibold">£{Number(deposit).toLocaleString()}</span></p>
        <p>Loan Term: <span className="font-semibold">{termYears} years</span></p>
      </div>

      {/* 🔽 Sorting Dropdown */}
      <div className="mb-4 flex items-center gap-3 text-sm">
        <label htmlFor="sortBy" className="text-gray-600">Sort by:</label>
        <select
          id="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="monthly">Monthly Payment</option>
          <option value="total">Total Repayment</option>
          <option value="interest">Interest Paid</option>
        </select>
      </div>

      {/* 🏦 Provider Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sortedProviders.map((p) => (
          <div key={p.id} className="border p-4 rounded shadow-sm">
            <h3 className="font-bold text-gray-800 mb-2">{p.name}</h3>
            <p className="text-sm text-gray-600">Initial Rate: {p.initialRate}%</p>
            <p className="text-sm text-gray-600">Fees: £{p.fees}</p>
            <p className="text-sm text-gray-600">Monthly: £{p.monthlyPayment.toFixed(2)}</p>
            <p className="text-sm text-gray-600">Interest Paid: £{p.totalInterest.toFixed(2)}</p>
            <p className="text-sm text-gray-600 font-semibold">Total Repayment: £{p.totalRepayment.toFixed(2)}</p>
          </div>
        ))}
      </div>

      {/* 📊 Chart */}
      <ProviderChart providers={sortedProviders} />

      {/* 🛡️ Disclaimer */}
      <p className="mt-4 text-xs text-gray-500 text-right italic">
        Rates shown are for illustrative purposes only and may not reflect current offers. Please check with individual providers for up-to-date information.
      </p>
    </div>
  );
}