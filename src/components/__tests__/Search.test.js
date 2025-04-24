import { fireEvent, render,screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/resListmockData.json"
import { act } from "react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        }
    })
});

it("Should load Search button in Body component",async()=>{
  
    await act(async()=>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>));

    const searchBtn = screen.getByRole("button",{name:"Search"});
    expect(searchBtn).toBeInTheDocument();

});

it("Should load Search button in Body component",async()=>{
  
    await act(async()=>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>));

    const searchBtn = screen.getByRole("button",{name:"Search"});
    expect(searchBtn).toBeInTheDocument();

});

it("Should Search the items on input",async()=>{
  
    await act(async()=>render(
    <BrowserRouter>
    <Body/>
    </BrowserRouter>));

    const searchBtn = screen.getByRole("button",{name:"Search"});
    const searchInput=screen.getByTestId("searchInput");

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(12);

    fireEvent.change(searchInput,{target:{value:"ma"}});
    fireEvent.click(searchBtn);

    const cardsAfterSearch=screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(2);

});