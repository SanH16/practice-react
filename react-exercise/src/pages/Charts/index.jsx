import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { Card } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export const showNotify = (pesan, position) =>
  toast(pesan, {
    position,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    className: "bg-green",
    // style: { width: "90vw" },
    // progressClassName: {
    //   background: "#0000",
    // },
    // theme: "dark",

    // style: {
    //   background: "#93E5D5 !important",
    //   color: "#FBFBFB !important",
    //   fontWeight: "bold",
    // },
  });

export default function Charts() {
  return (
    <>
      <Card title="Pendapatan" bordered={false} style={{ width: 768 }}>
        <Bar options={configs} data={datas} onClick={() => showNotify("Data berhasil diverifikasi", "bottom-left")} />
        <ToastContainer style={{ width: "90vw" }} />
      </Card>
    </>
  );
}
