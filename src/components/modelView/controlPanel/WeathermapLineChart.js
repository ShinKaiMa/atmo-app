import React, { useContext, memo } from "react";
import ReactApexChart from "react-apexcharts";
import { AppStatusContext } from "../../../contexts/AppStatusContext";

const WeatherLineChart = ({ width, height }) => {
  const { appStatus } = useContext(AppStatusContext);

  let chartData = {
          
    series: [
      {
        name: "High - 2013",
        data: [28, 29, 33, 36, 32, 32, 33]
      },
      {
        name: "Low - 2013",
        data: [12, 11, 14, 18, 17, 13, 13]
      }
    ],
    options: {
      chart: {
        zoom: {
            enabled: false
        },
        height: 350,
        type: 'line',
        dropShadow: {
          enabled: true,
          color: '#000',
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2
        },
        toolbar: {
          show: true
        }
      },
      colors: ['#77B6EA', '#545454'],
      dataLabels: {
        enabled: true,
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Average High & Low Temperature',
        align: 'left'
      },
      markers: {
        size: 1
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        title: {
          text: 'Date'
        }
      },
      yaxis: {
        title: {
          text: 'Temperature'
        },
        min: 5,
        max: 40
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
        floating: true,
        offsetY: -25,
        offsetX: -5
      }
    },
  
  
  };
;
  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={300}
      />
    </div>
  );
};

export default memo(WeatherLineChart);
