import { notifications } from "@/utils/apis/dashboard";
import { Notif } from "@/utils/apis/dashboard";

const Notification = () => {
  return (
    <div className="overflow-y-scroll py-2 pr-2 h-56">
      {notifications.map((notifInformation: Notif) => {
        const { id, file_name, ws, date } = notifInformation;
        return (
          <div key={id} className="text-sm font-normal">
            <div className="bg-[#d4eff7] rounded-md p-2">
              <h1 className="text-[#00527a] font-medium">{ws}</h1>
            </div>
            <div className="p-2">
              <p>
                Telah mengunggah Data{" "}
                <span className="font-medium">{file_name}</span> pada
                <span className="font-medium"> {ws}</span>, segera proses data.
              </p>
            </div>
            <div className="flex items-center justify-end text-xs py-1 px-2">
              {date}
            </div>
            <hr className="border-1 border-[#7db5c5] mb-2" />
          </div>
        );
      })}
    </div>
  );
};

export default Notification;
