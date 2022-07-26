import {render} from "@testing-library/react";
import FilterButton from "./FilterButton";

describe("Basic rendering of Filter Button", () => {
    it("Should render Button to filter all tasks", () => {
        const {getByText} = render(<FilterButton />);
        const allTasksBtn = getByText("all");
        expect(allTasksBtn).toBeInTheDocument();
        expect(allTasksBtn).not.toBeDisabled();
    })
})