import { Button } from "@/components/ui/button";
import CustomDialog from "./Dialog";
import Filter from "./Filter";

const FilterButton = () => {
  return (
    <CustomDialog
      title="Notifikasi (33)"
      action="Tutup"
      description={<Filter />}
    >
      <Button className="bg-[#00b7cc] hover:bg-[#00b7cc] rounded-md h-7 w-8 p-1">
        <img src="assets/filter.png" className="w-3 h-auto" />
      </Button>
    </CustomDialog>
  );
};

export default FilterButton;
