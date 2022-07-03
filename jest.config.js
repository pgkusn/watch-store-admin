module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+js$': 'babel-jest',
    '^.+.vue$': '@vue/vue3-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
