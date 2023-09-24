import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ListPassenger from "./component/list-passenger";
import PassengerInput from "./component/passenger-input";

const initialValue = [
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
];
export default function Homes() {
  const [data, setData] = useState(initialValue);

  const hapusPengunjung = (id) => {
    setData((oldData) =>
      oldData.filter((item) => {
        return item.id !== id;
      })
    );
  };

  const tambahPengunjung = (newUser) => {
    const newData = { id: uuidv4(), ...newUser };

    setData((oldData) => [oldData, newData]);
  };

  return (
    <div>
      <ListPassenger data={data} hapusPengunjung={hapusPengunjung} />
      <PassengerInput tambahPengunjung={tambahPengunjung} />
    </div>
  );
}
