import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment, getByText } = render(<SearchForm />);

    expect(asFragment()).toMatchSnapshot();
    expect(getByText("Search")).toBeInTheDocument();
  });
});
