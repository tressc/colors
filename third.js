const setupPage = () => {
  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  for (let i = 0; i < 100; i++) {
    const $div = $("<div>");
    $div.attr("id", i);
    $div.addClass("square");
    $div.css( "background-color", `rgb(${r},${g},${b})`);
    $(".root").append($div);
  }
};

const grid = [];

const setupGrid = () => {
  for (let i = 0; i < 100; i++) {
    if (i % 10 === 0) {
      grid.push([]);
    }
    grid[grid.length-1].push(i);
  }
};

const bindEvents = () => {
  $(".square").on("click", (e) => {
    const squareId = e.currentTarget.id;
    const rowIdx = Math.floor(squareId / 10);
    const colIdx = squareId % 10;
    ripple([rowIdx, colIdx]);
  });
};

const ripple = (pos) => {

  const r = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const rgb = [r, g, b];

  const directions = [
    [0,1],
    [1,0],
    [0,-1],
    [-1,0],
  ];

  const visited = new Set;
  const notYetVisted = [];

  const startRow = pos[0];
  const startCol = pos[1];

  notYetVisted.push([pos[0], pos[1]]);

  while (notYetVisted.length > 0) {
    const current = notYetVisted.shift();
    const cRow = current[0];
    const cCol = current[1];
    const cId = grid[cRow][cCol];

    visited.add(cId);

    for (let i = 0; i < 4; i++) {
      const newRow = cRow + directions[i][0];
      const newCol = cCol + directions[i][1];
      if (newRow >= 0 && newRow < 10) {
        if (newCol >=0 && newCol < 10) {
          const seen = visited.has(grid[newRow][newCol]);
          if (!seen) {
            visited.add(grid[newRow][newCol]);
            console.log(grid[newRow][newCol]);
            notYetVisted.push([newRow, newCol]);
          }
        }
      }
      window.setTimeout(() => {changeColor(cId, rgb);}, 50);
    }
  }
};

const changeColor = (id, rgb) => {
  const r = rgb[0];
  const g = rgb[1];
  const b = rgb[2];
  $(`#${id}`).css( "background-color", `rgb(${r},${g},${b})`);
};

document.addEventListener("DOMContentLoaded", () => {
  setupPage();
  setupGrid();
  bindEvents();
});
