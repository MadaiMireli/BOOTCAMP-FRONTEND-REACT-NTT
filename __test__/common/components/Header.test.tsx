import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import { MemoryRouter, useNavigate } from "react-router";
import { Header } from '../../../src/common/components/Header/Header';
import { useAppContext } from "../../../src/common/hooks/useAppContext";
import { getCategories } from "../../../src/features/product/services";

jest.mock("../../../src/common/hooks/useAppContext", () => ({
  useAppContext: jest.fn(),
}));
jest.mock("../../../src/features/product/services", () => ({
  getCategories: jest.fn(),
}));


jest.mock("react-router", () => ({
  ...jest.requireActual("react-router"),
  useNavigate: jest.fn(),
}));

describe("Header Component", () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  const mockState = {
    cart: [{ id: 1, quantity: 2 }, { id: 2, quantity: 3 }],
  };

  beforeEach(() => {
    (useAppContext as jest.Mock).mockReturnValue({
      state: mockState,
      dispatch: mockDispatch,
    });

    (getCategories as jest.Mock).mockResolvedValue([
      { id: "1", name: "Category 1" },
      { id: "2", name: "Category 2" },
    ]);

    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Header component correctly", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
    });
  
  
    const cartButton = screen.getByRole("button", { name: /shopping cart/i });
    expect(cartButton).toBeInTheDocument();
  
    await act(async () => {
      fireEvent.click(cartButton);
    });
  
    expect(mockNavigate).toHaveBeenCalledWith("/cart");
  });
  

  it("calls the dispatch function when a search query is entered", async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
    });

    const searchInput = screen.getByPlaceholderText("Buscar productos...");
    await act(async () => {
      fireEvent.keyUp(searchInput, { target: { value: "Test Query" } });
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "FILTERED_PRODUCTS",
      payload: "Test Query",
    });
  });
});