import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ProviderChart({ providers }) {
  const data = {
    labels: providers.map((p) => p.name),
    datasets: [
      {
        label: 'Total Repayment (£)',
        data: providers.map((p) => p.totalRepayment),
        backgroundColor: 'rgba(59, 130, 246, 0.6)',
        borderRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: (ctx) => `£${ctx.raw.toLocaleString(undefined, { minimumFractionDigits: 2 })}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: (value) => `£${value.toLocaleString()}`,
        },
        title: {
          display: true,
          text: 'Total Repayment (£)',
        },
      },
      x: {
        title: {
          display: true,
          text: 'Provider',
        },
      },
    },
  };

  return (
    <div className="bg-white p-4 rounded shadow mt-6">
      <h3 className="text-lg font-semibold mb-2">Total Repayment Comparison</h3>
      <Bar data={data} options={options} />
    </div>
  );
}