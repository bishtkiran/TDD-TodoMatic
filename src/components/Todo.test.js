import { render, querySelector } from "@testing-library/react";
import Todo from "./Todo";

describe("Basic rendering of a Todo task", () => {
    it("Should render checkbox for the task", () => {
        const getById = render(<Todo />);
        const firstTask = getById.container.querySelector('#todo-0');
        expect(firstTask).toBeInTheDocument();
        expect(firstTask).toBeChecked();
    });

    it("Should render label for the task", () => {
        const getByClass = render(<Todo />);
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