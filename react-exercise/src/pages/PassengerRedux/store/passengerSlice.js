import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

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

export const passengerSlice = createSlice({
  name: "passenger",
  initialState: {
    passengers: initialValue,
  },
  reducers: {
    hapusPengunjung: (state, action) => {
      state.passengers = state.passengers.filter((item) => {
        return item.id !== action.payload;
      });
    },
    tambahPengunjung: (state, action) => {
      const newData = { id: uuidv4(), ...action.payload };

      state.passengers = [...state.passengers, newData];
    },
  },
});

export const { hapusPengunjung, tambahPengunjung } = passengerSlice.actions;
export default passengerSlice.reducer;
