import { Button } from "@/components/ui/button";

const SelectManageBalai = ({
  onCancelClick,
  onPublishClick,
  activeButton,
  cancelTitle,
  publishTitle,
}: {
  onCancelClick: () => void;
  onPublishClick: () => void;
  activeButton: string;
  cancelTitle: string;
  publishTitle: string;
}) => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-base font-semibold text-[#00527a]">
        Quality Control
      </h3>
      <div className="flex rounded-md w-64 border-[1px] border-[#00b7cc] gap-1 p-1">
        <Button
          className={`flex w-full h-7 text-xs font-normal text-center justify-center transition duration-300 ${
            activeButton === "reject"
              ? "bg-[#00b7cc] hover:bg-[#00b7cc] text-white"
              : "text-[#00b7cc] bg-white hover:bg-white"
          }`}
          onClick={onCancelClick}
        >
          {cancelTitle}
        </Button>
        <Button
          className={`flex w-full h-7 text-xs font-normal text-center justify-center transition duration-300 ${
            activeButton === "publish"
              ? "bg-[#00b7cc] hover:bg-[#00b7cc] text-white"
              : "text-[#00b7cc] bg-white hover:bg-white"
          }`}
          onClick={onPublishClick}
        >
          {publishTitle}
        </Button>
      </div>
    </div>
  );
};

export default SelectManageBalai;
