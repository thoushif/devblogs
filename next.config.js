const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_USERNAME: "thoushif",
        MONGODB_PASSWORD: "thoushifblogsadmin",
        MONGODB_CLUSTER: "Cluster0",
        MONGODB_DBKEY: "thoushifblogs-dev"
      }
    };
  }
  return {
    env: {
      MONGODB_USERNAME: "thoushif",
      MONGODB_PASSWORD: "thoushifblogsadmin",
      MONGODB_CLUSTER: "Cluster0",
      MONGODB_DBKEY: "thoushifblogs"
    }
  };
};
