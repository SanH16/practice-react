import { useSelector, useDispatch } from "react-redux";
import { hapusPengunjung } from "../store/passengerSlice";
import ListItem from "./list-item";

const ListPassenger = (props) => {
  const passengers = useSelector((state) => state.passenger.passengers);
  const dispatch = useDispatch();
  return (
    <div>
      <div className="header">
        <h1>Daftar Pengunjung</h1>
        <h3>Stasiun Gubeng</h3>
      </div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="pink">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {passengers.map((item) => (
          <ListItem
            key={item.id}
            data={item}
            hapusPengunjung={() => {
              dispatch(hapusPengunjung(item.id));
            }}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
