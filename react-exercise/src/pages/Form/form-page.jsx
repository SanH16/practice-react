import React, { useRef, useState } from "react";
import styles from "./form-page.module.css";

export default function FormPage() {
  const dataKosong = {
    title: "",
    author: "",
    label: "",
    publication: 0,
    city: "",
    price: 0,
  };
  const [values, setValues] = useState(dataKosong);
  const formFile = useRef(null);
  const regex = /^[A-Za-z ]*$/;

  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (!regex.test(value)) {
      setErrorMessage("Author name must be contain of letter");
    } else {
      setErrorMessage("");
    }

    setValues({
      ...values,
      [name]: value,
    });
    console.log("data :", values);
  };

  const handleSubmit = (event) => {
    if (errorMessage !== "") {
      alert("Masih terdapat data yang tidak sesuai");
    } else {
      alert(`Data : "${values.title}" berhasil disimpan`);
    }

    event.preventDefault();
  };

  const resetData = () => {
    setValues(dataKosong);
    setErrorMessage("");
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Formulir Buku Tamu</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            className={styles.input}
            onChange={handleInput}
            value={values.title}
            required
          />
        </label>

        <label>
          Author:
          <input
            type="text"
            name="author"
            className={styles.input}
            onChange={handleInput}
            value={values.author}
            required
          />
        </label>
        <p style={{ color: "red" }}>{errorMessage}</p>

        <label>
          Label:
          <input type="text" name="label" className={styles.input} onChange={handleInput} value={values.label} />
        </label>
        <label>
          Publication year:
          <input
            type="number"
            name="publication"
            className={styles.input}
            onChange={handleInput}
            value={values.publication}
          />
        </label>
        <label>
          City:
          <input type="text" name="city" className={styles.input} onChange={handleInput} value={values.city} />
        </label>
        <label>
          Price:
          <input type="number" name="price" className={styles.input} onChange={handleInput} value={values.price} />
        </label>
        <label>
          Foto Sampul:
          <input type="file" ref={formFile} className={styles.input} />
        </label>
        <input type="submit" value="Submit" />
        <button type="button" onClick={resetData}>
          Reset
        </button>
      </form>
    </>
  );
}
