import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock("nanoid", () => ({
  nanoid: () => "todo-1",
}));

const mockData =[{ id: "todo-0", name: "Eat", completed: true },
   ];
const taskNoun = mockData.length > 1 ? "tasks" : "task";
describe('Rendering title for TodoMatic', () => {
 it("Should render todomatic title",() => {    
  const {getByText} = render(<App tasks={mockData} />);
  const title = getByText("TodoMatic");
  expect(title).toBeInTheDocument();

 });
 it("Should render correct count for tasks", () => {
   const {getByText} = render(<App tasks={mockData} />)
   const heading = getByText(`${mockData.length} ${taskNoun} remaining`);
   expect(heading).toBeInTheDocument();

 })

});
