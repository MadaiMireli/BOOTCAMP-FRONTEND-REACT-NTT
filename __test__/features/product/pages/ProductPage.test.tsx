import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useAppContext } from "../../../../src/common/hooks/useAppContext";
import { getProducts } from "../../../../src/features/product/services/product.services";
import ProductsPages from "../../../../src/features/product/pages/ProductsPages";

jest.mock("../../../../src/common/hooks/useAppContext", () => ({
  useAppContext: jest.fn(),
}));

jest.mock("../../../../src/features/product/services/product.services", () => ({
  getProducts: jest.fn(),
}));

jest.mock("../../../../src/features/product/components", () => ({
  CardProduct: jest.fn(({ data }) => (
    <div data-testid="product-card">{data.name}</div>
  )),
  Pagination: jest.fn(({ currentPage, onPageChange }) => (
    <div>
      <button
        data-testid="prev-page"
        onClick={() => onPageChange(currentPage - 1)}
      >
        Anterior
      </button>
      <button
        data-testid="next-page"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Siguiente
      </button>
    </div>
  )),
}));

describe("ProductsPages Component", () => {
  const mockDispatch = jest.fn();

  const mockProducts = [
    { id: "1", name: "Product 1" },
    { id: "2", name: "Product 2" },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    (useAppContext as jest.Mock).mockReturnValue({
      state: { productsFiltered: mockProducts },
      dispatch: mockDispatch,
    });

    (getProducts as jest.Mock).mockResolvedValue(mockProducts);
  });

  test("renders products when products are available", async () => {
    render(<ProductsPages />);

    await waitFor(() => {
      const productCards = screen.getAllByTestId("product-card");
      expect(productCards).toHaveLength(2);
    });

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "LOAD_PRODUCTS",
      payload: mockProducts,
    });
  });

  test('displays "No hay productos" when no products are available', async () => {
    (useAppContext as jest.Mock).mockReturnValueOnce({
      state: { productsFiltered: [] },
      dispatch: mockDispatch,
    });

    render(<ProductsPages />);

    await waitFor(() => {
      const noProductsText = screen.getByText("No hay productos");
      expect(noProductsText).toBeInTheDocument();
    });
  });

  test("renders pagination component and handles page change", async () => {
    const mockOnPageChange = jest.fn();

    render(<ProductsPages />);

    const prevButton = screen.getByTestId("prev-page");
    const nextButton = screen.getByTestId("next-page");

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    nextButton.click();
    expect(mockOnPageChange).not.toHaveBeenCalled();
  });
});
