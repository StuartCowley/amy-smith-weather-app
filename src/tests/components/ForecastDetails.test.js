import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 111111,
    temperature: {
      min: 12,
      max: 22
    },
    humidity: 28,
    wind: {
      speed: 12,
      direction: "south"
    }
  };

  it("renders correctly", () => {
    const { asFragment } = render(<ForecastDetails forecast={validProps} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Thu Jan 01 1970")).toHaveClass("forecast-details__date");
    expect(getByText("12°C")).toHaveClass("forecast-details__temperature-min");
    expect(getByText("22°C")).toHaveClass("forecast-details__temperature-max");
    expect(getByText("28%")).toHaveClass("forecast-details__humidity");
    expect(
      getByText((_, element) => element.textContent === "Wind speed: 12 mph")
    ).toHaveClass("forecast-details__wind-speed");
    expect(getByText("south")).toHaveClass("forecast-details__wind-direction");
  });
});
