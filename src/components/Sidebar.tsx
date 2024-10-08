import { useState } from "react";

import Notification from "./Notification";
import CustomDialog from "./Dialog";
import DropDown from "./DropDown";

import DashboardActiveIcon from "/assets/dashboard-active-icon.png";
import ManagedActiveIcon from "/assets/document-active-icon.png";
import DashboardIcon from "/assets/dashboard-icon.png";
import ManageIcon from "/assets/document-icon.png";
import NotifIcon from "/assets/notif-icon.png";

const Sidebar = ({
  onDashboardClick,
  onManageClick,
}: {
  onDashboardClick: () => void;
  onManageClick: () => void;
}) => {
  const [active, setActive] = useState("dashboard");

  const handleDashboardClick = () => {
    setActive("dashboard");
    onDashboardClick();
  };

  const handleManageClick = () => {
    setActive("manage");
    onManageClick();
  };

  return (
    <div className="grid flex-cols-2 w-14 shadow-right">
      <div className="flex flex-col items-center justify-end space-y-2">
        <div
          className={`w-9 h-9 rounded-md flex items-center justify-center cursor-pointer transition duration-300 ${
            active === "dashboard" ? "bg-[#d4eff7]" : "bg-white"
          }`}
          onClick={handleDashboardClick}
        >
          <img
            src={active === "dashboard" ? DashboardActiveIcon : DashboardIcon}
            alt="Dashboard Icon"
            className="w-5 h-auto"
          />
        </div>
        <div
          className={`w-9 h-9 rounded-md flex items-center justify-center cursor-pointer transition duration-300 ${
            active === "manage" ? "bg-[#d4eff7]" : "bg-white"
          }`}
          onClick={handleManageClick}
        >
          <img
            src={active === "manage" ? ManagedActiveIcon : ManageIcon}
            alt="Document Icon"
            className="w-4 h-5"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-end cursor-pointer gap-2">
        <CustomDialog
          title="Notifikasi (5)"
          action="Tutup"
          description={<Notification />}
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-md bg-[#d4eff7]">
            <img
              src={NotifIcon}
              alt="Notification Icon"
              className="flex w-5 h-auto"
            />
          </div>
        </CustomDialog>
        <DropDown />
      </div>
    </div>
  );
};

export default Sidebar;
