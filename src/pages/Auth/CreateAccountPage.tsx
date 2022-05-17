import React from "react";
import Box from "@mui/material/Box";

import { CreateAccountForm1 } from "../../forms/CreateAccountForm1";
import { PublicRouteLayout } from "../../layouts/PublicRouteLayout";
import { CreateAccountContextProvider } from "../../contexts/CreateAccountContext";
import { CreateAccountForm2 } from "../../forms/CreateAccountForm2";

/**
 *
 * @returns Register Page
 */
export const CreateAccountPage = (): JSX.Element => {
  return (
    <Box>
      <PublicRouteLayout title="Create Account">
        <CreateAccountContextProvider>
          <CreateAccountForm1 />
          <CreateAccountForm2 />
        </CreateAccountContextProvider>
      </PublicRouteLayout>
    </Box>
  );
};
