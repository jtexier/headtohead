import { render, screen } from '@testing-library/react';
import Player from './Player';
import data from "../data/headtohead";

test('renders player fullname', () => {
  render(<Player player={data.headToHead[0]}/>);
  const fullname = screen.getByText(/Stan Wawrinka/i);
  expect(fullname).toBeInTheDocument();
});
