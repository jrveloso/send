import { Stack} from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import SideBar from "./SideBar"


//sidebar
//using Box component from material ui below, will act as div
const DashboardLayout = () => {
  return (
    <Stack direction="row">
      {/* SideBar */}
      <SideBar />
      {/* Outlet is a placeholder for the children of Dashboard layout */}
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
