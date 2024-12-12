import { useState } from "react";

// este hook deberia recibir la data y estructurarla para que genere el paginado, esto no es un hook de paginado
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
