import { Button } from "@/components/ui/button";
import FormUpload from "./FormUpload";
import Alert from "./CustomAlert";

const UploadButton = () => {
  return (
    <Alert
      title="Upload Data"
      description={<FormUpload />}
      onAction={() => {
        console.log("Uploading...");
      }}
      onActionTitle="Upload"
      style="bg-[#00527a] hover:bg-[#00527a]/80 w-full rounded-md"
    >
      <Button className="bg-[#00527a] hover:bg-[#00527a] w-[125px] h-7 rounded-md flex items-center justify-center">
        <div className="flex gap-2 items-center justify-center">
          <img src="/assets/publish-icon.png" className="w-4 h-auto" />
          <p className="font-normal text-xs text-white">Upload</p>
        </div>
      </Button>
    </Alert>
  );
};

export default UploadButton;
