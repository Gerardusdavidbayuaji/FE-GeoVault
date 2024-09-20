import { useState, useEffect } from "react";

import { ChevronRight, ChevronDown } from "lucide-react";
import { sampleDatas } from "@/utils/apis/dashboard";
import { Checkbox } from "@/components/ui/checkbox";
import FormBalaiSelect from "./FormBalaiSelect";
import FormMonthSelect from "./FormMonthSelect";
import FormRiverSelect from "./FormRiverSelect";
import FormYearSelect from "./FormYearsSelect";
import Alert from "./AlertDialog";

interface DownloadProps {
  onDatasetSelect: (datasetName: string) => void;
}

const Download = ({ onDatasetSelect }: DownloadProps) => {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);
  const [selectedDatasets, setSelectedDatasets] = useState<string[]>([]);

  useEffect(() => {
    if (sampleDatas[0].data.length >= 3) {
      setExpandedIds([sampleDatas[0].data[2].id]);
    }
  }, []);

  const handleTogglePDA = (id: number) => {
    if (expandedIds.includes(id)) {
      setExpandedIds(expandedIds.filter((expandedId) => expandedId !== id));
    } else {
      setExpandedIds([...expandedIds, id]);
    }
  };

  const handleDatasetSelect = (datasetName: string) => {
    setSelectedDatasets((prev) => {
      if (prev.includes(datasetName)) {
        return prev.filter((name) => name !== datasetName);
      }
      return [...prev, datasetName];
    });
    onDatasetSelect(datasetName);
  };

  const handleDownload = () => {
    selectedDatasets.forEach((dataset) => {
      const data = sampleDatas[0].data
        .flatMap((d) => d.datasets)
        .find((ds) => ds.file_name === dataset);
      if (data) {
        window.open(data.download);
      }
    });
  };

  return (
    <div className="w-72 h-full flex flex-col rounded-lg shadow-full p-2">
      <h3 className="text-base font-bold text-black flex text-center justify-center my-[3px]">
        Data GIS
      </h3>
      <div className="grid grid-cols-2 gap-2">
        <FormMonthSelect />
        <FormYearSelect />
      </div>
      <div className="my-2 space-y-2">
        <FormBalaiSelect />
        <FormRiverSelect />
      </div>

      <div className="mb-2 space-y-2 flex-grow h-2 overflow-y-scroll p-2">
        <h4 className="font-bold text-xs mb-1">Pilih Data</h4>
        {sampleDatas[0].data.map((dataEntry) => (
          <div key={dataEntry.id} className="space-y-1">
            <div
              className="h-7 flex items-center justify-between w-full rounded-md p-2 hover:bg-[#f2f2f2] transition duration-75 delay-50"
              onClick={() => handleTogglePDA(dataEntry.id)}
            >
              <h1 className="font-normal text-xs">{dataEntry.title}</h1>
              {expandedIds.includes(dataEntry.id) ? (
                <ChevronDown className="w-3 h-auto" />
              ) : (
                <ChevronRight className="w-3 h-auto" />
              )}
            </div>

            {expandedIds.includes(dataEntry.id) && (
              <ul className="pl-3 ml-2 font-normal text-xs border-l-2 border-[#f2f2f2] space-y-1 transition-max-height duration-500 ease-in-out overflow-hidden">
                {dataEntry.datasets.map((dataset) => (
                  <li
                    key={dataset.feature_id}
                    className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75"
                  >
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={dataset.file_name}
                        checked={selectedDatasets.includes(dataset.file_name)}
                        onCheckedChange={() =>
                          handleDatasetSelect(dataset.file_name)
                        }
                      />
                      <label
                        htmlFor={dataset.file_name}
                        className="font-normal text-xs"
                      >
                        {dataset.file_name}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Alert
        title="Apakah Anda yakin?"
        description="Ini akan mengunduh data dan menyimpan salinannya di perangkat
        Anda."
        onAction={handleDownload}
        onActionTitle="Download"
        style="bg-[#00527a] hover:bg-[#00527a]/80 w-full h-10 rounded-md"
      >
        <div className="flex gap-2 items-center justify-center">
          <img src="/assets/download-icon.png" className="w-6 h-auto" />
          <p className="font-normal text-sm text-white">Download</p>
        </div>
      </Alert>
    </div>
  );
};

export default Download;
