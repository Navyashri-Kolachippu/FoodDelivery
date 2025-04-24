import { render,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";

test("Should load Contact us component",()=>{
   render(<Contact/>);

   const heading=screen.getByRole("heading");
   expect(heading).toBeInTheDocument();
});

test("Should load button in the component",()=>{
    render(<Contact/>);
 
    const button=screen.getByText("Submit");
    expect(button).toBeInTheDocument();
 });

 test("Should load input name text in the component",()=>{
    render(<Contact/>);
 
    const inputName=screen.getByPlaceholderText("name")
    expect(inputName).toBeInTheDocument();
 });

 it("Should load 2 input boxes in the component",()=>{
    render(<Contact/>);
 
    const inputBoxes=screen.getAllByRole("textbox")
    expect(inputBoxes.length).toBe(2);
 });