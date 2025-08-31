  window.sentryOnLoad = function () {
    Sentry.init({
      dsn: "https://de5b3fb954f5882c8f890c906eb39cf1@o4509941003452416.ingest.de.sentry.io/4509941005549648",
      // Adds request headers and IP for users, for more info visit:
      // https://docs.sentry.io/platforms/javascript/configuration/options/#sendDefaultPii
      sendDefaultPii: false,
      // Alternatively, use `process.env.npm_package_version` for a dynamic release version
      // if your build tool supports it.
      release: "freakybobsitesentry@1.0.0",
      integrations: [
        Sentry.replayIntegration(),
      ],

      // Capture Replay for 10% of all sessions,
      // plus for 100% of sessions with an error
      // Learn more at
      // https://docs.sentry.io/platforms/javascript/session-replay/configuration/#general-integration-configuration
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  };