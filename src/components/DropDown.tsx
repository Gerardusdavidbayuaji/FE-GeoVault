import { LogOut, User } from "lucide-react";
import { Link } from "react-router-dom";

import ChangePassword from "./ChangePassword";
import CustomDialog from "./Dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import AdminIcon from "/assets/admin_icon.jpg";

const DropDown = () => {
  return (
    <div className="mb-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <img
            src={AdminIcon}
            alt="Admin Icon"
            className="w-8 h-auto rounded-full"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className=" w-[242px] ml-[70px] -mb-9">
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
