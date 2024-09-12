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

interface AllDataEntry {
  id: number;
  jenis_data: string;
  total_data: number;
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
  all_data: AllDataEntry[];
}

interface Month {
  id: number;
  value: string;
  label: string;
}

interface Year {
  id: number;
  value: string;
  label: string;
}

interface RiverArea {
  id: number;
  value: string;
  label: string;
}

interface BBWS {
  id: number;
  value: string;
  label: string;
}

interface Source {
  id: number;
  value: string;
  label: string;
}

interface SpatialData {
  id: number;
  value: string;
  label: string;
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
