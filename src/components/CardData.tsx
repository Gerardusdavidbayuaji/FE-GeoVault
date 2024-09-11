import { sampleDatas } from "@/utils/apis/dashboard";
import { SampleData } from "@/utils/apis/dashboard";

const CardData = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-2 rounded-md">
        {sampleDatas.map((sampleData: SampleData) =>
          sampleData.all_data.map((total) => {
            const { id, jenis_data, total_data } = total;
            return (
              <div
                className="bg-[#d4eff7] rounded-md text-xs font-normal text-black"
                key={id}
              >
                <div className="flex items-center justify-between gap-2 m-1">
                  <h4>{jenis_data}</h4>
                  <div className="bg-white flex items-center justify-center w-6 h-6 rounded-md">
                    <p className="font-bold text-xs text-black">{total_data}</p>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default CardData;
