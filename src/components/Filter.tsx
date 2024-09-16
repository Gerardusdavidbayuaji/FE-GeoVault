import FormSourceSelect from "./FormSourceSelect";
import FormMonthSelect from "./FormMonthSelect";
import FormBalaiSelect from "./FormBalaiSelect";
import FormRiverSelect from "./FormRiverSelect";
import FormYearSelect from "./FormYearsSelect";
import FormDataSelect from "./FormDataSelect";

const Filter = () => {
  return (
    <>
      <div className="grid grid-cols-2 gap-2 mb-2">
        <FormMonthSelect />
        <FormYearSelect />
      </div>
      <div className="grid gap-y-2">
        <FormBalaiSelect />
        <FormRiverSelect />
        <FormDataSelect />
        <FormSourceSelect />
      </div>
    </>
  );
};

export default Filter;
