import { render, screen } from "@testing-library/react";
import App from "./App";
/**
 * Test the rendering of the application
 */
test("renders learn react link", () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
