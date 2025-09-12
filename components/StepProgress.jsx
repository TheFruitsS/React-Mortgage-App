export default function StepProgress({ currentStep }) {
  const steps = ['Enter Details', 'Review Summary', 'Compare Options'];
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between text-sm text-gray-600">
        {steps.map((label, index) => (
          <span
            key={label}
            className={index + 1 === currentStep ? 'text-green-600 font-medium' : ''}
          >
            Step {index + 1}: {label}
          </span>
        ))}
      </div>
      <div className="mt-2 h-2 bg-gray-200 rounded-full">
        <div
          className="h-full bg-blue-600 rounded-full"
          style={{ width: `${(currentStep / steps.length) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}