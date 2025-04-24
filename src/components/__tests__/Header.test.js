import Header from "../Header";
import { render,screen } from "@testing-library/react"
import appStore from "../../utils/appStore"
import {Provider} from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";


it("Should render header component with a login button",()=>{

    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>)
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button");
    expect(loginButton).toBeInTheDocument();

})