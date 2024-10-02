// /** @type {import('ts-jest').JestConfigWithTsJest} **/
// const config: import('ts-jest').JestConfigWithTsJest = {
//   preset: 'ts-jest',
//   testEnvironment: 'jsdom',
//   transformIgnorePatterns: [
//     '/node_modules/(?!swiper)/', // Include Swiper in Jest transformations
//   ],
//   transform: {
//     '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
//   },
//   moduleNameMapper: {
//     '\\.module\\.scss$': 'identity-obj-proxy',
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   setupFilesAfterEnv: ['./test/setup.ts'],
// }

// export default config

/** @type {import('ts-jest').JestConfigWithTsJest} */
const config: import('ts-jest').JestConfigWithTsJest = {
  preset: 'ts-jest', // Use ts-jest for TypeScript
  testEnvironment: 'jsdom', // Simulate a browser environment
  transformIgnorePatterns: ['/node_modules/(?!swiper|ssr-window|dom7)'],
  transform: {
    '^.+\\.(js|jsx|mjs)$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest', // Use ts-jest for TypeScript files
  },
  moduleNameMapper: {
    '\\.module\\.scss$': 'identity-obj-proxy', // Mock SCSS modules
    '\\.scss$': 'identity-obj-proxy', // Mock plain SCSS files
    '\\.(css)$': 'identity-obj-proxy',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'], // File extensions Jest will process
  setupFilesAfterEnv: ['./test/setup.ts'], // Setup file for additional configurations
}

export default config
