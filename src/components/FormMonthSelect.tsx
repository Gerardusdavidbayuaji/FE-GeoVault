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

const FormMonthSelect = (props: Props) => {
  const { triggerClassName } = props;
  const [selectedMonth, setSelectedMonth] = useState<string>("Januari");

  const handleSelectChange = (value: string) => {
    setSelectedMonth(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className={triggerClassName ?? "w-full h-7"}>
        <SelectValue placeholder={selectedMonth} />
      </SelectTrigger>
      <SelectContent>
        {filterDatas[0].bulan.map((filterMonth) => {
          const { id, value, label } = filterMonth;
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

export default FormMonthSelect;
