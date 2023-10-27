import React from "react";
import { render, screen, fireEvent, getByText, getByLabelText } from "@testing-library/react";

import FormPageTesting from "./FormPageTesting";

describe("FormPageTesting", () => {
  test("renders FormPageTesting Component", () => {
    render(<FormPageTesting />);
    // screen.debug();

    expect(screen.getByText("Formulir Buku Baru")).toBeInTheDocument();
    expect(screen.getByLabelText(/Judul/)).toBeInTheDocument();
  });

  test("input text for judul and pengarang", () => {
    render(<FormPageTesting />);
    // screen.debug();

    fireEvent.input(screen.getByRole("textbox", { name: /judul/i }), { target: { value: "Bumi Manusia" } });
    fireEvent.input(screen.getByRole("textbox", { name: /pengarang/i }), { target: { value: "San" } });

    expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia");
    expect(screen.getByLabelText(/Pengarang/)).toHaveValue("San");
  });

  test("input text for pengarang with number", () => {
    render(<FormPageTesting />);
    // screen.debug();

    fireEvent.input(screen.getByRole("textbox", { name: /judul/i }), { target: { value: "Bumi Manusia" } });
    fireEvent.input(screen.getByRole("textbox", { name: /pengarang/i }), { target: { value: "San4" } });

    expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia");
    expect(screen.getByLabelText(/Pengarang/)).toHaveValue("San4");
    expect(screen.getByText("Nama Pengarang Harus Berupa Huruf")).toBeInTheDocument();
  });

  test("submit button", () => {
    render(<FormPageTesting />);
    // screen.debug();

    // test input
    fireEvent.input(screen.getByRole("textbox", { name: /judul/i }), { target: { value: "Bumi Manusia" } });
    fireEvent.input(screen.getByRole("textbox", { name: /pengarang/i }), { target: { value: "San" } });

    expect(screen.getByLabelText(/Judul/)).toHaveValue("Bumi Manusia");
    expect(screen.getByLabelText(/Pengarang/)).toHaveValue("San");

    // test button
    fireEvent.click(screen.getByRole("button")); // ketika di click, value nya kosong
    expect(screen.getByLabelText(/Judul/)).toHaveValue("");
    expect(screen.getByLabelText(/Pengarang/)).toHaveValue("");
  });
});
