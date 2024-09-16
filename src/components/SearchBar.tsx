import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="flex w-60 items-center">
      <Input
        type="text"
        placeholder="Cari File"
        className="rounded-none rounded-l-md h-7 text-xs font-medium"
      />
      <Button className="bg-[#00b7cc] hover:bg-[#00b7cc] rounded-none rounded-r-md h-7 w-8 p-1">
        <img src="assets/search-icon.png" className="w-3 h-auto" />
      </Button>
    </div>
  );
};

export default SearchBar;
