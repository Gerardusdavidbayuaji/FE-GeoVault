import { useState } from "react";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { ChevronDown } from "lucide-react";

import {
  AlertDialogDescription,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialog,
} from "@/components/ui/alert-dialog";
import FormYearSelect from "./FormYearsSelect";
import FormBalaiSelect from "./FormBalaiSelect";
import FormRiverSelect from "./FormRiverSelect";
import FormMonthSelect from "./FormMonthSelect";
import { sampleDatas } from "@/utils/apis/dashboard";
import { SampleData } from "@/utils/apis/dashboard";

const Download = () => {
  const [isExpandedPDA, setIsExpandedPDA] = useState(false);
  const [isExpandedPCH, setIsExpandedPCH] = useState(false);
  const [isExpandedARR, setIsExpandedARR] = useState(true);
  const [isExpandedAWLR, setIsExpandedAWLR] = useState(false);

  const handleTogglePDA = () => {
    setIsExpandedPDA(!isExpandedPDA);
  };

  const handleTogglePCH = () => {
    setIsExpandedPCH(!isExpandedPCH);
  };

  const handleToggleARR = () => {
    setIsExpandedARR(!isExpandedARR);
  };

  const handleToggleAWLR = () => {
    setIsExpandedAWLR(!isExpandedAWLR);
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
        <div className="space-y-2 cursor-pointer">
          <div className="space-y-1">
            <div
              className="h-7 flex items-center justify-between w-full rounded-md p-2 hover:bg-[#f2f2f2] transition duration-75 delay-75"
              onClick={handleTogglePDA}
            >
              <h1 className="font-normal text-xs">Pos Duga Air (PDA)</h1>

              {isExpandedPDA ? (
                <ChevronDown className="w-3 h-auto" />
              ) : (
                <ChevronRight className="w-3 h-auto" />
              )}
            </div>
            {sampleDatas.data.map((dataEntry) => (
              <div
                className={`transition-max-height duration-300 ease-linear delay-200 overflow-hidden ${
                  isExpandedPDA ? "max-h-40" : "max-h-0"
                }`}
                key={dataEntry.feature_id}
              >
                <ul className="pl-3 ml-2 font-normal text-xs border-l-2 border-[#f2f2f2] space-y-1">
                  {dataEntry.datasets.map((dataset) => {
                    const { feature_id, file_name } = dataset;
                    return (
                      <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                        <div className="flex items-center space-x-2">
                          <Checkbox id={feature_id} />
                          <label
                            htmlFor={file_name}
                            className="font-normal text-xs"
                          >
                            {file_name}
                          </label>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <div
              className="h-7 flex items-center justify-between w-full rounded-md p-2 hover:bg-[#f2f2f2] transition duration-75 delay-75"
              onClick={handleTogglePCH}
            >
              <h1 className="font-normal text-xs">Pos Curah Hujan (PCH)</h1>

              {isExpandedPCH ? (
                <ChevronDown className="w-3 h-auto" />
              ) : (
                <ChevronRight className="w-3 h-auto" />
              )}
            </div>
            <div
              className={`transition-max-height duration-300 ease-linear delay-200 overflow-hidden ${
                isExpandedPCH ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="pl-3 ml-2 font-normal text-xs border-l-2 border-[#f2f2f2] space-y-1">
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="curah_hujan" />
                    <label
                      htmlFor="curah_hujan"
                      className="font-normal text-xs"
                    >
                      Curah Hujan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fase_tanam" />
                    <label htmlFor="fase_tanam" className="font-normal text-xs">
                      Fase Tanam
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="genangan_banjir" />
                    <label
                      htmlFor="genangan_banjir"
                      className="font-normal text-xs"
                    >
                      Genangan Banjir
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-1">
            <div
              className="h-7 flex items-center justify-between w-full rounded-md p-2 hover:bg-[#f2f2f2] transition duration-75 delay-75"
              onClick={handleToggleARR}
            >
              <h1 className="font-normal text-xs">ARR</h1>

              {isExpandedARR ? (
                <ChevronDown className="w-3 h-auto" />
              ) : (
                <ChevronRight className="w-3 h-auto" />
              )}
            </div>
            <div
              className={`transition-max-height duration-300 ease-in-out delay-200 overflow-hidden ${
                isExpandedARR ? "max-h-screen" : "max-h-0"
              }`}
            >
              <ul className="pl-3 ml-2 font-normal text-xs border-l-2 border-[#f2f2f2] space-y-1">
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="curah_hujan" />
                    <label
                      htmlFor="curah_hujan"
                      className="font-normal text-xs"
                    >
                      Curah Hujan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fase_tanam" />
                    <label htmlFor="fase_tanam" className="font-normal text-xs">
                      Fase Tanam
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="genangan_banjir" />
                    <label
                      htmlFor="genangan_banjir"
                      className="font-normal text-xs"
                    >
                      Genangan Banjir
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="genangan_rob" />
                    <label
                      htmlFor="genangan_rob"
                      className="font-normal text-xs"
                    >
                      Genangan Rob
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="history_banjir" />
                    <label
                      htmlFor="history_banjir"
                      className="font-normal text-xs"
                    >
                      History Banjir
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="penggunaan_lahan" />
                    <label
                      htmlFor="penggunaan_lahan"
                      className="font-normal text-xs"
                    >
                      Penggunaan Lahan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="tutupan_lahan" />
                    <label
                      htmlFor="tutupan_lahan"
                      className="font-normal text-xs"
                    >
                      Tutupan Lahan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sempadan_pantai" />
                    <label
                      htmlFor="sempadan_pantai"
                      className="font-normal text-xs"
                    >
                      Sempadan Pantai
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="sempadan_danau" />
                    <label
                      htmlFor="sempadan_danau"
                      className="font-normal text-xs"
                    >
                      Sempadan Danau
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="space-y-1">
            <div
              className="h-7 flex items-center justify-between w-full rounded-md p-2 hover:bg-[#f2f2f2] transition duration-75 delay-75"
              onClick={handleToggleAWLR}
            >
              <h1 className="font-normal text-xs">AWLR</h1>

              {isExpandedAWLR ? (
                <ChevronDown className="w-3 h-auto" />
              ) : (
                <ChevronRight className="w-3 h-auto" />
              )}
            </div>
            <div
              className={`transition-max-height duration-300 ease-linear delay-200 overflow-hidden ${
                isExpandedAWLR ? "max-h-40" : "max-h-0"
              }`}
            >
              <ul className="pl-3 ml-2 font-normal text-xs border-l-2 border-[#f2f2f2] space-y-1">
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="curah_hujan" />
                    <label
                      htmlFor="curah_hujan"
                      className="font-normal text-xs"
                    >
                      Curah Hujan
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="fase_tanam" />
                    <label htmlFor="fase_tanam" className="font-normal text-xs">
                      Fase Tanam
                    </label>
                  </div>
                </li>
                <li className="hover:bg-[#f2f2f2] py-1 pl-1 rounded-md transition duration-75 delay-75">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="genangan_banjir" />
                    <label
                      htmlFor="genangan_banjir"
                      className="font-normal text-xs"
                    >
                      Genangan Banjir
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button className="bg-[#00527a] hover:bg-[#00527a] w-full rounded-md">
            <div className="flex gap-2 items-center justify-center">
              <img src="/assets/download-icon.png" className="w-6 h-auto" />
              <p className="font-normal text-sm text-white">Download</p>
            </div>
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Apakah Anda yakin?</AlertDialogTitle>
            <div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms2" disabled />
                <label
                  htmlFor="terms2"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Bendungan.zip
                </label>
              </div>
            </div>
            <AlertDialogDescription>
              Ini akan mengunduh data dan menyimpan salinannya di perangkat
              Anda.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Batal</AlertDialogCancel>
            <AlertDialogAction>Download</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Download;
