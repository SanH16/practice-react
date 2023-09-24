import React, { useState } from "react";

export default function PassengerInput(props) {
  const [data, setData] = useState({
    nama: "",
    umur: "",
    jenisKelamin: "Pria",
  });
  const [editing, setEditing] = useState(true);

  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.nama.trim() && data.umur && data.jenisKelamin) {
      const umur = data.umur;
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        const newData = {
          nama: data.nama,
          umur: data.umur,
          jenisKelamin: data.jenisKelamin,
        };
        props.tambahPengunjung(newData);
        setData({
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
    setEditing(false);
  };

  const handleClearInput = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan nama anda</p>
        <input type="text" placeholder="Nama anda" value={data.nama} name="nama" onChange={onChange} />

        <p>Masukkan umur anda</p>
        <input type="text" placeholder="Umur anda" value={data.umur} name="umur" onChange={onChange} />

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
