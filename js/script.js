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

const deadline = '2022-07-25';
    
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
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

        modalTrigger.forEach(btn => {
            btn.addEventListener('click', function(){
                modal.classList.add('show');
                modal.classList.remove('hide');

                document.body.style.overflow = 'hidden';   //Для того, чтоб не прокручивался сайт барабаном мышки
            });
        });

        function closeModal(){
            modal.classList.remove('show');
            modal.classList.add('hide');

            document.body.style.overflow = '';
        }

        modalCloseBtn.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if(e.code === "Escape" && modal.classList.contains('show')) closeModal();
        });


});