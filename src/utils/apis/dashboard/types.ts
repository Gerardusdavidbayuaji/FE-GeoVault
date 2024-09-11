interface Dataset {
  feature_id: number;
  file_name: string;
  type: string;
  download: string;
  wms: string;
  bbws: string;
  ws: string;
  source: string;
  date: string;
  size: string;
  status_qc: string;
  hasil_qc: string;
}

interface AllData {
  curah_hujan: number;
  irigasi: number;
  jalan: number;
  ladang: number;
  pemanfaatan: number;
  pemukiman: number;
  perkebunan: number;
  sawah: number;
  sungai: number;
  toponim: number;
}

interface DataEntry {
  id: number;
  title: string;
  normal: number;
  siaga: number;
  waspada: number;
  total_data: number;
  datasets: Dataset[];
}

export interface SampleData {
  data: DataEntry[];
  all_data: AllData;
}

interface Month {
  id: number;
  month: string;
}

interface Year {
  id: number;
  year: number;
}

interface RiverArea {
  id: number;
  ws: string;
}

interface BBWS {
  id: number;
  bbws: string;
}

interface Source {
  id: number;
  data_source: string;
}

interface SpatialData {
  id: number;
  data_spasial: string;
}

interface Basemap {
  id: number;
  jenis: string;
  layer_basemap: string;
}

export interface FilterData {
  bulan: Month[];
  tahun: Year[];
  wilayah_sungai: RiverArea[];
  bbws: BBWS[];
  source: Source[];
  all_data: SpatialData[];
  basemap: Basemap[];
}
