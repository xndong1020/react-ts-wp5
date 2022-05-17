import React, { useState, useContext, MouseEvent } from "react";
import Box from "@mui/material/Box";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { CreateAccountContext } from "../contexts/CreateAccountContext";

const mockCountryList = ["Australia", "China"];

export const CreateAccountForm1 = (): JSX.Element | null => {
  const { currentStep, handleChangeCurrentStep } =
    useContext(CreateAccountContext);
  const [country, setCountry] = useState("Australia");

  const handleChange = (evt: SelectChangeEvent) => {
    setCountry(evt.target.value);
  };

  const handleClick = () => {
    console.log("btn clicked");
    handleChangeCurrentStep(currentStep + 1);
  };

  return currentStep === 1 ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Select value={country} id="countryOfOperation" onChange={handleChange}>
        {mockCountryList.map((countryFromList) => (
          <MenuItem
            selected={countryFromList === country}
            key={countryFromList}
            value={countryFromList}
          >
            {countryFromList}
          </MenuItem>
        ))}
      </Select>
      <TextField
        label="Outlined secondary"
        color="secondary"
        sx={{ padding: "16px 0" }}
      />
      <Button
        variant="contained"
        color="accent"
        sx={{ width: "60%" }}
        onClick={handleClick}
      >
        Continue
      </Button>
    </Box>
  ) : null;
};
