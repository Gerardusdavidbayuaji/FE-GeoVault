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

const FormRiverSelect = (props: Props) => {
  const { triggerClassName } = props;
  const [selectedRiver, setSelectedRiver] = useState<string>("WS Brantas");

  const handleSelectChange = (value: string) => {
    setSelectedRiver(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className={triggerClassName ?? "w-full h-7"}>
        <SelectValue placeholder={selectedRiver} />
      </SelectTrigger>
      <SelectContent>
        {filterDatas[0].wilayah_sungai.map((filterRiver) => {
          const { id, value, label } = filterRiver;
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

export default FormRiverSelect;
