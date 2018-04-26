const setupPage = () => {
  for (let i = 0; i < 25; i++) {
    const $div = $("<div>");
    $div.attr("id", i);
    $div.data({row: Math.floor(i / 5), col: i % 5});
    $div.addClass("square");
    $(".root").append($div);
  }
};

const changeColor = (id, color) => {
  $(`#${id}`)[0].style = (
    `background-color: rgb(${color[0]},${color[1]},${color[2]});`
  );
};

const waveColor = () => {
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  const rgb = [a, b, c];
  let i = 0;
  const changed = new Set;
  const wave = () => {
    for (let j = 0; j < 25; j++) {
      if (!changed.has(j)) {
        const row = $(`#${j}`).data().row;
        const col = $(`#${j}`).data().col;
        if (row + col === i) {
          changed.add(j);
          changeColor(j, rgb);
        }
      }
    }
    if (i < 8) i += 1;
  };
  window.setInterval(wave, 100);
};

document.addEventListener("DOMContentLoaded", () => {
  setupPage();
  waveColor();
  window.setInterval(waveColor, 450);
});
