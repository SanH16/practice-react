import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card } from "antd";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// options
const configs = {
  type: "bar",
  options: {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   //   text: "Pendapatan",
    // },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];
// const labels = Utils.months({ count: 7 });

// datas configs
const datas = {
  labels,
  datasets: [
    {
      label: "Pekan Lalu",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      borderRadius: 5,
    },
    {
      label: "Pekan ini",
      data: labels.map(() => Math.floor(Math.random() * 100)),
      backgroundColor: "rgba(20, 198, 164, 1)",
      borderRadius: 5,
    },
  ],
};
export default function Charts() {
  return (
    <>
      <Card title="Pendapatan" bordered={false} style={{ width: 768 }}>
        <Bar options={configs} data={datas} />;
      </Card>
    </>
  );
}
