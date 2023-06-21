import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import App from "../../components/App";
import forecast from "../../data/forecast.json";

describe("App", () => {
  test("renders App component correctly", async () => {
    jest.spyOn(axios, "get").mockResolvedValue({ data: forecast });

    const { asFragment } = render(<App />);

    await waitFor(() => {
      const h1Element = screen.getByText("Manchester", { exact: false });
      expect(h1Element).toBeInTheDocument();
    });
    expect(asFragment()).toMatchSnapshot();
  });
});
