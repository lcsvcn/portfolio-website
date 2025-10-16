import { usePostHog } from "posthog-js/react";
import { useEffect } from "react";

/**
 * PostHog Event Tracker Hook
 *
 * Usage:
 * const trackEvent = usePostHogTracker();
 * trackEvent('button_clicked', { buttonName: 'Sign Up' });
 */
export const usePostHogTracker = () => {
  const posthog = usePostHog();

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("🔍 PostHog Debug Mode Enabled");
      console.log("PostHog User ID:", posthog?.get_distinct_id());
      console.log("PostHog Instance:", posthog);
    }
  }, [posthog]);

  const trackEvent = (eventName, properties = {}) => {
    if (!posthog) {
      console.warn("⚠️ PostHog not initialized");
      return;
    }

    posthog.capture(eventName, properties);

    if (process.env.NODE_ENV === "development") {
      console.log("📊 Event Tracked:", {
        event: eventName,
        properties,
        timestamp: new Date().toISOString(),
        userId: posthog.get_distinct_id(),
      });
    }
  };

  return trackEvent;
};

/**
 * PostHog Page View Tracker
 * Automatically tracks page views when the component mounts
 */
export const usePostHogPageView = (pageName) => {
  const posthog = usePostHog();

  useEffect(() => {
    if (posthog && pageName) {
      posthog.capture("$pageview", {
        page: pageName,
        path: window.location.pathname,
      });

      if (process.env.NODE_ENV === "development") {
        console.log("📄 Page View Tracked:", {
          page: pageName,
          path: window.location.pathname,
        });
      }
    }
  }, [posthog, pageName]);
};

/**
 * PostHog Identity Setter
 * Use this to identify users with their email or ID
 */
export const usePostHogIdentify = () => {
  const posthog = usePostHog();

  const identify = (userId, userProperties = {}) => {
    if (!posthog) {
      console.warn("⚠️ PostHog not initialized");
      return;
    }

    posthog.identify(userId, userProperties);

    if (process.env.NODE_ENV === "development") {
      console.log("👤 User Identified:", {
        userId,
        properties: userProperties,
      });
    }
  };

  return identify;
};

/**
 * Manual PostHog Debug Toggle
 * Call this in console to enable/disable debug mode
 */
export const togglePostHogDebug = (enabled = true) => {
  if (window.posthog) {
    window.posthog.debug(enabled);
    console.log(`🔍 PostHog Debug Mode ${enabled ? "Enabled" : "Disabled"}`);
  } else {
    console.warn("⚠️ PostHog not found on window object");
  }
};

// Expose debug function globally for console access
if (typeof window !== "undefined") {
  window.togglePostHogDebug = togglePostHogDebug;
}
