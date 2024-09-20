import CardParameter from "@/components/CardParameter";
import Download from "@/components/Download";
import Basemap from "@/components/Basemap";
import { useState } from "react";

const DashAdmin = () => {
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([]);

  const handleDatasetSelect = (datasetName: string) => {
    setSelectedDatasets((prev) => {
      if (prev.includes(datasetName)) {
        return prev.filter((name) => name !== datasetName);
      }
      return [...prev, datasetName];
    });
  };

  return (
    <div className="w-full min-h-0 flex flex-col">
      <div className="flex-1 flex m-4 gap-4">
        <Download onDatasetSelect={handleDatasetSelect} />
        <div className="w-full flex flex-col space-y-2">
          <CardParameter />
          <Basemap selectedDatasets={selectedDatasets} />
        </div>
      </div>
    </div>
  );
};

export default DashAdmin;
