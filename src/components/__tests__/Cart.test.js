import { fireEvent, render,screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "./../mocks/resMenumockData.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appstore from "../../utils/appStore"
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";


global.fetch = jest.fn(()=>
    Promise.resolve({
        json: ()=> Promise.resolve(MOCK_DATA),
    })
);



it("Should load the restaurnt menu list",async()=>{
    await act(async()=> render(
        <BrowserRouter>
            <Provider store={appstore}>
                <Header/>
                <RestaurantMenu/>
                <Cart />
            </Provider>
        </BrowserRouter>));
    
    const accordionHeader = screen.getByText("Baked Items(2)");
    fireEvent.click(accordionHeader);

    const items=screen.getAllByTestId("menuItem");
    expect(items.length).toBe(2);
    expect(screen.getByText("Cart - (0 -Items)")).toBeInTheDocument();

    const buttons = screen.getAllByRole("button",{name:"Add +"});
    fireEvent.click(buttons[0]);

    expect(screen.getByText("Cart - (1 -Items)")).toBeInTheDocument();

    fireEvent.click(buttons[1]);
    
    expect(screen.getByText("Cart - (2 -Items)")).toBeInTheDocument();
    expect(screen.getAllByTestId("menuItem").length).toBe(4);

    fireEvent.click(screen.getByRole("button",{name:"Clear cart"}));
    
    expect(screen.getAllByTestId("menuItem").length).toBe(2);
    expect(screen.getByText("Cart is empty Please add items!!")).toBeInTheDocument();

})