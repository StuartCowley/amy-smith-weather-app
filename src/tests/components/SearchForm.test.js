import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe("SearchForm", () => {
  it("renders correctly", () => {
    const { asFragment, getByText } = render(<SearchForm />);

    expect(asFragment()).toMatchSnapshot();
    expect(getByText("Search")).toBeInTheDocument();
  });
});
