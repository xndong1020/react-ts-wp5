import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { AppRoutes } from "./Routes";
import { theme } from "./theme";
import { CreateAccountPage } from "./pages/Auth/CreateAccountPage";
import { LoginPage } from "./pages/Auth/LoginPage";

const history = createBrowserHistory();

/**
 * initialize Sentry
 */
// Sentry.init({
//   dsn: process.env.REACT_APP_SENTRY_URL,
//   integrations: [
//     new Integrations.BrowserTracing({
//       routingInstrumentation: Sentry.reactRouterV5Instrumentation(history),
//     }),
//   ],
//   tracesSampleRate: 1.0,
// });

const container = document.getElementById("root");
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);

root.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  </BrowserRouter>,
);
