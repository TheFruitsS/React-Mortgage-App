export default function ControlBar({ onNext, onBack, onCompare, currentStep }) {
  return (
    <div className="mt-6 flex justify-between">
      <button
        onClick={onBack}
        disabled={currentStep === 1}
        className={`px-4 py-2 rounded ${
          currentStep === 1
            ? 'bg-gray-200 text-gray-400'
            : 'bg-gray-300 text-gray-800'
        }`}
      >
        Back
      </button>
      <div>
        {currentStep < 3 && (
          <button
            onClick={onNext}
            className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
          >
            Next
          </button>
        )}
        <button
          onClick={onCompare}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Compare
        </button>
      </div>
    </div>
  );
}