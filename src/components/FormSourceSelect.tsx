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

const FormSourceSelect = (props: Props) => {
  const { triggerClassName } = props;
  const [selectedSource, setSelectedSource] = useState<string>("Balai");

  const handleSelectChange = (value: string) => {
    setSelectedSource(value);
  };

  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className={triggerClassName ?? "w-full h-7"}>
        <SelectValue placeholder={selectedSource} />
      </SelectTrigger>
      <SelectContent>
        {filterDatas[0].source.map((filterSource) => {
          const { id, value, label } = filterSource;
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

export default FormSourceSelect;
