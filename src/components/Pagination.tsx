import {
  Pagination as PaginationUI,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Pagination = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="text-xs font-normal text-[#00527a]">
            Showing 1 to 9 of 26 entries
          </div>
          <div className="text-xs font-normal">
            <PaginationUI className="text-xs font-normal">
              <PaginationContent className="text-[#00527a]">
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    className="text-xs font-normal h-7 w-auto"
                  />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#"
                    className="text-xs text-white font-normal bg-[#00527a] hover:bg-[#00527a] hover:text-white h-7 w-7"
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis className="text-xs font-normal" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    className="text-xs font-normal h-7 w-auto"
                  />
                </PaginationItem>
              </PaginationContent>
            </PaginationUI>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pagination;
