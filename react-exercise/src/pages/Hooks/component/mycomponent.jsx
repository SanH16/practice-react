import React from "react";
import UseWindowsWidth from "./usewindow";

export default function MyComponent() {
  const onSmallScreen = UseWindowsWidth();
  return (
    <div className={`${onSmallScreen ? "small" : "large"}`}>
      <h1>Hellow wezup</h1>
    </div>
  );
}
