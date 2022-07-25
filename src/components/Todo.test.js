import { render, querySelector } from "@testing-library/react";
import Todo from "./Todo";

describe("Basic rendering of a Todo task", () => {
    it("Should render checkbox for the task", () => {
        const getById = render(<Todo />);
        const firstTask = getById.container.querySelector('#todo-0');
        expect(firstTask).toBeInTheDocument();
        expect(firstTask).toBeChecked();
    });
})