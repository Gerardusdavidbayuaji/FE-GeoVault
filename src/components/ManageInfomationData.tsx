import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import FormBalaiSelect from "./FormBalaiSelect";
import FormDataSelect from "./FormDataSelect";
import FormMonthSelect from "./FormMonthSelect";
import FormRiverSelect from "./FormRiverSelect";
import FormSourceSelect from "./FormSourceSelect";
import FormYearSelect from "./FormYearsSelect";
import Pagination from "./Pagination";

const geodatabases = [
  {
    file_name: "Irigasi.zip",
    data: "Irigasi",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "TitikBanjir.zip",
    data: "Titik Banjir",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "GenanganBanjir.zip",
    data: "Genangan Banjir",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "Sungai.zip",
    data: "Sungai",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "BatasDesa.zip",
    data: "Batas Desa",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "TitikEmbung.zip",
    data: "Titik Embung",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "BatasKabupaten.zip",
    data: "Batas Kabupaten",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "TutupanLahan.tif",
    data: "Tutupan Lahan",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "CurahHujan.tif",
    data: "Curah Hujan",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
];

const ManageInformationData = () => {
  return (
    <div>
      <div className="h-14 flex items-center justify-center">
        <div className="w-full">
          <div className="flex justify-between">
            <div className="flex items-center justify-center gap-1">
              <div className="flex w-60 items-center">
                <Input
                  type="text"
                  placeholder="Cari File"
                  className="rounded-none rounded-l-md h-7 text-xs font-medium"
                />
                <Button className="bg-[#00b7cc] hover:bg-[#00b7cc] rounded-none rounded-r-md h-7 w-8 p-1">
                  <img src="assets/search-icon.png" className="w-3 h-auto" />
                </Button>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#00b7cc] hover:bg-[#00b7cc] rounded-md h-7 w-8 p-1">
                    <img src="assets/filter.png" className="w-3 h-auto" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="text-[#00527a]">Filter</DialogTitle>
                  </DialogHeader>
                  <div className="grid grid-cols-2 gap-2">
                    <FormMonthSelect />
                    <FormYearSelect />
                  </div>
                  <FormBalaiSelect />
                  <FormRiverSelect />
                  <FormDataSelect />
                  <FormSourceSelect />

                  <DialogFooter>
                    <Button className="bg-white outline outline-[1px] outline-[#00b7cc] text-[#00b7cc] hover:bg-white text-sm font-normal">
                      Reset
                    </Button>
                    <Button className="bg-[#00527a] hover:bg-[#00527a] text-sm font-normal">
                      Filter
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <div className="flex gap-1">
              <FormYearSelect />
              <FormMonthSelect />
              <FormRiverSelect />
              <FormSourceSelect />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow items-center justify-center">
        <div className="w-full">
          <div className="flex-grow">
            <Table>
              <TableHeader className="bg-[#d4eff7] text-sm font-medium text-[#949494]">
                <TableRow>
                  <TableHead className="text-left">File Name</TableHead>
                  <TableHead className="text-left">Data</TableHead>
                  <TableHead className="text-left">B/BWS</TableHead>
                  <TableHead className="text-left">WS</TableHead>
                  <TableHead className="text-left">Source</TableHead>
                  <TableHead className="text-left">Date</TableHead>
                  <TableHead className="text-left">Size</TableHead>
                  <TableHead className="text-left">Status QC</TableHead>
                  <TableHead className="text-left">Hasil QC</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-xs font-normal">
                {geodatabases.map((database) => (
                  <TableRow key={database.file_name}>
                    <TableCell className="text-[#00527a]">
                      {database.file_name}
                    </TableCell>
                    <TableCell>{database.data}</TableCell>
                    <TableCell>{database.bbws}</TableCell>
                    <TableCell>{database.ws}</TableCell>
                    <TableCell>{database.source}</TableCell>
                    <TableCell>{database.tanggal}</TableCell>
                    <TableCell>{database.size}</TableCell>
                    <TableCell>{database.status_qc}</TableCell>
                    <TableCell>{database.hasil_qc}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
      <div className="h-12 flex items-end justify-center">
        <Pagination />
      </div>
    </div>
  );
};

export default ManageInformationData;
