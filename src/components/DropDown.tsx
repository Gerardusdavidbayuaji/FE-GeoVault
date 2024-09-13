import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ChangePassword from "./ChangePassword";
import DropDownIcon from "/assets/drop-down-icon.png";
import CustomDialog from "./Dialog";

const DropDown = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="ml-3 mr-4">
            <img src={DropDownIcon} alt="Drop Down Icon" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 mr-4 mt-6">
          <DropdownMenuLabel>Akun admin_geovault</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup className="space-y-1">
            <CustomDialog
              title="Ganti Password"
              action="Tutup"
              description={<ChangePassword />}
              triggerClass="w-full"
            >
              <div className="flex gap-1 p-2 items-center justify-start text-xs cursor-pointer rounded-md hover:bg-[#bad7e8] w-full">
                <User className="mr-2 h-4 w-4" />
                <span>Ganti Password</span>
              </div>
            </CustomDialog>
            <Link to="/">
              <div className="flex gap-1 p-2 items-center justify-start text-xs cursor-pointer rounded-md hover:bg-[#bad7e8]">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Keluar</span>
              </div>
            </Link>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default DropDown;
