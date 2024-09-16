import FormSourceSelect from "./FormSourceSelect";
import FormMonthSelect from "./FormMonthSelect";
import FormRiverSelect from "./FormRiverSelect";
import FormYearSelect from "./FormYearsSelect";
import FilterButton from "./FilterButton";
import DataTable from "./DataTable";
import SearchBar from "./SearchBar";

const ManageInfomationData = () => {
  return (
    <section className="flex flex-col h-full">
      <div className="h-14 flex items-center justify-center">
        <div className="w-full">
          <div className="grid grid-cols-2">
            <div className="flex gap-1">
              <SearchBar />
              <FilterButton />
            </div>
            <div className="flex gap-1 w-full">
              <FormYearSelect />
              <FormMonthSelect />
              <FormRiverSelect />
              <FormSourceSelect />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-grow">
        <DataTable />
      </div>
    </section>
  );
};

export default ManageInfomationData;
