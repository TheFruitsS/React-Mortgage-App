export default function SummaryPanel({ monthlyPayment }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Estimate Summary</h2>
      <p className="text-gray-700 mb-2">Monthly Payment: {Number(monthlyPayment).toLocaleString('en-GB', 
        { style: 'currency', currency: 'GBP' })}</p>
      
      {/* You can add total interest and loan cost later */}
    </div>
  );
}