import React from "react";
import { Router } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { createBrowserHistory } from "history";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Routes } from "./Routes";
import { theme } from "./theme";

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
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </Router>,
);
