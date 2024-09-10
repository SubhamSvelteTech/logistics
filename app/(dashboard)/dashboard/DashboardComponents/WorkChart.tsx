"use client";
import React, { useEffect, useState } from "react";
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

const dataMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const WorkChart = ({ dashboardData }: any) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const labels: any = dataMonth || [];
    const datasets = dashboardData?.datasets?.map((dataset: any) => ({
      label: dataset.label,
      backgroundColor: dataset.backgroundColor,
      data: dataset.data,
    }));

    setChartData({
      labels,
      datasets,
    });
  }, [dashboardData]);

  const options: any = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "bottom",
      },
      tooltip: {
        enabled: true,
        mode: "index",
        intersect: false,
      },
      title: {
        display: true,
        text: "Open Work Orders Vs Closed Work Orders",
        font: {
          size: 20,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          display: true,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        offset: true,
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default WorkChart;
