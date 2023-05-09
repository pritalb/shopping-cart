import {render} from '@testing-library/react';
import Home from './Home';

describe("Home Component renders correctly", () => {
    
    test("Home has a Heading", () => {
        const {container} = render(<Home />);

        expect(container.querySelector('.heading')).toBeInTheDocument();
    })
})