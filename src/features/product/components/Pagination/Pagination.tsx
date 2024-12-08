import "./Pagination.css";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const generatePageNumbers = () => {
    const pageNumbers: (number | string)[] = [];

    if (currentPage > 3) pageNumbers.push(1);

    if (currentPage > 4) pageNumbers.push("...");

    for (
      let i = Math.max(2, currentPage - 2);
      i <= Math.min(totalPages - 1, currentPage + 2);
      i++
    ) {
      pageNumbers.push(i);
    }

    if (currentPage < totalPages - 3) pageNumbers.push("...");

    if (currentPage < totalPages - 2) pageNumbers.push(totalPages);

    return pageNumbers;
  };

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const handlePageClick = (page: number | string) => {
    if (typeof page === "number") {
      onPageChange(page);
    }
  };

  return (
    <div className="pagination">
      <button onClick={handlePrevious} disabled={currentPage === 1}>
        Anterior
      </button>
      {generatePageNumbers().map((page, index) =>
        typeof page === "number" ? (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ) : (
          <span key={index} className="dots">
            {page}
          </span>
        )
      )}
      <button onClick={handleNext} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};
