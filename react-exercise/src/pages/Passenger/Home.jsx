import { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import ListPassenger from "./component/ListPassenger";
import PassengerInput from "./component/PassengerInput";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: uuidv4(),
          nama: "San",
          umur: 20,
          jenisKelamin: "Pria",
        },
        {
          id: uuidv4(),
          nama: "Michael",
          umur: 20,
          jenisKelamin: "Pria",
        },
        {
          id: uuidv4(),
          nama: "Milea",
          umur: 22,
          jenisKelamin: "Perempuan",
        },
        {
          id: uuidv4(),
          nama: "Amelin",
          umur: 21,
          jenisKelamin: "Perempuan",
        },
      ],
    };
  }

  hapusPengunjung = (id) => {
    const newListPengunjung = this.state.data.filter((item) => item.id !== id);

    this.setState({ data: newListPengunjung });
  };

  tambahPengunjung = (newUser) => {
    const newPengunjung = { id: uuidv4(), ...newUser };

    this.setState({ data: [...this.state.data, newPengunjung] });
  };

  render() {
    return (
      <div>
        <ListPassenger data={this.state.data} hapusPengunjung={this.hapusPengunjung} />
        <PassengerInput tambahPengunjung={this.tambahPengunjung} />
      </div>
    );
  }
}

export default Home;
