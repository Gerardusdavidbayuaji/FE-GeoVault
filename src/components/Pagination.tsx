import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationProps {
  totalItems: number;
  itemPerPage: number;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = (props: PaginationProps) => {
  const { totalItems, itemPerPage, currentPage, totalPages, onPageChange } =
    props;

  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    } else {
      onPageChange(1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="text-xs font-normal text-[#00527a]">
          {`Menampilkan ${
            itemPerPage * (currentPage - 1) + 1
          } hingga ${Math.min(
            itemPerPage * currentPage,
            totalItems
          )} dari ${totalItems} entri`}
        </div>
        <div className="text-xs font-normal">
          <PaginationUI className="text-xs font-normal">
            <PaginationContent className="text-[#00527a]">
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  className="text-xs font-normal h-7 w-auto"
                  onClick={handlePrevious}
                />
              </PaginationItem>
              {Array.from({ length: totalPages }, (_, i) => (
                <PaginationItem key={i + 1}>
                  <PaginationLink
                    href="#"
                    className={`text-xs font-normal h-7 w-7 ${
                      currentPage === i + 1
                        ? "bg-[#00527a] text-white"
                        : "hover:bg-[#00527a] hover:text-white"
                    }`}
                    onClick={() => handlePageClick(i + 1)}
                  >
                    {i + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  className="text-xs font-normal h-7 w-auto"
                  onClick={handleNext}
                />
              </PaginationItem>
            </PaginationContent>
          </PaginationUI>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
