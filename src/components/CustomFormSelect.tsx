import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  title: string;
  value: string;
  description: string;
  triggerClassName?: string;
};

const CustomFormSelect = (props: Props) => {
  const { title, value, description, triggerClassName } = props;

  return (
    <Select>
      <SelectTrigger
        className={
          triggerClassName ?? "w-24 h-7 border-[#00b7cc] text-[#00b7cc]"
        }
      >
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={value}>{description}</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CustomFormSelect;
