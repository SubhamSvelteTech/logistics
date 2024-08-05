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

const dataSe = [12,12,11,11,11,11,2,2,21,2,1,6,3,32,4,12,12,11,11,11,11,2,2,21,2,1,6,3,32,4]
const dataMonth = ["Jan","Feb","Mar","Apr","May","Jun"]

const WorkChart = ({ dashboardData }: any) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const labels:any = dataMonth || [];
    const datasets =
      dashboardData?.datasets?.map((dataset: any) => ({
        label: dataset.label,
        data: dataSe,
        backgroundColor: dataset.backgroundColor,
        borderColor: dataset.borderColor,
      })) || [];

    setChartData({
      labels,
      datasets,
    });
  }, [dashboardData]);

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
