import { unmountComponentAtNode } from "react-dom";
import {fireEvent, render, screen} from "@testing-library/react";
import {InformationForm} from "../CheckoutForm/InformationForm";
import * as React from "react";
import {useState} from "react";



let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


// Unit tests

test('It should not allow letters to be inputted', () => {
    const [mockUserData] = [{age: 0, email: '', gender: ''}];
    render(<InformationForm
        userData={mockUserData}
        onChange={() => {}}
        />
    )
    const contentInput = screen.getByTestId("content-input");
    fireEvent.change(contentInput, {target: {value: 'Good Day'}})
    expect(contentInput.value).toBe('0') //empty after
});


// Integration tests