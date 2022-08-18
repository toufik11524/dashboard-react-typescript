import React from 'react';
import ApexChart from "react-apexcharts";

const Chart = () => {
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  const works = [70, 60, 45, 100, 55, 80, 65];
  // Chart
  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: days,
    },
  };
  const series = [
    {
      name: "series-1",
      data: works,
    },
  ];

  return (
    <section className='sidebar__activity__chart'>
      <ApexChart className='sidebar__activity__chart__graph' options={options} series={series} type="bar" />
    </section>
  );
};

export default Chart;