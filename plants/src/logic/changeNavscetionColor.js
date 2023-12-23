let changeNavsectionColor = function () {
  document
    .querySelector("body > div > header > div > div > nav > ul")
    .children[0].children[0].classList.add("navsection__nav-active");
  document
    .querySelector("body > div > header > div > div > nav > ul")
    .addEventListener("mouseover", function (e) {
      if (e.target.closest(".navsection__nav-active") === null) {
        let activeA = document.querySelector(".navsection__nav-active");
        activeA.classList.remove("navsection__nav-active");
      }
    });
};

export default changeNavsectionColor