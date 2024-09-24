/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['./test/setup.ts'],
}
