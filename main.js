onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Поздравляю с праздником тебя!\n Любви, Радости и Счастья для тебя!').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        
        // Адаптивная задержка для мобильных
        const delay = window.innerWidth < 500 ? 150 : 300;
        setTimeout(appendTitle, delay);
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};