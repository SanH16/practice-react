import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Label, LabelList } from "recharts";

const data = [
  {
    year: "Januari",
    after: 100,
    // previous: 200,
    amount: 0,
  },
  {
    year: "Februari",
    after: 140,
    // previous: 180,
    amount: 50,
  },
  {
    year: "Maret",
    after: 160,
    // previous: 240,
    amount: 100,
  },
  {
    year: "April",
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

const customTickFormatter = (value) => `${value}K`;
const customTickXAxis = (value) => value.slice(0, 3);

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
          top: 15,
          right: 5,
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
        <XAxis
          tickFormatter={customTickXAxis}
          orientation="bottom"
          dataKey="year"
          tickLine={false}
          axisLine={false}
          style={{ fontWeight: 700 }}
        />
        <YAxis
          orientation="left"
          type="string"
          tickFormatter={customTickFormatter}
          dataKey="amount"
          tickLine={false}
          axisLine={false}
          style={{ fontWeight: 700 }}
        ></YAxis>
        <Tooltip cursor={{ fill: "transparent" }} content={CustomTooltip} />
        {/* <Bar barSize={10} dataKey="previous" name="Pekan Lalu" fill="rgba(185, 185, 185, 0.8)" /> */}
        <Bar barSize={25} radius={0} dataKey="after" name="Pekan Kini" fill="rgba(20, 198, 164, 1)">
          {/* <LabelList position="top" formatter={customTickFormatter} /> */}
        </Bar>
      </BarChart>
      {/* </Wrapper> */}
    </>
  );
}

// const CustomTooltip = ({ active, payload, label }) => {
//   if (active && payload && payload.length) {
//     return (
//       <div className="custom-tooltip">
//         <p className="label">{`${label} : ${payload[0].value}`}</p>
//         <div>
//           {payload.map((pld) => (
//             <div style={{ display: "inline-block", padding: 10 }}>
//               <div style={{ color: pld.fill }}>{pld.value}</div>
//               <div>{pld.dataKey}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   return null;
// };

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: "gray" }}>
        <p className="label">{`${label} : Rp. ${payload[0].value * 1000}`}</p>
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        <p className="desc">{`Pendapatan Bulan ${label}.`}</p>
      </div>
    );
  }

  return null;
};
