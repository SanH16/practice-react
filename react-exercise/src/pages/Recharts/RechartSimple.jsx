import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
  {
    year: "Jan",
    after: 100,
    // previous: 200,
    amount: 0,
  },
  {
    year: "Feb",
    after: 140,
    // previous: 180,
    amount: 50,
  },
  {
    year: "Mar",
    after: 160,
    // previous: 240,
    amount: 100,
  },
  {
    year: "Apr",
    after: 140,
    // previous: 220,
    amount: 150,
  },
  {
    year: "Mei",
    after: 180,
    // previous: 140,
    amount: 200,
  },
];

export default function RechartSimple() {
  return (
    <>
      {/* <Wrapper width="50%" aspect={2.5}> */}
      <BarChart
        width={461}
        height={308}
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
        {/* <Legend
          verticalAlign="top"
          align="center"
          iconSize={20}
          iconType="square"
          formatter={(value, entry, index) => <span className="text-black">{value}</span>}
          wrapperStyle={{
            paddingBottom: "50px",
          }}
        /> */}
        <CartesianGrid stroke="#B9B9B9" vertical={false} />
        <XAxis orientation="bottom" dataKey="year" tickLine={false} axisLine={false} style={{ fontWeight: 700 }} />
        <YAxis
          orientation="left"
          type="string"
          dataKey="amount"
          tickLine={false}
          axisLine={false}
          style={{ fontWeight: 700 }}
        />
        <Tooltip />
        {/* <Bar barSize={10} dataKey="previous" name="Pekan Lalu" fill="rgba(185, 185, 185, 0.8)" /> */}
        <Bar barSize={25} dataKey="after" name="Pekan Kini" fill="rgba(20, 198, 164, 1)">
          {/* <LabelList position="top" /> */}
        </Bar>
      </BarChart>
      {/* </Wrapper> */}
    </>
  );
}
