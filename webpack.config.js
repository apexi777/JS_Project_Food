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

  module: {               //какие модуля будут использованы
    rules: [              //правила
      {
        test: /\.m?js$/,                                        // Регулярное выражение
        exclude: /(node_modules|bower_components)/,             //Файлы которые исключаем с этой выборки
        use: {                                                    //как и что будем использовать
          loader: 'babel-loader',                                 //Связует webpack c babels   npm i --save-dev babel-loader
          options: {
            presets: [['@babel/preset-env', {         //Распостранённый пресет bables
                debug: true,                                //Для отображения полной информации указываем true
                corejs: 3,          //Для подключения всех возможных полифилов   npm i --save-dev core-js
                useBuiltIns: "usage"     //Выбирает только те полифилы которые нужны
            }]]
          }
        }
      }
    ]
  }
};
