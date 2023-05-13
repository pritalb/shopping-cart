import { render } from '@testing-library/react';
import Navbar from './Navbar.js';

describe("Navbar has all required components", () => {
    test("Navbar has Logo", () => {
        const { container } = render(<Navbar />);

        expect(container.querySelector('.logo-container')).toBeInTheDocument();
    });

    test("Navbar has Home page button", () => {
        const { container } = render(<Navbar />);

        expect(container.querySelector('.home-page-button')).toBeInTheDocument();
    });

    test("Navbar has Products page button", () => {
        const { container } = render(<Navbar />);

        expect(container.querySelector('.products-page-button')).toBeInTheDocument();
    });

    test("Navbar has About Us page button", () => {
        const { container } = render(<Navbar />);

        expect(container.querySelector('.about-us-page-button')).toBeInTheDocument();
    });

    test("Navbar has Contact page button", () => {
        const { container } = render(<Navbar />);

        expect(container.querySelector('.contact-page-button')).toBeInTheDocument();
    });

    test("Navbar has Cart page button", () => {
        const { container } = render(<Navbar />);

        expect(container.querySelector('.cart-page-button')).toBeInTheDocument();
    });
})