import { sampleDatas } from "@/utils/apis/dashboard";
import { SampleData } from "@/utils/apis/dashboard";

const CardTitle = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-2">
        {sampleDatas.map((sampledata: SampleData) =>
          sampledata.data.map((entry) => {
            const { id, title, normal, siaga, waspada, total_data } = entry;
            return (
              <div className="bg-[#00527a] rounded-md p-2 space-y-2" key={id}>
                <div className="flex justify-between items-center text-white font-normal text-base">
                  <h3>{title}</h3>
                  <p className="font-bold">{total_data}</p>
                </div>
                <div className="flex gap-2 text-white font-normal text-xs justify-between">
                  <div className="bg-[#5ec95d] flex-1 rounded-md">
                    <div className="flex items-center justify-between gap-2 m-1">
                      <h4>Normal</h4>
                      <div className="bg-[#d4eff7] flex items-center justify-center w-5 h-5 rounded-md">
                        <p className="font-bold text-xs text-black">{normal}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f78145] flex-1 rounded-md">
                    <div className="flex items-center justify-between gap-2 m-1">
                      <h4>Siaga</h4>
                      <div className="bg-[#d4eff7] flex items-center justify-center w-5 h-5 rounded-md">
                        <p className="font-bold text-xs text-black">{siaga}</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#f52a3b] flex-1 rounded-md">
                    <div className="flex items-center justify-between gap-2 m-1">
                      <h4>Waspada</h4>
                      <div className="bg-[#d4eff7] flex items-center justify-center w-5 h-5 rounded-md">
                        <p className="font-bold text-xs text-black">
                          {waspada}
                        </p>
                      </div>
                    </div>
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

export default CardTitle;
