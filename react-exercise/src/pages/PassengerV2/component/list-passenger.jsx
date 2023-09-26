import ListItem from "./list-item";

const ListPassenger = (props) => {
  // const { data, hapusPengunjung } = props;
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="pink">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
        </thead>
        {props.data.map((item) => (
          <ListItem key={item.id} data={item} hapusPengunjung={props.hapusPengunjung} />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
