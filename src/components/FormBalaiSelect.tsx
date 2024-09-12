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

const FormBalaiSelect = (props: Props) => {
  const { triggerClassName } = props;
  const [selectedBalai, setSelectedBalai] = useState<string>("BBWS Brantas");

  const handleSelectChange = (value: string) => {
    setSelectedBalai(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className={triggerClassName ?? "w-full h-7"}>
        <SelectValue placeholder={selectedBalai} />
      </SelectTrigger>
      <SelectContent>
        {filterDatas[0].bbws.map((filterBalai) => {
          const { id, value, label } = filterBalai;
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

export default FormBalaiSelect;
