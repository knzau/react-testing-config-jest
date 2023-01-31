import { render, screen } from '@testing-library/react';
import Hello from './Hello';

it('renders "Hello world"', () => {
	render(<Hello />);
	const helloElement = screen.getByText('Hello world');
  expect(helloElement).toBeInTheDocument();
});
