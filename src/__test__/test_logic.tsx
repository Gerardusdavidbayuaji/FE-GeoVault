import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

const DataTable = () => {
  return (
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
  );
};

export default DataTable;
