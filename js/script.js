window.addEventListener('DOMContentLoaded', function() {
    const tabs = require('./modules/tabs'),
        modal = require('./modules/modal'),
        timer = require('./modules/timer'),
        cards = require('./modules/cards'),
        calc = require('./modules/calc'),
        forms = require('./modules/forms'),
        slider = require('./modules/slider');

        tabs();
        modal();
        timer();
        cards();
        slider();
        forms();
        calc();
    
});




/*Создаем npm проект
Инициализируем проект
npm init >> получаем файл package.json
2. npm i json-server -g (если глобально, если локально то ничего не пишем)
    npm i json-server --save-dev    (--save-dev - зависимость для разработки)
 >> package-lock.json & folder node_modules
 на другом ПК просто запускаем npm i 
 3. npx json-server db.json     - запуск сервера
 */