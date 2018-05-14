const setupPage = () => {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  for (let i = 0; i < 25; i++) {
    const $div = $("<div>");
    $div.attr("id", i);
    $div.data({row: Math.floor(i / 5), col: i % 5});
    $div.addClass("square");
    $div.css( "background-color", `rgb(${r},${g},${b})`);
    $(".root").append($div);
  }
};

const bindEvents = () => {
  $(".square").on("click", (e) => {
    console.log(e);
  });
};

const ripple = () => {

};

document.addEventListener("DOMContentLoaded", () => {
  setupPage();
  bindEvents();
});
