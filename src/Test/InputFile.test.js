import React from "react";
import {render, fireEvent} from "@testing-library/react";

import NavBar from "../components/navbar/NavBar";

test('Renders NavBar correctly', () => {
    const {queryByTestId} = render(<NavBar />);

    expect(queryByTestId("navbar")).toBeTruthy();
});