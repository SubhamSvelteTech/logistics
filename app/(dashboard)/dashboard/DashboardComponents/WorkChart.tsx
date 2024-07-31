"use client";
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const WorkChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Total work orders",
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: "rgb(29, 219, 169)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Open work orders",
        data: [45, 39, 60, 71, 46, 45, 30],
        backgroundColor: "rgb(0, 123, 255)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
      {
        label: "Closed work orders",
        data: [50, 35, 55, 66, 40, 50, 20],
        backgroundColor: "rgb(254, 235, 157)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options: any = {
    responsive: true,
    interaction: {
      mode: "nearest",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: "Open Work Orders Vs Closed Work Orders",
        font: {
          size: 20, // Increase title text size
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: true, // Show x-axis labels
        },
        grid: {
          display: false, // Hide grid lines for the x-axis
        },
        // Hide the x-axis line
        border: {
          display: false, // Hide the x-axis line
        },
        offset: true, // Adds space between the x-axis and the chart
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false, // Hide y-axis labels
        },
        grid: {
          display: false, // Hide grid lines for the y-axis
        },
        // Hide the y-axis line
        border: {
          display: false, // Hide the y-axis line
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default WorkChart;
