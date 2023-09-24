import React, { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  const onPlus = () => {
    setCount(count + 1);
  };

  const onMinus = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>klik : {count}</p>
      <button onClick={onPlus}> + </button>
      <button onClick={onMinus}> - </button>
    </div>
  );
}
