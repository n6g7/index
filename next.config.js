module.exports = {
  images: {
    domains: ["cdn.jsdelivr.net"],
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader",
    });
    return config;
  },
};
