import { useEffect, useState } from "react";

export default function UseWindowsWidth() {
  const [isScreenSmall, setIsScreenSmall] = useState(false);

  let checkScreenSize = () => {
    setIsScreenSmall(window.innerWidth < 600);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.addEventListener("resize", checkScreenSize);
  }, []);

  return isScreenSmall;
}
