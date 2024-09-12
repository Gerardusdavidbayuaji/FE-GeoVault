import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { filterDatas } from "@/utils/apis/dashboard";

interface Props {
  triggerClassName?: string;
}

const FormDataSelect = (props: Props) => {
  const { triggerClassName } = props;
  const [selectedData, setSelectedData] = useState<string>("BBWS Brantas");

  const handleSelectChange = (value: string) => {
    setSelectedData(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className={triggerClassName ?? "w-full h-7"}>
        <SelectValue placeholder={selectedData} />
      </SelectTrigger>
      <SelectContent>
        {filterDatas[0].all_data.map((filterData) => {
          const { id, value, label } = filterData;
          return (
            <SelectItem key={id} value={value}>
              {label}
            </SelectItem>
          );
        })}
      </SelectContent>
    </Select>
  );
};

export default FormDataSelect;
