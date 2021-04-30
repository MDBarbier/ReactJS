import { render, screen } from '@testing-library/react';
import AuthorQuiz from './AuthorQuiz';

test('renders author quiz div', () => {
  render(<AuthorQuiz />);
  const linkElement = screen.getByText(/Author Quiz/i);
  expect(linkElement).toBeInTheDocument();
});
