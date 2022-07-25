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
        const {getByText} = render(<Todo />);
        const labelText = getByText("Java");
        expect(labelText).toBeInTheDocument();
    })
})