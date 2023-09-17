import { Component } from "react";

class PassengerInput extends Component {
  state = {
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const formIsNotEmpty = this.state.nama && this.state.umur && this.state.jenisKelamin;

    if (formIsNotEmpty) {
      const newData = {
        nama: this.state.nama,
        umur: this.state.umur,
        jenisKelamin: this.state.jenisKelamin,
      };

      this.props.tambahPengunjung(newData);
      this.setState({
        nama: "",
        umur: "",
        jenisKelamin: "Pria",
      });
    } else {
      alert("Input data first");
    }
  };

  handleOpenInput = () => {
    this.setState({
      editing: false,
    });
  };

  handleClearInput = () => {
    this.setState({
      editing: true,
    });
  };

  render() {
    const viewMode = {};
    const editMode = {};

    if (this.state.editing) {
      viewMode.display = "none";
    } else {
      editMode.display = "none";
    }

    return (
      <div>
        <div onSubmit={this.handleSubmit} style={viewMode}>
          <p>Masukkan nama anda</p>
          <input type="text" placeholder="Nama anda" value={this.state.nama} name="nama" onChange={this.onChange} />

          <p>Masukkan umur anda</p>
          <input type="text" placeholder="Umur anda" value={this.state.umur} name="umur" onChange={this.onChange} />

          <p>Masukkan jenis kelamin</p>
          <select onChange={this.onChange} name="jenisKelamin">
            <option value="Pria" selected>
              Pria
            </option>
            <option value="Perempuan">Perempuan</option>
          </select>

          <button onClick={this.handleSubmit}>Submit</button>
          <button onClick={this.handleClearInput}>Selesai</button>
        </div>
        <button onClick={this.handleOpenInput} style={editMode}>
          Masukkan nama Penumpang
        </button>
      </div>
    );
  }
}

export default PassengerInput;
