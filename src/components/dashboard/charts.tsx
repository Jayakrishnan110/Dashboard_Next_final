"use client";

import Chart from "react-apexcharts";

const Charts = () => {
  const option = {
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
      fill: {
        colors: ["#1A73E8", "#B32824"],
        opacity: 0.9,
        type: "solid",
        gradient: {
          // shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 50, 100],
          colorStops: [],
        },
        image: {
          src: [],
          width: undefined,
          height: undefined,
        },
        pattern: {
          style: "verticalLines",
          width: 6,
          height: 6,
          strokeWidth: 2,
        },
      },
    } as ApexCharts.ApexOptions,
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
      {
        name: "series-2",
        data: [20, 60, 15, 30, 79, 36, 81, 51, 105],
      },
    ],
  };
  return (
    <div className="w-3/5">
      <div className="relative w-auto p-4 border-2 border-slate-100 rounded-lg">
        <Chart
          options={option.options}
          series={option.series}
          type="line"
          height={370}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Charts;
