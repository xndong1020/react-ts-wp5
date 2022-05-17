import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/Auth/LoginPage";
import { CreateAccountPage } from "./pages/Auth/CreateAccountPage";

/**
 * @MAIN ROUTE FILE
 */

export const AppRoutes = (): JSX.Element => {
  return (
    <>
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
      <Routes>
        {/* because we don't have exact props here so '/admin/dashboard' will navigate to homepage here */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/createAccount" element={<CreateAccountPage />} />
        {/* <Redirect from="/" to="/login" /> */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
};
