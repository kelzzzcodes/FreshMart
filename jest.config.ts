/** @type {import('ts-jest').JestConfigWithTsJest} */
const config: import('ts-jest').JestConfigWithTsJest = {
  preset: 'ts-jest', // Use ts-jest for TypeScript
  testEnvironment: 'jsdom', // Simulate a browser environment
  transformIgnorePatterns: ['/node_modules/(?!swiper|ssr-window|dom7)'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy',
    '\\.scss$': 'identity-obj-proxy',
    '\\.(css)$': 'identity-obj-proxy',
    '^@/ui(.*)$': '<rootDir>/src/components/ui$1',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['./test/setup.ts'],
}

export default config
