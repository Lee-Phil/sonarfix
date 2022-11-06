import type { Config } from "jest";

const config: Config = {
  verbose: true,
  moduleFileExtensions: ["js", "json", "ts"],
  rootDir: ".",
  testRegex: ".spec.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  coverageDirectory: "../coverage",
  collectCoverage: true,
};

export default config;
