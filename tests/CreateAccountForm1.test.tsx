import React from "react";
import { render, screen } from "@testing-library/react";
import { CreateAccountForm1 } from "../src/forms/CreateAccountForm1";
import { theme } from "../src/theme";
import { ThemeProvider } from "@mui/system";
import "@testing-library/jest-dom";

describe("<CreateAccountForm1 />", () => {
  // Render App in the document
  render(
    <ThemeProvider theme={theme}>
      <CreateAccountForm1 />
    </ThemeProvider>,
  );

  test("should render button", () => {
    const buttonElem = screen.queryByText("Continue");
    expect(buttonElem).toBeInTheDocument();
  });
});
