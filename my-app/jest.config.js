// jest.config.js
module.exports = {
  moduleNameMapper: {
    '^react-router-dom$': '<rootDir>/__mocks__/react-router-dom.js', // Указать на мок
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Если у вас есть файл настройки тестов
};

