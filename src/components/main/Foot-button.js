import { useState } from "react";

const FootButtons = ({ currentPage, setCurrentPage }) => {
  const totalPages = 40;

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const renderPageButtons = () => {
    const buttons = [];
    const visiblePages = 4;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(startPage + visiblePages - 1, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          className={`customers__foot-btn ${i === currentPage ? "active" : ""}`}
          key={i}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="customers__foot-actions">
      <button className="customers__foot-btn" onClick={handlePrevClick}>
        {"<"}
      </button>
      {currentPage > 4 && (
        <>
          <button
            className={`customers__foot-btn ${
              currentPage === 1 ? "active" : ""
            }`}
            onClick={() => setCurrentPage(1)}
          >
            1
          </button>
          <span className="customers__foot-dots">...</span>
        </>
      )}
      {renderPageButtons()}
      {totalPages > 4 && currentPage < totalPages - 3 && (
        <>
          <span className="customers__foot-dots">...</span>
          <button
            className={`customers__foot-btn ${
              currentPage === totalPages ? "active" : ""
            }`}
            onClick={() => setCurrentPage(totalPages)}
          >
            {totalPages}
          </button>
        </>
      )}
      <button className="customers__foot-btn sm" onClick={handleNextClick}>
        {">"}
      </button>
    </div>
  );
};

export default FootButtons;
