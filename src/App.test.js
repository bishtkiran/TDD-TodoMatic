import { render, screen } from '@testing-library/react';
import App from './App';

describe('Rendering title for TodoMatic', () => {
 it("Should render todomatic title",() => {
  const {getByText} = render(<App />);
  const title = getByText("TodoMatic");
  expect(title).toBeInTheDocument();

 })

});
