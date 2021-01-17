(function init() {
    const cards = Array.from(document.querySelectorAll('.card'))
    cards.forEach((card) => { card.addEventListener('click', clickEvent) })
}())

function clickEvent() {
    const opened = this.classList.contains('open')
    if (!opened) {
        this.classList.remove('close')
        this.classList.add('open')
    } else {
        this.classList.remove('open');
        this.classList.add('close');
    }
} 
img = '🐞 🦀 🐟 🐊 🐓 🦃'.split(' ');
function coupleArr(array1, array2){
    universalArray = array1.concat(array2);
    return universalArray;
}
img = coupleArr(img, img);
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // подробнее о нём - в следующих главах
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
    return img
  }
img = shuffle(img)