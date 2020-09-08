window.onload = function(){          //при полной загрузки страницы...
    // const score = document.getElementsByClassName("score"), 
    // start = document.getElementsByClassName("start"),
    // gameArea = document.getElementsByClassName("gameArea");
    //присваиваем переменным класс со страницы
    const score = document.querySelector('.score'), 
    gameArea = document.querySelector('.gameArea'),
    start = document.querySelector('.start');    //querySelector как getElementById только новее
    car = document.createElement('div');
    car.classList.add('car');

    //событие на клик (start)
    start.addEventListener("click", startGame);
    document.addEventListener('keydown', startRun);
    document.addEventListener('keyup', stopRun);

    //объект с данными
    const keys = {
        ArrowUp: false,
        ArrowDown: false,
        ArrowRight: false,
        ArrowLeft: false
    };

    //состояние игры
    const setting = {
        start: false,
        score: 0,
        speed: 3
    }

    function startGame() {
        start.classList.add('hide'); //добавляем класс(скрывает надпись)
        setting.start = true;
        gameArea.appendChild(car); 
        requestAnimationFrame(playGame);//Анимация функции
    }

    function playGame() {
        if(setting.start){
            requestAnimationFrame(playGame);//Анимация функции, самовызов функции внутри себя
        }

    }

    function startRun(event) {
        event.preventDefault(); //отменяем стандартное поведение браузера(скролл страницы на стрелочки)
        keys[event.key] = true;
    }

    function stopRun(event) {
        event.preventDefault(); //отменяем стандартное поведение браузера(скролл страницы на стрелочки)
        keys[event.key] = false;
    }



}
