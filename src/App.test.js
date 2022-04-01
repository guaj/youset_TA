import { render, screen } from '@testing-library/react';
import HomePage from "./Components/PackageSelection/PackageSelection";


test('renders HomePage without crashing', () => {
  render(<HomePage />)
});
