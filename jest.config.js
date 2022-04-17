module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest/configs/jestSetup.js'],
  moduleNameMapper: {
    '\\.module.css$': 'identity-obj-proxy',
    '\\.css$': '<rootDir>/jest/mocks/styleMock.js',
    '\\.(gif|jpg|png|webp|svg|eot|otf|ttf|woff|woff2)$':
      '<rootDir>/jest/mocks/fileMock.js',
  },
  coverageDirectory: '<rootDir>/jest/coverage',
};
