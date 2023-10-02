import React from "react";
import ListPassenger from "./components/list-passenger";
import PassengerInput from "./components/passenger-input";

export default function HomePage() {
  return (
    <div style={{ margin: "auto", textAlign: "center" }}>
      <ListPassenger />
      <PassengerInput />
    </div>
  );
}
