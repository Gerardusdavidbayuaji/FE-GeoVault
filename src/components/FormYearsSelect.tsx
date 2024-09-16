import { useState } from "react";

import { filterDatas } from "@/utils/apis/dashboard";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  triggerClassName?: string;
}

const FormYearSelect = (props: Props) => {
  const { triggerClassName } = props;
  const [selectedYear, setSelectedYear] = useState<string>("2020");

  const handleSelectChange = (value: string) => {
    setSelectedYear(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className={triggerClassName ?? "w-full h-7"}>
        <SelectValue placeholder={selectedYear} />
      </SelectTrigger>
      <SelectContent>
        {filterDatas[0].tahun.map((filterYear) => {
          const { id, value, label } = filterYear;
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

export default FormYearSelect;
