import React from 'react';
import Chart from 'react-apexcharts';

export default function EarningsChart({ seriesData, categories }) {
  const options = {
    chart: {
      type: 'area',
      height: 240,
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'Poppins, sans-serif',
    },
    colors: ['#6C4EF2', '#F9A44A'],
    dataLabels: { enabled: false },
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [0, 90, 100],
      },
    },
    grid: {
      borderColor: '#EEF0F6',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: categories,
      labels: {
        style: {
          colors: '#8A8FA8',
          fontSize: '12px',
          fontWeight: 500,
        },
      },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#8A8FA8',
          fontSize: '12px',
          fontWeight: 500,
        },
        formatter: (val) => `$${val}k`,
      },
      min: 0,
      max: 30,
      tickAmount: 4,
    },
    legend: { show: false },
    tooltip: {
      theme: 'light',
      y: {
        formatter: (val) => `$${val}k`,
      },
    },
  };

  return (
    <div className="w-full">
      <Chart options={options} series={seriesData} type="area" height={240} />
    </div>
  );
}
