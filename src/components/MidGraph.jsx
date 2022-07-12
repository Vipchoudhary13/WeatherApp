import React from "react";
import Chart from "react-apexcharts";
import "../App.css";
function MidGraph() {
    var obj = {
      options: {
        chart: {
          zoom:{
            enabled:false
          }
        },
        stroke: {
          curve: 'smooth',
        },
        xaxis: {
          categories: ["","9am","10am","11am","12am","1pm","2pm","3pm","4pm","5pm","6pm","7pm","8pm","9pm"]
        },
        dataLabels: {
          enabled: false
        }
      },
      series: [
        {
          name: "series-1",
          data: [20,25,28,32,35,38,41,44,48,42,39,36,32,29]
        }
      ],

    };
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={obj.options}
              series={obj.series}
              type="area"
              width="100%"
              align="center"
            />
          </div>
        </div>
      </div>
    );
  }


export default MidGraph;