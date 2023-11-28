import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer as Wrapper,
  CartesianGrid,
} from "recharts";
import { showNotify } from "../Toast";
import { ToastContainer } from "react-toastify";
import { Button } from "antd";

const data = [
  {
    year: "Januari",
    after: 53,
    // previous: 200,
    amount: 0,
  },
  {
    year: "Februari",
    after: 43,
    // previous: 180,
    amount: 10,
  },
  {
    year: "Maret",
    after: 33,
    // previous: 240,
    amount: 20,
  },
  {
    year: "April",
    after: 50,
    // previous: 220,
    amount: 30,
  },
  {
    year: "Mei",
    after: 47,
    // previous: 140,
    amount: 40,
  },
  {
    year: "Juni",
    after: 45,
    // previous: 140,
    amount: 50,
  },
  {
    year: "Juli",
    after: 49,
    // previous: 140,
    amount: 60,
  },
];
export default function RechartV2() {
  const customTickYAxis = (value) => `${value} Jt`;
  const customTickXAxis = (value) => value.slice(0, 3);
  return (
    <>
      <Wrapper width="100%" aspect={3}>
        <BarChart
          //   width={1016}
          //   height={400}
          data={data}
          barGap={0}
          margin={{
            top: 5,
            right: 0,
            left: 10,
            bottom: 10,
          }}
          //   layout="horizontal"
          style={{ marginTop: "90px" }}
        >
          <Legend
            verticalAlign="top"
            align="end"
            iconSize={20}
            iconType="circle"
            formatter={(value, entry, index) => <span className="text-black">{value}</span>}
            wrapperStyle={{
              paddingBottom: "50px",
            }}
          />
          <CartesianGrid vertical={false} stroke="rgba(233, 233, 233, 1)" />
          <XAxis
            tickFormatter={customTickXAxis}
            orientation="bottom"
            dataKey="year"
            tickLine={false}
            axisLine={false}
            tickMargin={20}
            style={{ fontWeight: 400 }}
          />
          <YAxis
            tickFormatter={customTickYAxis}
            orientation="left"
            type="string"
            dataKey="amount"
            tickLine={false}
            axisLine={false}
            tickMargin={20}
            style={{ fontWeight: 400 }}
          />
          <Tooltip />
          {/* <Bar barSize={10} dataKey="previous" name="Pekan Lalu" fill="rgba(185, 185, 185, 0.8)" /> */}
          <Bar barSize={30} dataKey="after" name="Jumlah Pendapatan" fill="rgba(20, 198, 164, 1)" radius={30}>
            <LabelList position="top" />
          </Bar>
        </BarChart>
      </Wrapper>
      <Button onClick={() => showNotify("test klik", "bottom-center")}>test</Button>
      {/* <Button onClick={<Toast pesan="test komponen" position="top-center" />}>test 2</Button> */}

      <ToastContainer style={{ width: "40vw" }} />
    </>
  );
}
