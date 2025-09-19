import { useState } from 'react';
import Breadcrumb from './components/Breadcrumb';
import StepProgress from './components/StepProgress';
import IntroHeader from './components/IntroHeader';
import LoanForm from './components/LoanForm';
import SummaryPanel from './components/SummaryPanel';
import ControlBar from './components/ControlBar';
import { calculateMonthlyPayment } from './utils/calcHelpers';

export default function App() {
  const [step, setStep] = useState(1);
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');
  const [deposit, setDeposit] = useState('');
  const [mortgageType, setMortgageType] = useState('repayment'); // 'repayment' or 'interest-only'
  const [isFirstTimeBuyer, setIsFirstTimeBuyer] = useState(true);
  const [rateType, setRateType] = useState('fixed'); // 'fixed' or 'flexible'
  const [showRateInfo, setShowRateInfo] = useState(false);
  const [showMortgageInfo, setShowMortgageInfo] = useState(false);
  const [showBuyerInfo, setShowBuyerInfo] = useState(false);

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));
  const handleCompare = () => setStep(3);

  const monthlyPayment = calculateMonthlyPayment(
  Number(loanAmount) - Number(deposit),
  Number(interestRate),
  Number(loanTerm),
  mortgageType);


  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Breadcrumb />
      <StepProgress currentStep={step} />
      <IntroHeader />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {step === 1 && (
          <LoanForm
            loanAmount={loanAmount}
            setLoanAmount={setLoanAmount}
            interestRate={interestRate}
            setInterestRate={setInterestRate}
            loanTerm={loanTerm}
            setLoanTerm={setLoanTerm}
            deposit={deposit}
            setDeposit={setDeposit}
            mortgageType={mortgageType}
            setMortgageType={setMortgageType}
            isFirstTimeBuyer={isFirstTimeBuyer}
            setIsFirstTimeBuyer={setIsFirstTimeBuyer}
            rateType={rateType}
            setRateType={setRateType}
            showRateInfo={showRateInfo}
            setShowRateInfo={setShowRateInfo}
            showMortgageInfo={showMortgageInfo}
            setShowMortgageInfo={setShowMortgageInfo}
            showBuyerInfo={showBuyerInfo}
            setShowBuyerInfo={setShowBuyerInfo}
          />
        )}
        {step === 2 && <SummaryPanel monthlyPayment={monthlyPayment} />}
        {step === 3 && (
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Compare Options</h2>
            <p className="text-gray-700">Comparison view coming soon...</p>
          </div>
        )}
      </div>
      <ControlBar
        onNext={handleNext}
        onBack={handleBack}
        onCompare={handleCompare}
        currentStep={step}
      />
    </div>
  );
}
