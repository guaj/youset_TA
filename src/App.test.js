import { render, screen } from '@testing-library/react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {act} from "react-dom/test-utils";
import {unmountComponentAtNode} from "react-dom";
import HomePage from "./Components/PackageSelection/PackageSelection";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

// Dummy test to check if app is started correctly
test('renders HomePage without crashing', () => {
  act(() => {
    render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}/>
          </Routes>
        </BrowserRouter>
        , container);
  });
});
