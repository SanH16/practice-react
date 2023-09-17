import ListItem from "./ListItem";

const ListPassenger = (props) => {
  const { data, hapusPengunjung } = props;
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="pink">
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
        </thead>
        <tbody>
          {data.map((passenger) => (
            <ListItem key={passenger.id} item={passenger} hapusPengunjung={hapusPengunjung} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListPassenger;
