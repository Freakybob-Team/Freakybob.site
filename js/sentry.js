  window.sentryOnLoad = function () {
    Sentry.init({
      dsn: "https://de5b3fb954f5882c8f890c906eb39cf1@o4509941003452416.ingest.de.sentry.io/4509941005549648",
      // Adds request headers and IP for users, for more info visit:
      // https://docs.sentry.io/platforms/javascript/configuration/options/#sendDefaultPii
      sendDefaultPii: false,
    });
  };