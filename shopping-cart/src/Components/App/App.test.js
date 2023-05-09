import { render, screen } from '@testing-library/react';
import App from './App';

describe("App has all the required pages", () => {
  test("App has Home Page Component", () => {
    const { container } = render(<App />);

    expect(container.querySelector('.home-page')).toBeInTheDocument();
  });

  test("App has Products Page Component", () => {
    const { container } = render(<App />);

    expect(container.querySelector('.products-page')).toBeInTheDocument();
  });

  test("App has About Us Page Component", () => {
    const { container } = render(<App />);

    expect(container.querySelector('.about-us-page')).toBeInTheDocument();
  });

  test("App has Contact Page Component", () => {
    const { container } = render(<App />);

    expect(container.querySelector('.contact-page')).toBeInTheDocument();
  });

  test("App has Cart Page Component", () => {
    const { container } = render(<App />);

    expect(container.querySelector('.cart-page')).toBeInTheDocument();
  });
})
