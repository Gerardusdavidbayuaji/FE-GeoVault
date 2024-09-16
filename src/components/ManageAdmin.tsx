import { useState } from "react";

import ManageInformationData from "./ManageInfomationData";
import SelectManageBalai from "./SelectManageBalai";
import ManagePublish from "./ManagePublish";

const ManageAdmin = () => {
  const [activeButton, setActiveButton] = useState("publish");

  const handleCancelAdminClick = () => {
    setActiveButton("reject");
  };

  const handlePublishAdminClick = () => {
    setActiveButton("publish");
  };

  return (
    <div className="w-full flex flex-col h-screen">
      <div className="p-4 flex flex-col flex-grow">
        <SelectManageBalai
          onCancelClick={handleCancelAdminClick}
          onPublishClick={handlePublishAdminClick}
          activeButton={activeButton}
          cancelTitle="Data baru (33)"
          publishTitle="Publish (33)"
        />
        {activeButton === "reject" ? (
          <ManageInformationData />
        ) : (
          <ManagePublish />
        )}
      </div>
    </div>
  );
};

export default ManageAdmin;
