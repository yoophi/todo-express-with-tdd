module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: false,
      },
    ],
  ],
  plugins: ["@babel/transform-runtime"],
};
