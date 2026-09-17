import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { analyticsData } from '../../data/dashboardData';
import { MoreHorizontal } from 'lucide-react';

export default function AnalyticsCard() {
  const [hiddenSegments, setHiddenSegments] = useState([]);

  const toggleSegment = (label) => {
    if (hiddenSegments.includes(label)) {
      setHiddenSegments(hiddenSegments.filter((l) => l !== label));
    } else {
      // Don't hide all segments
      if (hiddenSegments.length < analyticsData.segments.length - 1) {
        setHiddenSegments([...hiddenSegments, label]);
      }
    }
  };

  const activeSegments = analyticsData.segments.filter((s) => !hiddenSegments.includes(s.label));

  const options = {
    chart: {
      type: 'donut',
      height: 220,
      fontFamily: 'Poppins, sans-serif',
    },
    colors: activeSegments.map((s) => s.color),
    labels: activeSegments.map((s) => s.label),
    stroke: {
      width: 4,
      colors: ['#FFFFFF'],
    },
    dataLabels: { enabled: false },
    legend: { show: false },
    plotOptions: {
      pie: {
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '13px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 500,
              color: '#8A8FA8',
              offsetY: 18,
            },
            value: {
              show: true,
              fontSize: '28px',
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 700,
              color: '#1B1D28',
              offsetY: -12,
              formatter: () => analyticsData.centerFigure,
            },
            total: {
              show: true,
              label: analyticsData.centerCaption,
              color: '#8A8FA8',
              formatter: () => analyticsData.centerFigure,
            },
          },
        },
      },
    },
    tooltip: {
      theme: 'light',
    },
  };

  const series = activeSegments.map((s) => s.value);

  return (
    <div className="rounded-2xl bg-surface border border-line p-6 shadow-[0_8px_30px_rgba(27,29,40,0.06)] flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold tracking-tight text-ink">{analyticsData.title}</h2>
          <button className="p-1.5 rounded-lg text-muted hover:text-ink hover:bg-canvas transition-colors" title="More options">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Donut Chart */}
        <div className="flex items-center justify-center my-4">
          <Chart options={options} series={series} type="donut" height={220} />
        </div>
      </div>

      {/* Interactive Custom Legend Underneath */}
      <div className="mt-6 pt-4 border-t border-line flex items-center justify-around gap-2">
        {analyticsData.segments.map((seg, idx) => {
          const isHidden = hiddenSegments.includes(seg.label);
          return (
            <button
              key={idx}
              onClick={() => toggleSegment(seg.label)}
              className={`flex flex-col items-center cursor-pointer transition-opacity group ${
                isHidden ? 'opacity-40' : 'opacity-100 hover:scale-105'
              }`}
              title={`Click to ${isHidden ? 'show' : 'hide'} ${seg.label}`}
            >
              <div className="flex items-center gap-1.5 mb-1">
                <span 
                  className={`w-3 h-3 rounded-full transition-transform ${isHidden ? 'line-through' : ''}`} 
                  style={{ backgroundColor: seg.color }} 
                />
                <span className="text-xs font-medium text-muted group-hover:text-ink">{seg.label}</span>
              </div>
              <span className={`text-base font-bold ${isHidden ? 'line-through text-muted' : 'text-ink'}`}>
                {seg.value}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}


