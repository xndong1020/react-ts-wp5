import React from "react";
import { PublicRouteLayout } from "../../layouts/PublicRouteLayout";

/**
 *
 * @returns Login Page
 */

export const LoginPage = (): JSX.Element => {
  return (
    <>
      <PublicRouteLayout title="Login">
        <div>Login Form</div>
      </PublicRouteLayout>
    </>
  );
};
