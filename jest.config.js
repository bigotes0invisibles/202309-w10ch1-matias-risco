/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "jsdom",
  testEnvironment: "node",
  testMatch: ["**/src/**/*.test.ts"],
  resolver: "jest-ts-webcompat-resolver",
};
