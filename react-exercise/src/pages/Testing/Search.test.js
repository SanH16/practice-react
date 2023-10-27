import React from "react";
import axios from "axios";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Search from "./Search";

jest.mock(axios);

describe("Search", () => {
  test("fetching stories from API and display them", async () => {
    const stories = [
      {
        objectID: "1",
        title: "Hello",
        objectID: "2",
        title: "React",
      },
    ];

    axios.get.mockImplementationOnce(() => Promise.resolve({ data: { hits: stories } }));

    render(<Search />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  test("fetching stories from API and fails", async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(new Error()));

    render(<Search />);

    await act(async () => {
      await userEvent.click(screen.getByRole("button"));
    });

    const items = await screen.findByText("Ada yang error bro..");

    expect(items).toBeInTheDocument(2);
  });
});
