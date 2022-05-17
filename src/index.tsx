import React from "react";
import { Router } from "react-router-dom";
import { render } from "react-dom";
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

render(
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  </Router>,
  document.getElementById("root"),
);
