import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Matthew Youngbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/Matthew Youngbar/i);
  expect(linkElement).toBeInTheDocument();
});
