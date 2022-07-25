import { render, querySelector } from "@testing-library/react";
import Todo from "./Todo";

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
})