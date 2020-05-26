import React from "react";
import {render, fireEvent} from "@testing-library/react";

import SideBar from "../components/main_page/SideBar";

test('Renders InputFile correctly', () => {
    const {queryByTestId} = render(<SideBar />);

    expect(queryByTestId("sidebar")).toBeTruthy();
});