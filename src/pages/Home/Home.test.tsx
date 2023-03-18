import { render, screen } from '@testing-library/react';

import { Home } from './Home';

describe('<App />', () => {
  it('should render the App', () => {
    render(<Home />);

    expect(
      screen.getByText(/Avoid setting up a project from scratch. Start using VRTTV 🎉/i),
    ).toBeInTheDocument();
  });
});
