import { useState } from "react";

interface Dataset {
  feature_id: number;
  file_name: string;
  store: string;
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

interface DownloadCheckboxProps {
  datasets: Dataset[];
  onLayerChange: (layer: Dataset, checked: boolean) => void;
}

const DownloadCheckbox: React.FC<DownloadCheckboxProps> = ({
  datasets,
  onLayerChange,
}) => {
  const [checkedItems, setCheckedItems] = useState<{ [id: number]: boolean }>(
    {}
  );

  const handleCheckboxChange = (dataset: Dataset, isChecked: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [dataset.feature_id]: isChecked,
    }));
    onLayerChange(dataset, isChecked);
  };

  return (
    <div className="p-4">
      {datasets.map((dataset) => (
        <div key={dataset.feature_id} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={`checkbox-${dataset.feature_id}`}
            onChange={(e) => handleCheckboxChange(dataset, e.target.checked)}
          />
          <label htmlFor={`checkbox-${dataset.feature_id}`} className="text-sm">
            {dataset.file_name}
          </label>
          {checkedItems[dataset.feature_id] && (
            <a
              href={dataset.download}
              download
              className="ml-2 text-blue-500 underline"
            >
              Download
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default DownloadCheckbox;
