const setupPage = () => {
  for (let i = 1; i < 26; i++) {
    // const a = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
    // const c = Math.floor(Math.random() * 256);
    const a = 256;
    const b = 256;
    const c = 256;
    $(".root").append($(
      `<div
        class='square'
        id='${i}'
        style='background-color:rgb(${a},${b},${c});'
      ></div>`
    ));
  }
};

const timedColors = () => {
  for (let i = 1; i < 26; i++) {
    const time = Math.floor(Math.random() * 10000);
    const colorChange = () => {
      const a = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const c = Math.floor(Math.random() * 256);
      $(`#${i}`)[0].style = (
        `background-color: rgb(${a},${b},${c});`
      );
    };
    window.setInterval(colorChange, time);
  }
};

const mouseColors = () => {
  $(".square").on("mouseover", (e) => {
    const a = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const c = Math.floor(Math.random() * 256);
    e.currentTarget.style = (
      `background-color:rgb(${a},${b},${c});`
    );
  });
};

const waveColors = () => {
  const visited = new Set;
  const a = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const c = Math.floor(Math.random() * 256);
  let i = 1;
  const newWave = () => {
    for (let j = 1; j < 26; j++) {
      if (!visited.has(j)) {
        if (j % 4 === i % 4 && j / 4 < i) {
          visited.add(j);
          $(`#${j}`)[0].style = (
            `background-color: rgb(${a},${b},${c});`
          );
        } else if (i % 4 === 0 && j % 4 === 0 && j / 4 <= i) {
          visited.add(j);
          $(`#${j}`)[0].style = (
            `background-color: rgb(${a},${b},${c});`
          );
        } else if (i === 5 && j === 21) {
          visited.add(j);
          $(`#${j}`)[0].style = (
            `background-color: rgb(${a},${b},${c});`
          );
        }
      }
    }
    i += 1;
    if (i === 10) waveColors();
  };
    window.setInterval(newWave, 100);
};

document.addEventListener("DOMContentLoaded", () => {
  setupPage();
  mouseColors();
  timedColors();
  // waveColors();
});
