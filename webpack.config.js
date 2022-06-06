// Импортируем модуль для работ с путями
const path = require('path');

module.exports = {

  entry: "./src/public/js/router.js",


  // Указываем точку выхода
  output: {

    // Тут мы указываем полный путь к директории, где будет храниться конечный файл
    path: path.resolve(__dirname, 'dist/public/js'),

	// Указываем имя этого файла
    filename: 'router.min.js',
  },
};