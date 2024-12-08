import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Pagination } from "../../../../src/features/product/components/Pagination/Pagination";

describe("Pagination Component", () => {
  const mockOnPageChange = jest.fn();

  const defaultProps = {
    currentPage: 5,
    totalItems: 190,
    itemsPerPage: 10,
    onPageChange: mockOnPageChange,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders the pagination buttons correctly", () => {
    render(<Pagination {...defaultProps} />);

    const previousButton = screen.getByText("Anterior");
    const nextButton = screen.getByText("Siguiente");
    const pageButtons = screen.getAllByRole("button");

    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
    expect(pageButtons.length).toBeGreaterThanOrEqual(5); 
  });

  test("disables the previous button when on the first page", () => {
    render(<Pagination {...defaultProps} currentPage={1} />);

    const previousButton = screen.getByText("Anterior");
    expect(previousButton).toBeDisabled();
  });

  test("disables the next button when on the last page", () => {
    render(<Pagination {...defaultProps} currentPage={19} />);

    const nextButton = screen.getByText("Siguiente");
    expect(nextButton).toBeDisabled();
  });

  test("calls onPageChange with correct page when a page number is clicked", () => {
    render(<Pagination {...defaultProps} />);

    const pageNumber = screen.getByText("4");
    fireEvent.click(pageNumber);

    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  test('shows ellipses ("...") when there are skipped pages', () => {
    render(<Pagination {...defaultProps} currentPage={5} />);
  
    const dots = screen.queryAllByText('...');
    expect(dots.length).toBeGreaterThan(0);
  });


  test('calls onPageChange with correct page when "Anterior" button is clicked', () => {
    render(<Pagination {...defaultProps} />);

    const previousButton = screen.getByText("Anterior");
    fireEvent.click(previousButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(4);
  });

  test('calls onPageChange with correct page when "Siguiente" button is clicked', () => {
    render(<Pagination {...defaultProps} />);

    const nextButton = screen.getByText("Siguiente");
    fireEvent.click(nextButton);

    expect(mockOnPageChange).toHaveBeenCalledWith(6);
  });
});
