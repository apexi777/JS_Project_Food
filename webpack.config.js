'use strict';
//Техническая переменная для правильной работы, желательно не трогать
let path = require('path');
//Обьект настроек
module.exports = {
  mode: 'development',   //Режим в котором будет работать webpack (development & production)_
  entry: './js/script.js',   //Файл с которого будем начинать
  output: {
    filename: 'bundle.js',    //Файл выхода
    path: __dirname + '/js'    //куда его будем слаживать
  },
  watch: true,   //Если true - будет отслеживать изминения наших файлов, и автоматически будет 

  devtool: "source-map",    //Технология для хранения исходников и место расположения кода

  module: {}
};
