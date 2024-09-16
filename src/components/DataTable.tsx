import { useState } from "react";

import { paginationDatas } from "@/utils/apis/dashboard";
import Pagination from "./Pagination";

const DataTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  const currentPageData = paginationDatas.find(
    (page) => page.currentPage === currentPage
  );

  if (!currentPageData) {
    return (
      <div>Upss, tidak ada data yang tersedia untuk halaman saat ini.</div>
    );
  }

  const currentItems = currentPageData.data;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="grid grid-cols-9 text-sm font-medium p-5 bg-[#d5eff7] text-[#171615] rounded-t-md">
        <div>Nama Data</div>
        <div>Tipe Data</div>
        <div>BBWS</div>
        <div>WS</div>
        <div>Sumber</div>
        <div>Tanggal</div>
        <div>Ukuran</div>
        <div>Status QC</div>
        <div>Hasil QC</div>
      </div>
      <div className="flex-grow">
        {currentItems.map((dataset) => (
          <div
            key={dataset.feature_id}
            className="grid grid-cols-9 text-xs font-normal"
          >
            <div className="py-3.5 border-b border-[#d5eff7]">
              {dataset.file_name}
            </div>
            <div className="py-3.5 border-b border-[#d5eff7]">
              {dataset.type}
            </div>
            <div className="py-3.5 border-b border-[#d5eff7]">
              {dataset.bbws}
            </div>
            <div className="py-3.5 border-b border-[#d5eff7]">{dataset.ws}</div>
            <div className="py-3.5 border-b border-[#d5eff7]">
              {dataset.source}
            </div>
            <div className="py-3.5 border-b border-[#d5eff7]">
              {dataset.date}
            </div>
            <div className="py-3.5 border-b border-[#d5eff7]">
              {dataset.size}
            </div>
            <div className="py-3.5 border-b border-[#d5eff7]">
              {dataset.status_qc}
            </div>
            <div className="py-3.5 border-b border-[#d5eff7]">
              {dataset.hasil_qc}
            </div>
          </div>
        ))}
      </div>
      <Pagination
        totalItems={paginationDatas[0].totalItems}
        itemPerPage={itemsPerPage}
        currentPage={currentPage}
        totalPages={paginationDatas[0].totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DataTable;
