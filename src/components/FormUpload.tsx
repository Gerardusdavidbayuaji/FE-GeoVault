import { Input } from "@/components/ui/input";

const FormUpload = () => {
  return (
    <div className="grid w-full items-center">
      <Input id="picture" type="file" className="text-xs font-normal" />
    </div>
  );
};

export default FormUpload;
