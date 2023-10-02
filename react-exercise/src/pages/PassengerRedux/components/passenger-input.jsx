import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { tambahPengunjung } from "../store/passengerSlice";
import "../home-page.css";

export default function PassengerInput(props) {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
    editing: true,
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.nama.trim() && state.umur && state.jenisKelamin) {
      const umur = state.umur;
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        const newData = {
          nama: state.nama,
          umur: state.umur,
          jenisKelamin: state.jenisKelamin,
        };
        dispatch(tambahPengunjung(newData));
        setState({
          ...state,
          nama: "",
          umur: "",
          jenisKelamin: "Pria",
        });
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  const handleOpenInput = () => {
    setState({
      ...state,
      editing: false,
    });
  };

  const handleClearInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  const viewMode = {};
  const editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }
  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan nama anda</p>
        <input type="text" placeholder="Nama anda" value={state.nama} name="nama" onChange={onChange} />

        <p>Masukkan umur anda</p>
        <input type="text" placeholder="Umur anda" value={state.umur} name="umur" onChange={onChange} />

        <p>Masukkan jenis kelamin</p>
        <select onChange={onChange} name="jenisKelamin">
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Perempuan">Perempuan</option>
        </select>

        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleClearInput}>Selesai</button>
      </div>
      <button onClick={handleOpenInput} style={editMode}>
        Masukkan nama Penumpang
      </button>
    </div>
  );
}
