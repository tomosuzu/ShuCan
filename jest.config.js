module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: {
        ignoreCodes: [151001],
      },
    },
  },
  testMatch: ['**/*.test.(ts|tsx|js)'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  verbose: true,
  testURL: 'http://localhost/',
  setupFiles: [
    '<rootDir>/src/setupTests.ts',
  ],
};
