const { defaults } = require("jest-config");
const path = require("path");

module.exports = {
  clearMocks: true,
  verbose: true,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["/node_modules/", "public", "coverage", "jest.config.js"],
  collectCoverage: false,
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!coverage/**",
    "!public/**",
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  watchman: true
}