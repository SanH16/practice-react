import React, { useState } from "react";

function FormPageTesting() {
  const baseData = {
    judul: "",
    pengarang: "",
  };

  const [data, setData] = useState(baseData);
  const usernameRegex = /^[A-Za-z]*$/;
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === "pengarang") {
      if (!usernameRegex.test(e.target.value)) {
        setErrorMessage("Nama Pengarang Harus Berupa Huruf");
      } else {
        setErrorMessage("");
      }
    }

    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e) => {
    if (errorMessage === "") {
      resetForm();
    }
    e.preventDefault();
  };

  const resetForm = () => {
    setData(baseData);
  };
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Formulir Buku Baru</h1>
      <form onSubmit={handleSubmit} style={{ justifyContent: "center" }}>
        <label htmlFor="judul">Judul</label>

        <input type="text" name="judul" id="judul" value={data.judul} onChange={handleChange} />
        <label htmlFor="pengarang">Pengarang</label>
        <input type="text" name="pengarang" id="pengarang" value={data.pengarang} onChange={handleChange} />
        <span>{errorMessage}</span>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default FormPageTesting;
