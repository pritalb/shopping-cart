import { render, } from '@testing-library/react';
import Footer from './Footer';

describe("Footer has all the necessary components", () => {
    test("Footer has links", () => {
        const { container } = render(<Footer />);

        expect(container.querySelector('.footer-links')).toBeInTheDocument();
    });

    test("Footer has language options", () => {
        const { container } = render(<Footer />);

        expect(container.querySelector('.footer-languages')).toBeInTheDocument();
    });
})