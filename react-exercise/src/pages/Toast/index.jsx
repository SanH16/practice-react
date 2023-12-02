// import { Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Toast({ pesan, position }) {
  toast(pesan, {
    position,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    className: "bg-green text-white",
  });
  //   const showNotifikasi = () =>
  //     toast(pesan, {
  //       position,
  //       autoClose: 3000,
  //       hideProgressBar: true,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       progress: undefined,
  //       // className: "bg-green",
  //       // style: { width: "90vw" },
  //       // progressClassName: {
  //       //   background: "#0000",
  //       // },
  //       //   theme: "light",

  //       // style: {
  //       //   background: "#93E5D5 !important",
  //       //   color: "#FBFBFB !important",
  //       //   fontWeight: "bold",
  //       // },
  //     });
  return (
    <>
      {/* <Button onClick={() => showNotify("halo", "top-center")}>toast</Button> */}
      {/* <ToastContainer style={{ width: "90vw" }} />; */}
      <ToastContainer />;
    </>
  );
}

export const showNotify = (pesan, position) =>
  toast(pesan, {
    position,
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    progress: undefined,
    // className: "bg-green",
    // style: { width: "90vw" },
    // progressClassName: {
    //   background: "#0000",
    // },
    //   theme: "light",

    // style: {
    //   background: "#93E5D5 !important",
    //   color: "#FBFBFB !important",
    //   fontWeight: "bold",
    // },
  });
