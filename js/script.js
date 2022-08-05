window.addEventListener('DOMContentLoaded', () => {

    const tabsContent = document.querySelectorAll('.tabcontent'),
        tabs = document.querySelectorAll('.tabheader__item'),
        tabsParent = document.querySelector('.tabheader__items');


    function showTabContent(elem = 0) {
        tabsContent[elem].style.display = 'block';
        //tabsContent[elem].classList.add('show', 'fade');
        //tabsContent[elem].classList.remove('hide');
        tabs[elem].classList.add('tabheader__item_active');
    }

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
            //item.classList.add('hide');
            //item.classList.remove('show', 'fade');
        });

        tabs.forEach(element => {
            element.classList.remove('tabheader__item_active');
        });
        
        
    }

    hideTabContent();
    showTabContent();
   

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((element, i) => {
                if (target == element) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

//---------------------------Timer--------------------------------------

const deadline = '2022-08-08';
    
    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds;

        const t = Date.parse(endtime) - Date.parse(new Date());
            if (t <= 0) {
                days = 0,
                hours = 0,
                minutes = 0,
                seconds = 0;
            } else {
              days = Math.floor(t / (1000 * 60 * 60 * 24)),
              hours = Math.floor((t / (1000 * 60 * 60) % 24)),
              minutes = Math.floor((t / 1000 / 60) % 60),
              seconds = Math.floor((t / 1000) % 60);
            }
        return {
            'total': t,
            'days' : days,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };
    }

    function getZiro(num) {
        if (num >= 0 && num < 10){
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

            function updateClock() {
                const t = getTimeRemaining(endtime);
        
                days.innerHTML = getZiro(t.days);
                hours.innerHTML = getZiro(t.hours);
                minutes.innerHTML = getZiro(t.minutes);
                seconds.innerHTML = getZiro(t.seconds);
        
                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
    }

    setClock('.timer', deadline);

//--------------------------Modal----------------------------------------

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal');

    function showModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');

        document.body.style.overflow = 'hidden';   //Для того, чтоб не прокручивался сайт барабаном мышки
    }

    modalTrigger.forEach(btn => {
            btn.addEventListener('click', showModal);
        });

        function closeModal(){
            modal.classList.remove('show');
            modal.classList.add('hide');

            document.body.style.overflow = '';
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal || e.target.getAttriute('data-close') == '') closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if(e.code === "Escape" && modal.classList.contains('show')) closeModal();
        });

        const timeOut = setTimeout(showModal, 50000);
        //document.documentElement.clientHeight   - видимая часть окна, которую мы видим
        //window.pageYOffset    - прокрученая часть
        function showModalBySkroll () {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1) {
                showModal();
                window.removeEventListener('scroll', showModalBySkroll);
            }
            
        }

        window.addEventListener('scroll', showModalBySkroll);

    //Clases from cards
        
    class MenuCard {
        constructor(src, alt, title, desc, price, parentSelector, ...classes) {
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.desc = desc;
            this.price = price;
            this.classes = classes;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH() {
            this.price = this.price * this.transfer;
        }

        render() {
            const element = document.createElement('div');
            
            if (this.classes.length === 0){
                 this.element = 'menu__item';
                 element.classList.add(this.element);
            } else this.classes.forEach(className => element.classList.add(className));
            
            element.innerHTML = `
                <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.desc}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                `;
            this.parent.append(element);
        }
    
    }
    
    const getResource = async (url) => {
        const res = await fetch(url);
            
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    };

    // getResource('http://localhost:3000/menu')
    // .then(data => {
    //     data.forEach(({img, altimg, title, descr, price}) => {   //деструктуризация обьекта
    //         new MenuCard(img, altimg, title, descr, price, '.menu .container').render();
    //     });
    // });
    
    getResource('http://localhost:3000/menu')
        .then(data => createCard(data));
    
    function createCard(data){
        data.forEach(({img, altimg, title, descr, price}) => {
            const element = createElement('div');

            element.classList.add('menu__item');

            element,innerHTML = `
                <img src=${img} alt=${altimg}>
                        <h3 class="menu__item-subtitle">${title}</h3>
                        <div class="menu__item-descr">${descr}</div>
                        <div class="menu__item-divider"></div>
                        <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${price}</span> грн/день</div>
            `;
            document.querySelector('.menu .container').append(element);
        });
    };

    
    //Forms

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        BindPostData(item);
    });

    const postData = async (url, data) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data
        });

        return await res.json();
    };

    function BindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.append(statusMessage);
            form.insertAdjacentElement('afterend', statusMessage);


            //2 формата обработки, обьект formData и JSON
            const formData = new FormData(form);   //обязательно в HTML в form указывать атрибут name иначе не сработает input и не возьмет value
            
            const json = JSON.stringify(Object.fromEntries(formData.entries()));
            // const object = {};//*
            // formData.forEach(function(value, key) {
            //     object[key] = value;
            // });
           // const json = ;//*

        //    fetch('server.php', {
        //         method: "POST",
        //         body: formData   
        //         // }
        //     })
        //-----------------------------------------------------------
            // fetch('server.php', {
            //     method: "POST",
            //     body: JSON.stringify(object),   
            //     headers: {
            //         'Content-type': 'application/json'
            //     }
            // })
            postData('http://localhost:3000/requests', json)
            // .then(data => data.text())
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                    statusMessage.remove();
                })
                .catch(() => {
                    showThanksModal(message.failure);
                })
                .finally(() => {
                    form.reset();
                });
            });
    }

    function showThanksModal() {
        const prevModalDialog = document.querySelector('.modal__dialog');
        prevModalDialog.classList.add('hide');
        showModal();

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
        <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
        </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal();
        }, 4000);
    }
    // fetch('http://localhost:3000/menu')
    //     .then(data => data.json())
    //     .then(res => console.log(res))
});