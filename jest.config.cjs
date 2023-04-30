module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "<rootDir>/__mocks__/css.js",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf)$":
      "<rootDir>/__mocks__/global-mock.js",
    "@test-utils": "<rootDir>/src/test/setup-test-env.tsx",
  },
  testPathIgnorePatterns: ["node_modules", "\\.cache", "<rootDir>.*/public"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testEnvironmentOptions: {
    url: "http://localhost",
  },
  setupFilesAfterEnv: ["<rootDir>/src/test/setup-test-env.tsx"],
  verbose: true,
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  collectCoverageFrom: ["**/*.{jsx,ts,tsx}"],
  coverageReporters: ["json-summary", "text", "lcov"],
  coveragePathIgnorePatterns: [
    "node_modules",
    "src/test",
    "src/types",
    "src/components/config/Firebase/*",
    "vite.config.ts",
    "vite-env.d.ts",
    "src/main.tsx",
  ],
};
