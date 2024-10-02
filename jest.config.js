/** @type {import('ts-jest').JestConfigWithTsJest} **/
//export default {
//  testEnvironment: 'node',
//  transform: {
//    '^.+.tsx?$': ['ts-jest', {}],
//  },
//  setupFilesAfterEnv: ['./jest.setup.ts'],
//}

export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.ts'],
}
