import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders for text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Web Developer/i);
  expect(linkElement).toBeInTheDocument();
});
