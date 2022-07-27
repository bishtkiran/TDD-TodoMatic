import { render, screen } from '@testing-library/react';
import App from './App';


jest.mock("nanoid", () => ({
  nanoid: () => "todo-1",
}));

describe('Rendering title for TodoMatic', () => {
 it("Should render todomatic title",() => {
    const DATA =[{ id: "todo-0", name: "Eat", completed: true },
    { id: "todo-1", name: "Sleep", completed: false },
    { id: "todo-2", name: "Repeat", completed: false }];
  const {getByText} = render(<App tasks={DATA} />);
  const title = getByText("TodoMatic");
  expect(title).toBeInTheDocument();

 });

});
