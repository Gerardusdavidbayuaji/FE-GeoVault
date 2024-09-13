import Notification from "./Notification";
import CustomDialog from "./Dialog";
import DropDown from "./DropDown";

import NotifIcon from "/assets/notif-icon.png";
import AdminIcon from "/assets/admin_icon.jpg";

const Navbar = () => {
  return (
    <header className="bg-[#00527a] w-full p-2">
      <nav className="flex gap-3 justify-end">
        <CustomDialog
          title="Notifikasi (5)"
          action="Tutup"
          description={<Notification />}
        >
          <div className="flex outline outline-[#00b7cc] outline-2 items-center justify-center w-8 h-8 m-2 rounded-full cursor-pointer">
            <img
              src={NotifIcon}
              alt="Notification Icon"
              className="flex w-4 h-auto"
            />
          </div>
        </CustomDialog>
        <div className="flex bg-[#00b7cc] rounded-full items-center justify-center gap-2">
          <img
            src={AdminIcon}
            alt="Admin Icon"
            className="w-6 h-auto ml-2 rounded-full"
          />
          <p className="text-white text-base font-normal">admin_geovault</p>
          <DropDown />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
