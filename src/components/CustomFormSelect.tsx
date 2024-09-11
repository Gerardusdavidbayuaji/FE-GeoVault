import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  id: number;
  title: string;
  value: string;
  description: string;
  triggerClassName?: string;
};

const CustomFormSelect = (props: Props) => {
  const { id, title, value, description, triggerClassName } = props;

  return (
    <Select>
      <SelectTrigger id={id} className={triggerClassName ?? "w-24 h-7"}>
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value={value}>{description}</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default CustomFormSelect;
