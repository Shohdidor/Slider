let Pesh = document.querySelector(".Pesh");
let Qafo = document.querySelector(".Qafo");
let box = document.querySelector(".box");
let Avatar = document.querySelector(".Avatar");
let Tema = document.querySelector(".Tema");

let data = [
  {
    id: 1,
    img: "img/campir.png",
    tema: "«Если бы вы спросили меня, стоит ли здесь учиться. Стоит. Если выучить хотя бы ту краткую теорию, что здесь есть, и выполнить вовремя все задачи, какие-то минимальные практические навыки и знания точно получите»",
  },
  {
    id: 2,
    img: "img/Mask Group.png",
    tema: "Программисты - это те, кто создает будущее с помощью кода и технологий. Набихи Фирдавси",
  },
  {
    id: 3,
    img: "img/campir.png",
    tema: "«Если бы вы спросили меня, стоит ли здесь учиться. Стоит. Если выучить хотя бы ту краткую теорию, что здесь есть, и выполнить вовремя все задачи, какие-то минимальные практические навыки и знания точно получите»",
  },
  {
    id: 4,
    img: "img/Mask Group.png",
    tema: "Программисты - это те, кто создает будущее с помощью кода и технологий. Набихи Фирдавси",
  },
];

function get(data) {
  box.innerHTML = "";
  data.forEach((elem) => {
    Pesh.onclick = () => {
      PeshUser(elem.id);
    };
    Qafo.onclick = () => {
      QafoUser(elem.id);
    };
  });
}
get(data);

function PeshUser(id) {
  let user = data.find((elem) => elem.id === id);
  console.log(user);
  Avatar.src = user.img;
  Tema.innerHTML = user.tema;
  get();
}

function QafoUser(id) {
  Avatar.src = elem.img;
  Tema.innerHTML = elem.tema;
  get();
}
