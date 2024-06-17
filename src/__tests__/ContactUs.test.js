import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ContactUs from "../components/ContactUs";

describe("Gp for Load Contact Us Component", () => {
  test("Should Load Contact Us Component ", () => {
    // rendering component into jsdoms
    render(<ContactUs />);

    const heading = screen.getByRole("heading");

    //Assertion
    expect(heading).toBeInTheDocument();
  });

  test("Should Load Button  in contactus ", () => {
    // rendering component into jsdoms
    render(<ContactUs />);
    const button = screen.getByText("Contact Us");

    //Assertion
    expect(button).toBeInTheDocument();
  });
  test("Should Load Input  in contactus ", () => {
    // rendering component into jsdoms
    render(<ContactUs />);

    const inputname = screen.getByPlaceholderText("Enter User Name");
    //Assertion
    expect(inputname).toBeInTheDocument();
  });

  test("Should Load Two Input boxes  in contactus ", () => {
    // rendering component into jsdoms
    render(<ContactUs />);
    const inputdata = screen.getAllByRole("textbox");
    //Assertion
    expect(inputdata.length).toBe(2);
  });
});
