function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Array(150)
  .fill()
  .forEach(() => {
    let divDOMEl = document.createElement("div");
    divDOMEl.style.height = divDOMEl.style.width = `${randomInt(150/3, 450/3)}px`;
    document.body.appendChild(divDOMEl);
  });

setInterval(() => {
  [...document.querySelectorAll("div")].forEach(divDOMEl => {
    // divDOMEl.style.height = divDOMEl.style.width = `${randomInt(150/3, 450/3)}px`;
    divDOMEl.style.transform = `rotate(${randomInt(0, 360)}deg)`
  });
}, 1000);
