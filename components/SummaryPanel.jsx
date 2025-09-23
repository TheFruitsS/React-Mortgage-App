export default function SummaryPanel({ monthlyPayment, principal, loanTermYears }) {
  const totalPayments = loanTermYears * 12;
  const totalRepayment = monthlyPayment * totalPayments;
  const totalInterest = totalRepayment - principal;

  return (
    <div className="bg-white p-6 rounded shadow border border-gray-300 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-2">Mortgage Estimate</h2>

      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Loan Term:</span>
          <span>{loanTermYears} years</span>
        </div>
        <div className="flex justify-between">
          <span>Monthly Payment:</span>
          <span>£{monthlyPayment.toFixed(2)}</span>
        </div>

        {/* 🔵 Blue Divider Line */}
        <div className="border-t border-blue-500 my-4"></div>

        <div className="flex justify-between font-semibold text-gray-900">
          <span>Total Interest Paid:</span>
          <span>£{totalInterest.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-900">
          <span>Total Repayment:</span>
          <span>£{totalRepayment.toFixed(2)}</span>
        </div>
    </div>

    <div className="mt-6 border-t pt-4 text-right text-xs text-gray-500">
      <p>Estimate based on current rate and term. Actual costs may vary.</p>
    </div>
    </div>
)}