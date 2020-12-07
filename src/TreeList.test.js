import React from "react";
import { render, screen } from "@testing-library/react";

import TreeList from "./TreeList";

describe("TreeList Component", () => {
  //Arrange

  it("When isLoading is true then loading text should be displayed", () => {
    // Act
    const { debug } = render(<TreeList isLoading="false" />);
    //debug();

    //Assertion

    const text = screen.getByTestId("loading-text");
    expect(text).toHaveTextContent("Loading...");
  });
});
