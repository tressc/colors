const setupPage = () => {
  for (let i = 0; i < 25; i++) {
    const $div = $("<div>");
    $div.attr("id", i);
    $div.data({row: Math.floor(i / 5), col: i % 5});
    $div.addClass("square");
    $(".root").append($div);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setupPage();
});
