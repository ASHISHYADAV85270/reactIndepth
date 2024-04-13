import { render, screen } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

// this is unit testing

describe("for button", () => {
  test("way 1 should load button  inside ContactUs component", () => {
    render(<ContactUs />); //@babel/preset-react

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument(); //@testing-library/jest-dom
  });

  test("way 2 should load button  inside ContactUs component", () => {
    render(<ContactUs />); //@babel/preset-react

    const button = screen.getByText("Submit");

    expect(button).toBeInTheDocument(); //@testing-library/jest-dom
  });
});

test("should load contact us component", () => {
  render(<ContactUs />); //@babel/preset-react

  const heading = screen.getByRole("heading");

  expect(heading).toBeInTheDocument(); //@testing-library/jest-dom
});

//for grouping test cases
describe("for input", () => {
  test(" should load input  inside ContactUs component", () => {
    render(<ContactUs />); //@babel/preset-react

    const input = screen.getByPlaceholderText("Enter User Name");

    expect(input).toBeInTheDocument(); //@testing-library/jest-dom
  });

  test(" should load all input  inside ContactUs component", () => {
    render(<ContactUs />); //@babel/preset-react

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes); // this is virtual DOM React Element Array
    expect(inputBoxes.length).toBe(2); //@testing-library/jest-dom
  });

  it(" should load all input  inside ContactUs component by other way", () => {
    render(<ContactUs />); //@babel/preset-react

    const inputBoxes = screen.getAllByRole("textbox");
    // console.log(inputBoxes); // this is virtual DOM React Element Array
    expect(inputBoxes.length).toBe(2); //@testing-library/jest-dom
  });
});
