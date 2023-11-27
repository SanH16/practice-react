import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, ResponsiveContainer as Wrapper } from "recharts";

import { showNotify } from "../Charts";
import { ToastContainer } from "react-toastify";

const data = [
  {
    day: "Senin",
    after: 220,
    previous: 200,
    amount: 0,
  },
  {
    day: "Selasa",
    after: 240,
    previous: 180,
    amount: 50,
  },
  {
    day: "Rabu",
    after: 260,
    previous: 240,
    amount: 100,
  },
  {
    day: "Kamis",
    after: 240,
    previous: 220,
    amount: 150,
  },
  {
    day: "Jum'at",
    after: 160,
    previous: 140,
    amount: 200,
  },
  {
    day: "Sabtu",
    after: 200,
    previous: 150,
    amount: 250,
  },
  {
    day: "Minggu",
    after: 150,
    previous: 100,
    amount: 300,
  },
];

export default function Rechart() {
  return (
    <>
      <Wrapper width="80%" aspect={3}>
        <BarChart
          //   width={1016}
          //   height={400}
          data={data}
          barGap={0}
          margin={{
            top: 5,
            right: 15,
            left: 0,
            bottom: 5,
          }}
          //   layout="horizontal"
          style={{ marginTop: "90px" }}
        >
          <Legend
            verticalAlign="top"
            align="center"
            iconSize={20}
            iconType="square"
            formatter={(value, entry, index) => <span className="text-black">{value}</span>}
            wrapperStyle={{
              paddingBottom: "50px",
            }}
          />
          {/* <CartesianGrid strokeDasharray="1 3" /> */}
          <XAxis orientation="bottom" dataKey="day" tickLine={false} axisLine={false} style={{ fontWeight: 400 }} />
          <YAxis
            orientation="left"
            type="string"
            dataKey="amount"
            tickLine={false}
            axisLine={false}
            style={{ fontWeight: 400 }}
          />
          <Tooltip />
          <Bar barSize={10} dataKey="previous" name="Pekan Lalu" fill="rgba(185, 185, 185, 0.8)" />
          <Bar barSize={10} dataKey="after" name="Pekan Kini" fill="rgba(14, 141, 116, 1)">
            <LabelList position="top" />
          </Bar>
        </BarChart>
      </Wrapper>
      <button onClick={() => showNotify("Data pasien", "top-center")}>test notify</button>
      <ToastContainer style={{ width: "90vw" }} />
    </>
  );
}
