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
});