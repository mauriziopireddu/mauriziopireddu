import { useEffect } from "react";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

const dsn =
  "https://f51e7461bb994873b0e209ed981bc93d@o510058.ingest.sentry.io/5605221";

export const useSentry = () => {
  useEffect(() => {
    if (window) {
      Sentry.init({
        dsn,
        autoSessionTracking: true,
        integrations: [new Integrations.BrowserTracing()],
        tracesSampleRate: 1.0,
        enabled: process.env.NODE_ENV === "production",
      });
    }
  }, []);
};
