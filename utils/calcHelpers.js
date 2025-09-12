export function calculateMonthlyPayment(principal, annualRate, years, type = 'repayment') {
  if (!principal || !annualRate || !years) return '0.00';

  const monthlyRate = annualRate / 100 / 12;
  const totalPayments = years * 12;

  if (type === 'interest-only') {
    return (principal * monthlyRate).toFixed(2); // No principal repayment
  }

  if (monthlyRate === 0) return (principal / totalPayments).toFixed(2);

  const monthly =
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -totalPayments));

  return monthly.toFixed(2);
}

export function calculateLTV(loanAmount, propertyValue) {
  return ((loanAmount / propertyValue) * 100).toFixed(2);
}