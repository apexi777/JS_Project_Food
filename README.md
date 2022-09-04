# Project-Food-
1. Создаем npm проект

Инициализируем проект

npm init

>> получаем файл package.json

2. Установка 
    npm i json-server -g (если глобально, если локально то ничего не пишем)

    npm i json-server --save-dev    (--save-dev - зависимость для разработки)
 >> На выходе получаем папку node_modules и файл package-lock.json
   
 на другом ПК просто запускаем (если уже имеется в каталоге package.json)
 >> npm i 
 
 3. запуск сервера
 
 >> npx json-server db.json      
 
 4. Запуск webpack
 
   >> npx webpack
   
 5. Установка bables (ES5) 
 
 >> npm install --save-dev @babel/core @babel/cli @babel/preset-env
 
6. В файле webpack указан данный модуль 

>> npm i --save-dev babel-loader

Установка core-js

>> npm i --save-dev core-js

7. Установка полифилов

Дополнительний полифил для ES6

>> npm install es6-promise

foreach полифил

>> npm i nodelist-foreach-polyfill
