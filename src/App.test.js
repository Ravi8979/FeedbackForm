import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation links', () => {
  render(<App />);
  const feedbackLink = screen.getByText(/Feedback Form/i);
  const submissionsLink = screen.getByText(/Submissions Table/i);
  const screen3Link = screen.getByText(/Screen3/i);

  expect(feedbackLink).toBeInTheDocument();
  expect(submissionsLink).toBeInTheDocument();
  expect(screen3Link).toBeInTheDocument();
});
