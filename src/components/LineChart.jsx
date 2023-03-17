import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

import {
  Chart as ChartJS,
  CategoryScale, //x axis
  LinearScale, // y axis
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
      coinTimestamp.push(
        new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
      );
      
    }

//   for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
//     coinTimestamp.push(
//       new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString()
//     );
//   }

//   console.log(coinHistory.data.history);
  console.log(coinTimestamp);
  //   console.log(coinPrice);

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price In USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  //   const options = {

  //     scales: {
  //       yAxes: [
  //         {
  //           ticks: {
  //             beginAtZero: true,
  //           },
  //         },
  //       ],
  //     },
  //   };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change: {coinHistory?.data?.change}%
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options}></Line>
    </>
  );
};

export default LineChart;
