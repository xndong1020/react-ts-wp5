import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/Auth/LoginPage';
import { CreateAccountPage } from './pages/Auth/CreateAccountPage';





/**
 * @MAIN ROUTE FILE
 */

export const Routes = (): JSX.Element => {
  return (
    <>
      {/* <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop> */}
      <Switch>
        {/* because we don't have exact props here so '/admin/dashboard' will navigate to homepage here */}
        <Route path="/login" component={LoginPage} />
        <Route path="/createAccount" component={CreateAccountPage} />
        <Redirect from="/" to="/login" />
      </Switch>
    </>
  );
};
