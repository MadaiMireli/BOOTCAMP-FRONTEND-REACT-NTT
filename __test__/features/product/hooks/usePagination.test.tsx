import { act } from "react";
import { usePagination } from "../../../../src/features/product/hooks/usePagination";
import { renderHook } from "@testing-library/react";

describe("usePagination hook", () => {
  test("should initialize with the provided initial page", () => {
    const { result } = renderHook(() => usePagination(1));

    expect(result.current.currentPage).toBe(1);
  });

  test("should update the page when handlePageChange is called", () => {
    const { result } = renderHook(() => usePagination(1));

    act(() => {
      result.current.handlePageChange(2);
    });

    expect(result.current.currentPage).toBe(2);
  });

  test("should update the page correctly after multiple page changes", () => {
    const { result } = renderHook(() => usePagination(1));

    act(() => {
      result.current.handlePageChange(2);
    });
    expect(result.current.currentPage).toBe(2);

    act(() => {
      result.current.handlePageChange(3);
    });
    expect(result.current.currentPage).toBe(3);
  });

  test("should keep the same page if the same page number is passed to handlePageChange", () => {
    const { result } = renderHook(() => usePagination(1));

    act(() => {
      result.current.handlePageChange(1);
    });

    expect(result.current.currentPage).toBe(1);
  });
});
