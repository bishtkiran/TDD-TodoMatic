import {render, fireEvent, user, getByRole} from "@testing-library/react";
import { act } from 'react-dom/test-utils'
import { useReducer } from "react";
import Form from "./Form";

describe("Basic rendering of Form", () => {
    it("Should render heading for the form", () =>{
        const {getByText} = render(<Form />);
        const formHeading = getByText("What needs to be done?");
        expect(formHeading).toBeInTheDocument();
    });

    it("Should render input field to type task", () => {
        const getById = render(<Form />);
        const inputField = getById.container.querySelector("#new-todo-input");
        expect(inputField).toBeInTheDocument();
        expect(inputField.value).toEqual('');
    });

    it("Should render add button to add new task", () => {
        const {getByText} = render(<Form />);
        const addBtn = getByText("Add");
        expect(addBtn).toBeInTheDocument();
        expect(addBtn).not.toBeDisabled();
    });

    test("Form submission should not call addTask method if input field is empty", () => {
      const mockedAddTask = jest.fn() 
      const {getByRole} = render(<Form add={mockedAddTask} />); 
      const addBtn = getByRole('button');
      fireEvent.click(addBtn);
      expect(mockedAddTask).not.toHaveBeenCalled();
    });
    
    test("Form submission should add a new todo task successfully", () => {
      const mockedAddTask = jest.fn();
      const { getByRole } = render(<Form addTask={mockedAddTask} />);
      const input = getByRole('textbox');
      const addBtn = getByRole('button');
    
      fireEvent.change(input, { target: { value: "Spring" } });
      fireEvent.click(addBtn);
    
      expect(mockedAddTask).toHaveBeenCalledTimes(1);
      expect(mockedAddTask).toHaveBeenCalledWith("Spring");
    
      expect(input).toHaveValue("");

    }); 
    
});