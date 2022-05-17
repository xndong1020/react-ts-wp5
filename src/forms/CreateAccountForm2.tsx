import React, { useState, useContext, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { CreateAccountContext } from "../contexts/CreateAccountContext";

const mockCountryList = ["Australia", "China"];

export const CreateAccountForm2 = (): JSX.Element | null => {
  const { currentStep, handleChangeCurrentStep } =
    useContext(CreateAccountContext);
  return currentStep === 2 ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button variant="contained" color="accent" sx={{ width: "60%" }}>
        2
      </Button>
    </Box>
  ) : null;
};
