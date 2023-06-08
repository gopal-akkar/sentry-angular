const { sentryWebpackPlugin } = require("@sentry/webpack-plugin");

module.exports = {
  // ... other config above ...

  devtool: "source-map", // Source map generation must be turned on
  plugins: [
    sentryWebpackPlugin({
      org: "testorg-kh",
      project: "my-app",
      release:{
        name:'0.0.0'
      },
      // Auth tokens can be obtained from https://sentry.io/settings/account/api/auth-tokens/
      // and need the `project:releases` and `org:read` scopes
      authToken: 'your-auth-token',
    }),
  ],
};
