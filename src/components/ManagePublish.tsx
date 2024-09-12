import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import FormBalaiSelect from "./FormBalaiSelect";
import FormDataSelect from "./FormDataSelect";
import FormMonthSelect from "./FormMonthSelect";
import FormRiverSelect from "./FormRiverSelect";
import FormSourceSelect from "./FormSourceSelect";
import FormYearSelect from "./FormYearsSelect";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Pagination from "./Pagination";

const geodatabases = [
  {
    file_name: "GarisPantai.zip",
    data: "Garis Pantai",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "TitikGenangan.zip",
    data: "Titik Genangan",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "GenanganRob.zip",
    data: "Genangan Rob",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "TitikKebakaran.zip",
    data: "Titik Kebakaran",
    bbws: "BBWS Pamali Juana",
    ws: "Jratunseluna",
    source: "Balai",
    tanggal: "20/1/2024",
    size: "200 mb",
    status_qc: "Diterima",
    hasil_qc: "Update",
  },
  {
    file_name: "BatasKecamatan.zip",
    data: "Batas Kecamatan",
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
    file_name: "PenggunaanLahan.tif",
    data: "Penggunaan Lahan",
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

const ManagePublish = () => {
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
                    <DialogTitle>Filter</DialogTitle>
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
                    <Button className="bg-[#00b7cc] hover:bg-[#00b7cc] text-sm font-normal">
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

              <AlertDialog>
                <AlertDialogTrigger>
                  <Button className="bg-[#00527a] hover:bg-[#00527a] w-[125px] h-7 rounded-md flex items-center justify-center">
                    <div className="flex gap-2 items-center justify-center">
                      <img
                        src="/assets/publish-icon.png"
                        className="w-4 h-auto"
                      />
                      <p className="font-normal text-xs text-white">Upload</p>
                    </div>
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-sm font-medium">
                      Upload Data
                    </AlertDialogTitle>
                    <div className="grid w-full items-center">
                      <Input
                        id="picture"
                        type="file"
                        className="text-xs font-normal"
                      />
                    </div>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction>Upload</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow items-center justify-center">
        <div className="w-full">
          <div className="flex-grow">
            <Table>
              <TableHeader className="bg-[#d4eff7] text-sm font-medium text-[#949494] rounded-md">
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

export default ManagePublish;
