import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/test-jest/page';

describe('Page', () => {
  test('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
