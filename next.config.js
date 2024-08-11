module.exports = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        ...config.resolve.fallback,
        util: require.resolve("util/"),
      },
    };

    return config;
  },
};