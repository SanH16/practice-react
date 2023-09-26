import "../homes.css";
import { useNavigate } from "react-router-dom";

const ListItem = (props) => {
  const { id, nama, umur, jenisKelamin } = props.data;
  const navigate = useNavigate();
  const action = () => {
    // console.log("navigate:", navigate);
    // console.log("pathname:", `/profile/${nama}`);
    // console.log("state:", { data: props.data });
    navigate({
      pathname: `/profile/${nama}`,
      state: {
        data: props.data,
      },
    });
  };
  return (
    <tr>
      <td onClick={action}>{nama}</td>
      <td>{umur}</td>
      <td>{jenisKelamin}</td>
      <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}>
        <button>Hapus</button>
      </td>
    </tr>
  );
};

export default ListItem;
