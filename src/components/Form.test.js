import {render} from "@testing-library/react";
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

    })
})