function getRandomCol() {
  return Math.round(Math.random() * 255);
}

let topNavDOMEl = document.createElement("nav");
topNavDOMEl.setAttribute("id", "top-nav");
document.body.appendChild(topNavDOMEl);

// setInterval(() => {
//   topNavDOMEl.style.backgroundColor = `rgb(${getRandomCol()}, ${getRandomCol()}, ${getRandomCol()}`;
//   //   topNavDOMEl.innerHTML = `${getRandomCol()}`
// }, 1000);

topNavDOMEl.innerHTML = "<h1>hola chicos</h1>";

// topNavDOMEl.onclick = function() {
//   alert(topNavDOMEl.innerHTML);
// };

Array(10)
  .fill()
  .forEach(() => {
    let buttonDOMEl = document.createElement("button");
    buttonDOMEl.innerText = "click me!";
    let randomNumber = Math.random();
    buttonDOMEl.onclick = function() {
      //   alert(Math.random());
      alert(randomNumber);
    };
    topNavDOMEl.appendChild(buttonDOMEl);
  });

//   document.querySelectorAll("button").forEach(button => {
//     button.style.backgroundColor = `rgb(${getRandomCol()}, ${getRandomCol()}, ${getRandomCol()}`;
//   });

//   document.querySelectorAll("button")[0].style.backgroundColor = `rgb(${getRandomCol()}, ${getRandomCol()}, ${getRandomCol()}`;

// let allButtons = document.querySelectorAll("button")

// for (var i = 0; i < 5; i++) {
//     allButtons[i].style.backgroundColor = `rgb(${getRandomCol()}, ${getRandomCol()}, ${getRandomCol()}`;
// }

let allButtons = [...document.querySelectorAll("button")].splice(3, 6);

allButtons.forEach(button => {
  button.style.backgroundColor = `rgb(${getRandomCol()}, ${getRandomCol()}, ${getRandomCol()}`;
});
