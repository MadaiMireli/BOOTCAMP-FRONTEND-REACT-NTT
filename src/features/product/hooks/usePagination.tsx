import { useState } from "react";

export const usePagination = (initPage: number) => {
  const [currentPage, setCurrentPage] = useState(initPage);
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  return {
    currentPage,
    handlePageChange,
  };
};
