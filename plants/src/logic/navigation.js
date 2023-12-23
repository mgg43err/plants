// navigation menu
let navigation = function () {
    let navigation = document.querySelector(
      "body > div.wrapper > header > div > div > nav > img"
    );
    navigation.addEventListener("click", (e) => {
      if (e.target.previousElementSibling.style.opacity != "1") {
        e.target.previousElementSibling.style.opacity = "1";
        e.target.style.paddingLeft = "10px";
        document.querySelector(
          "body > div > header > div > div > nav > img"
        ).src = "./assets/mobile/header/images/cancel.png";
  
        console.log(
          document.querySelector("body > div > header > div > div > nav > img")
        );
      } else if (e.target.previousElementSibling.style.opacity === "1") {
        document.querySelector(
          "body > div > header > div > div > nav > img"
        ).src = "./assets/mobile/header/images/burger.png";
        e.target.previousElementSibling.style.opacity = "0";
      }
    });
  
    document
      .querySelector("body > div > header > div > div > nav > ul")
      .addEventListener("click", (e) => {
        if (windowW < 768) {
          document.querySelector(
            "body > div > header > div > div > nav > ul"
          ).style.opacity = "0";
        }
      });
  };

  export default navigation;