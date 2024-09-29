/** @type {import('ts-jest').JestConfigWithTsJest} **/
const config: import('ts-jest').JestConfigWithTsJest = {
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

export default config
