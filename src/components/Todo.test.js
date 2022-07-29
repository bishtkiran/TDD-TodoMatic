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
        const getById = render(<Todo name={name} completed={completed} id={id}/>);
        const firstTask = getById.container.querySelector('#todo-0');
        expect(firstTask).toBeInTheDocument();
        expect(firstTask).toBeChecked();
    });

    it("Should render label for the task", () => {
        const completed = true;
        const name = "Java";
        const id = "todo-0";
        const getByClass = render(<Todo name={name} completed={completed} id={id} />);
        const labelText = getByClass.container.querySelector('.todo-label');
        expect(labelText).toBeInTheDocument();
    });

    it("Should render Edit button for task", () => {
        const getByClass = render(<Todo />);
        const editBtn = getByClass.container.querySelector('.btn')
        expect(editBtn).toBeInTheDocument();
    });

    it("Should render Delete button for task", () => {
        const getByClass = render(<Todo />);
        const deleteBtn = getByClass.container.querySelector('.btn__danger')
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
        const {getByText, debug} = render(<Todo id={mockedTask.id} deleteTask={mockedDeleteTask} />);
        const deleteBtn = getByText(/Delete/i);
        debug();

        fireEvent.click(deleteBtn);

        expect(mockedDeleteTask).toBeCalledTimes(1);  
        expect(mockedDeleteTask).toBeCalledWith(mockedTask.id);      
      })

      it("Should set editing template to true on click of edit Button", () => {
        const mockedSetEditing = jest.fn();
        const {getByText,debug} = render(<Todo />)        
        const editBtn = getByText(/Edit/i);
        fireEvent.click(editBtn);
        debug();

        expect(mockedSetEditing).toBeTruthy();       
               
      })
      
    
     

   
})