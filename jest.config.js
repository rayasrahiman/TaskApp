module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./screens/setupTests.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|@react-native-community|@react-navigation|@twotalltotems/react-native-otp-input)',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.js$',
  collectCoverage: true,
  coverageReporters: ["json", "html"],
};
