import {render} from '@testing-library/react';
import Home from './Home';

describe("Home Component renders correctly", () => {
    test("Home has a Heading", () => {
        const { container } = render(<Home />);

        expect(container.querySelector('.home-page-heading')).toBeInTheDocument();
    });

    test("Home has a Background Image", () => {
        const {container} = render(<Home />);

        expect(container.querySelector('.page-background')).toBeInTheDocument();
    });

    test("Home has a Navbar", () => {
        const {container} = render(<Home />);

        expect(container.querySelector('.navbar')).toBeInTheDocument();
    });

    test("Home has a Footer", () => {
        const {container} = render(<Home />);

        expect(container.querySelector('.footer')).toBeInTheDocument();
    });
})