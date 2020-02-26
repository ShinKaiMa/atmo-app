import React, { useContext, memo } from "react";
import ReactApexChart from "react-apexcharts";
import { AppStatusContext } from "../../../contexts/AppStatusContext";

const WeatherHeatMap = ({ width, height }) => {
  const { appStatus } = useContext(AppStatusContext);

  let chartData = {
    series: [
      {
        name: "TPE",
        data: [
          {
            x: "W1",
            y: 32
          },
          {
            x: "W2",
            y: 20
          },
          {
            x: "W3",
            y: 25
          },
          {
            x: "W4",
            y: 0
          }
        ]
      },
      {
        name: "Series 2",
        data: [
          {
            x: "W1",
            y: 20
          },
          {
            x: "W2",
            y: 25
          },
          {
            x: "W3",
            y: 30
          },
          {
            x: "W4",
            y: 35
          }
        ]
      },
      {
        name: "Series 3",
        data: [
          {
            x: "W1",
            y: 20
          },
          {
            x: "W2",
            y: 22
          },
          {
            x: "W3",
            y: 16
          },
          {
            x: "W4",
            y: 15
          }
        ]
      },
      {
        name: "Series 4",
        data: [
          {
            x: "W1",
            y: 27
          },
          {
            x: "W2",
            y: 35
          },
          {
            x: "W3",
            y: 28
          },
          {
            x: "W4",
            y: 30
          }
        ]
      },
      {
        name: "Series 5",
        data: [
          {
            x: "W1",
            y: 23
          },
          {
            x: "W2",
            y: 30
          },
          {
            x: "W3",
            y: 15
          },
          {
            x: "W4",
            y: 22
          },
        ]
      }
    ],
    options: {
      chart: {
        toolbar: {
          show: false
        },
        type: "heatmap",
        width : appStatus.isLandscape? appStatus.isMobile? "100%" : width : "100%",
      },
      dataLabels: {
        enabled: true
      },
      colors: ["#14293D"],
      title: {
        text: "Temperature"
      },
    }
  };
  return (
    <div id="chart">
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="heatmap"
        height={300}
      />
    </div>
  );
};

export default memo(WeatherHeatMap);
