import React from "react";
import "./index.css";
import { PostHogProvider } from "posthog-js/react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={process.env.REACT_APP_POSTHOG_KEY}
      options={{
        api_host: process.env.REACT_APP_POSTHOG_HOST,
        person_profiles: "identified_only", // or "always" to create profiles for anonymous users
        capture_pageview: true,
        capture_pageleave: true,
        autocapture: true,
        disable_session_recording: false,
        enable_recording_console_log: true,
        loaded: (posthog) => {
          if (process.env.NODE_ENV === "development") {
            posthog.debug(true);
            console.log("🚀 PostHog loaded successfully!");
            console.log("User ID:", posthog.get_distinct_id());
          }
        },
      }}
    >
      <App />
    </PostHogProvider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
