import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import { promotedRestaurants } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardmockData.json";
import "@testing-library/jest-dom";

const PromotedRestaurantCard = promotedRestaurants(RestaurantCard);

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Milano Ice Creams");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
    render(<PromotedRestaurantCard resData={MOCK_DATA} />);

    const promoted = screen.getByText("Promoted");
  
    expect(promoted).toBeInTheDocument();
  });