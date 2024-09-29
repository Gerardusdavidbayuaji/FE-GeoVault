import { useState } from "react";
import Basemap from "./test_basemap";
import DownloadCheckbox from "./test_download";
import { sampleDatas } from "./test-sampel-data";

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

const TestingApp: React.FC = () => {
  //   const [selectedLayers, setSelectedLayers] = useState<Dataset[]>([]);

  //   const handleLayerChange = (dataset: Dataset, checked: boolean) => {
  //     if (checked) {
  //       setSelectedLayers([...selectedLayers, dataset]);
  //     } else {
  //       setSelectedLayers(
  //         selectedLayers.filter(
  //           (layer) => layer.feature_id !== dataset.feature_id
  //         )
  //       );
  //     }
  //   };

  return (
    <div className="container">
      <Basemap />
    </div>
  );
};

export default TestingApp;
