let accordeon = function (windowW) {
  const accordion = document.querySelector(".section4__prandcont-prices-block");
  let q = [];
  accordion.addEventListener("click", (e) => {
    if (windowW < 768) {
      accordion.style.height = "260px";
      document.querySelector(".section4").style.height = "563px";
    }
    if (e.target.tagName === "IMG") {
      q.push(+e.target.id);
      accordion.children[q.at(-1)].classList.add("active");
      accordion.children[q.at(-1)].children[0].children[0].children[1].src =
        "../dist/assets/desktop/section4/images/a_btn-active.png";
      accordion.children[q.at(-1)].children[0].children[1].style.display =
        "block";
      accordion.children[q.at(-1)].children[0].style.height = "inherit";
      accordion.children[q.at(-1)].children[0].children[0].style.borderBottom =
        "0.5px solid #AEA1A1";
      if (accordion.children[q.at(-2)].classList.contains("active")) {
        accordion.children[q.at(-2)].classList.remove("active");
        accordion.children[q.at(-2)].children[0].children[0].children[1].src =
          "../dist/assets/desktop/section4/images/a_btn.png";
        accordion.children[q.at(-2)].children[0].children[1].style.display =
          "none";
        accordion.children[
          q.at(-2)
        ].children[0].children[0].style.borderBottom = "";
      }
    }
  });
};

export default accordeon;
