import {render} from "@testing-library/react";
import FilterButton from "./FilterButton";

describe("Basic rendering of Filter Button", () => {
    it("Should render Button to filter all tasks", () => {
        const {getByTestId} = render(<FilterButton />);
        const allTasksBtn = getByTestId('filter-btn');
        expect(allTasksBtn).toBeInTheDocument();
        expect(allTasksBtn).not.toBeDisabled();
    })
})