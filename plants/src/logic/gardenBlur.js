//garden and blur
let gardenBlur = function () {
  const g = document.querySelector("div.section3__description-buttons");
  const gridItems = document.querySelector("div.section3__grid");
  let buttonsO = {
    0: false,
    1: false,
    2: false,
  };
  let buttonsToGrid = {
    0: [0, 4],
    1: [2],
    2: [1, 3, 5],
  };
  let counter = [];
  g.addEventListener("click", function (e) {
    if (e.target.className === "active-button") {
      e.target.classList.remove("active-button");
      buttonsO[e.target.id[1]] = false;
      counter = counter.filter((x) => x != +e.target.id[1]);
    } else if (counter.length < 2) {
      /* setTimeout(); */
      e.target.classList.add("active-button");
      buttonsO[e.target.id[1]] = true;
      counter.push(+e.target.id[1]);
    }
    [0, 1, 2, 3, 4, 5].map((x) => {
      gridItems.children[x].style.filter = "blur(0)";
    });

    let resultArr = Object.entries(buttonsO).filter((x) => x[1] === true);
    let result = [];
    for (let i = 0; i < resultArr.length; i++) {
      result.push(buttonsToGrid[resultArr[i][0]]);
    }
    result = result.flat();
    let blured = [];
    for (let i = 0; i < gridItems.children.length; i++) {
      if (result.includes(i)) {
        continue;
      }
      blured.push(i);
    }
    blured.map((x) => {
      gridItems.children[x].style.filter = "blur(3px)";
    });

    if (blured.length === 6) {
      [0, 1, 2, 3, 4, 5].map((x) => {
        gridItems.children[x].style.filter = "blur(0)";
      });
    }
  });
};

export default gardenBlur;
