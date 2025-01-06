document.addEventListener('DOMContentLoaded', ()=>{
    const navBtn = document.querySelector('.nav-btn'),
          nav = document.querySelector('nav'),
          navClose = document.querySelector('.btn-close');

    function hide() {
        nav.classList.toggle('hidden');
        navBtn.classList.toggle('hidden');
        navClose.classList.toggle('hidden');
    }

    navBtn.addEventListener('click', ()=>{
        hide();
    });
    navClose.addEventListener('click', ()=>{
        hide();
    });

    //карусель
    const cardContainer = document.querySelector('.card-container');
    const prevBtn = document.querySelector('#prev-btn');
    const nextBtn = document.querySelector('#next-btn');

    const cards = document.querySelectorAll('.card');
    const visibleCards = 3; // Количество видимых карточек
    const cardWidth = cards[0].offsetWidth + 10; // Учитываем margin между карточками

    let currentIndex = 0;

    // Клонируем карточки для плавного перехода
    cards.forEach((card) => {
        const clone = card.cloneNode(true);
        cardContainer.appendChild(clone);
    });

    const totalCards = document.querySelectorAll('.card').length; // После клонирования

    function updateCarouselPosition() {
        cardContainer.style.transition = 'transform 0.3s ease-in-out';
        cardContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;

        // Сброс после окончания анимации для бесконечного эффекта
        cardContainer.addEventListener(
                'transitionend',
                () => {
                if (currentIndex === totalCards - visibleCards) {
                    currentIndex = 0; // Возврат в начало
                    cardContainer.style.transition = 'none';
                    cardContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
                }

                if (currentIndex < 0) {
                    currentIndex = totalCards - visibleCards - 1; // Переход к концу
                    cardContainer.style.transition = 'none';
                    cardContainer.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
                }
                },
                { once: true }
            );
    }

    prevBtn.addEventListener('click', () => {
    currentIndex--;
    updateCarouselPosition();
    });

    nextBtn.addEventListener('click', () => {
    currentIndex++;
    updateCarouselPosition();
    });

    // Инициализация стартовой позиции
    updateCarouselPosition();

})