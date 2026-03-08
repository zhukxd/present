const title = document.querySelector('.title')
const text = 'Это наилучшее пожелание'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>` // Исправлено: было span/> вместо span
  } else {
    // Адаптивный отступ для мобильных
    const marginRight = window.innerWidth < 500 ? '10px' : '20px';
    title.innerHTML += `<span style='margin-right: ${marginRight};'>&nbsp;</span>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3;
  element.style.animationDelay = `${randomDelay}s`;
});