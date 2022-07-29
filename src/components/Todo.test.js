import { render, querySelector, fireEvent, getByRole } from "@testing-library/react";
import Todo from "./Todo";

const mockedTask = {
    id: "todo-0",
    content: "Java",
    completed: true,
  };  

describe("Basic rendering of a Todo task", () => {
    it("Should render checkbox for the task", () => {
        const completed = true;
        const name = "Java";
        const id = "todo-0";
        const todoTask = render(<Todo name={name} completed={completed} id={id}/>);
        const firstTask = todoTask.container.querySelector('#todo-0');
        expect(firstTask).toBeInTheDocument();
        expect(firstTask).toBeChecked();
    });

    it("Should render label for the task", () => {
        const completed = true;
        const name = "Java";
        const id = "todo-0";
        const todoTask = render(<Todo name={name} completed={completed} id={id} />);
        const labelText = todoTask.container.querySelector('.todo-label');
        expect(labelText).toBeInTheDocument();
    });

    it("Should render Edit button for task", () => {
        const todoTask = render(<Todo />);
        const editBtn = todoTask.container.querySelector('.btn')
        expect(editBtn).toBeInTheDocument();
    });

    it("Should render Delete button for task", () => {
        const todoTask = render(<Todo />);
        const deleteBtn = todoTask.container.querySelector('.btn__danger')
        expect(deleteBtn).toBeInTheDocument();
    });

    it("Should mark todo task to be completed on checkbox click", () => {
        const toggleTaskCompleted = jest.fn();
        const {getByRole} = render(<Todo id={mockedTask.id}toggleTaskCompleted={toggleTaskCompleted}/>)
        const checkbox = getByRole('checkbox');
       
        fireEvent.click(checkbox);    
        expect(toggleTaskCompleted).toHaveBeenCalledTimes(1);
        expect(toggleTaskCompleted).toBeCalledWith(mockedTask.id);
        
      });

      it("Should delete a todo task on click of delete button", () => {
        const mockedDeleteTask = jest.fn();
        const {getByText} = render(<Todo id={mockedTask.id} deleteTask={mockedDeleteTask} />);
        const deleteBtn = getByText(/Delete/i);        

        fireEvent.click(deleteBtn);

        expect(mockedDeleteTask).toBeCalledTimes(1);  
        expect(mockedDeleteTask).toBeCalledWith(mockedTask.id);      
      })     
      
      it("Should show elements of editing template on click of edit button", ()=>{
        const {getByText, getByTestId} = render(<Todo mockedTask={mockedTask} />)
                
        const editBtn = getByText(/Edit/i)
        fireEvent.click(editBtn);
        const input = getByTestId('new-name')
        const saveBtn = getByText(/Save/i)
        const cancelBtn = getByText(/Cancel/i)
        
        expect(input).toBeInTheDocument();
        expect(saveBtn).toBeInTheDocument();
        expect(cancelBtn).toBeInTheDocument();
      })   
})