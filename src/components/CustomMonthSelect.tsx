import CustomFormSelect from "./CustomFormSelect";
import { filterData } from "@/utils/apis/dashboard";
import { FilterData } from "@/utils/apis/dashboard";

const CustomMonthSelect = () => {
  return (
    <>
      {filterData.map((filterMonths: FilterData) =>
        filterMonths.bulan.map((filterMonth) => {
          const { id, value, month } = filterMonth;
          return (
            <CustomFormSelect
              key={id}
              id={id}
              title={month}
              value={value}
              description={month}
              triggerClassName="w-full h-7"
            />
          );
        })
      )}
    </>
  );
};

export default CustomMonthSelect;
