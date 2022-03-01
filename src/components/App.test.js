import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';

test('renders title', () => {
  render(<MockedProvider><App /></MockedProvider>);
  const headerElement = screen.getByText(/Head to Head/i);
  expect(headerElement).toBeInTheDocument();
});
