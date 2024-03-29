//npm install es6-promise
require('es6-promise').polyfill();
//foreach полифил (если foreach не сработал) npm i nodelist-foreach-polyfill
import 'nodelist-foreach-polyfill';


import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import slider from './modules/slider';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '.modal', modalTimerId);
    timer('.timer', '2022-10-11');
    cards();
    calc();
    forms('form', modalTimerId);
    slider({
        container: '.offer__slider',
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });
});



/*Создаем npm проект
Инициализируем проект
npm init >> получаем файл package.json
2. npm i json-server -g (если глобально, если локально то ничего не пишем)
    npm i json-server --save-dev    (--save-dev - зависимость для разработки)
 >> package-lock.json & folder node_modules
 на другом ПК просто запускаем npm i 
 3. npx json-server db.json     - запуск сервера
    npx webpack
4. Установка bables (ES5) npm install --save-dev @babel/core @babel/cli @babel/preset-env
5. В файле webpack указан данный модуль 
npm i --save-dev babel-loader

npm i --save-dev core-js

Дополнительний полифил для ES6
npm install es6-promise
foreach полифил
npm i nodelist-foreach-polyfill
 */