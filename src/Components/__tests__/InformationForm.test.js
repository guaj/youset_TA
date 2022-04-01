import { unmountComponentAtNode } from "react-dom";
import {fireEvent, getByTestId, render, screen} from "@testing-library/react";
import InformationForm from "../CheckoutForm/InformationForm";

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
    render(<InformationForm />)
    const contentInput = screen.getByTestId("content-input");
    fireEvent.change(contentInput, {target: {value: 'Good Day'}})
    expect(contentInput.value).toBe('') //empty after
});


// Integration tests