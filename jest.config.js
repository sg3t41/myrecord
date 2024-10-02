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
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', 'bower_components', 'shared'],

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
}
