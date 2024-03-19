import { describe } from "vitest";
import App from "./App.tsx";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render dummy text", () => {
    render(<App />);

    expect(screen.getByText("This is my begin!")).toBeInTheDocument();
  });
});
