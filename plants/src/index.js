import navigation from "./logic/navigation";
import contactsData from "./logic/contactsData";
import changeNavsectionColor from "./logic/changeNavscetionColor";
import accordeon from "./logic/accordeon";
import gardenBlur from "./logic/gardenBlur";

let windowW = window.innerWidth;

let contacts = function (contactsData) {
  let contacts = document.querySelector(
    "#sect5 > div > div > div.section5__wofm-form"
  );
  let contactsDropdown = document.querySelector(
    "div.section5__wofm-form-container-dropdown"
  );

  let addresses = Object.entries(contactsData)
    .map((x) => (x = x[1].city))
    .sort();
  let divs = [];
  addresses.map((x, i) => {
    let div = document.createElement("div");
    div.classList.add("chooseCity");
    let text = document.createTextNode(x);
    let innerDiv = document.createElement("div");
    innerDiv.appendChild(text);
    div.appendChild(innerDiv);
    divs.push(div);
    if (i === 0) {
      divs[i].style.display = "none";
    }
  });

  document
    .querySelector("div.section5__wofm-form > div > button > img")
    .addEventListener("click", function (e) {
      if (contacts.classList.contains("active")) {
        contacts.classList.remove("active");
        contactsDropdown.style.display = "none";
        e.target.src = "./assets/desktop/section5/images/a_btn.png";

        if (windowW < 768) {
          document.querySelector(
            "#sect5 > div > div > div.section5__wofm-woman > picture"
          ).style.display = "block";
          document.querySelector(
            "#sect5 > div > div > div.section5__wofm-form"
          ).style.paddingBottom = "0";
        }
      } else {
        if (document.querySelector("div.section5__wofm-form-result")) {
          document.querySelector(
            "div.section5__wofm-form-result"
          ).style.display = "none";
        }
        contacts.classList.add("active");
        contactsDropdown.style.display = "block";
        e.target.src = "./assets/desktop/section5/images/a_btn-active.png";
        let container = document.querySelector(
          "div.section5__wofm-form-container-dropdown-choose"
        );
        divs.map((x) => {
          x.children[0].style.cursor = "pointer";
          container.appendChild(x);
        });
        let placeholder = document.querySelector(
          "div.section5__wofm-form-container-dropdown-edit > input[type=text]"
        );
        placeholder.placeholder = addresses[0];
        let val = [];
        placeholder.addEventListener("input", (e) => {
          let ch = document.querySelector(
            "div.section5__wofm-form-container-dropdown-choose"
          );
          val.push(e.target.value);
          let compAddresses = Object.entries(contactsData)
            .map((x) => (x = x[1].city.toUpperCase()))
            .sort();
          for (let i = 0; i < 5; i++) {
            if (
              val.at(-1) !== undefined &&
              compAddresses[i] !== undefined &&
              compAddresses[i].includes(val.at(-1).toUpperCase())
            ) {
              ch.children[i].style.display = "block";
            } else if (ch.children[i] !== undefined) {
              ch.children[i].style.display = "none";
              document.querySelector(
                "div.section5__wofm-form-container-dropdown-choose"
              ).style.display = "block";
            }
          }
        });
        let choosedCity = [];
        //debugger;
        if (windowW < 768 && windowW > 380) {
          document.querySelector("#sect5 > div > div").style.height = `${
            windowW - windowW * 0.83
          }%`;
          if (
            document.querySelector(
              "#sect5 > div > div > div.section5__wofm-woman > picture"
            ).style.display === "none"
          ) {
            document.querySelector("#sect5 > div > div").style.height = `${
              windowW - windowW * 0.83
            }%`;
          } else {
            document.querySelector(
              "#sect5 > div > div > div.section5__wofm-woman > picture"
            ).style.display = "none";
          }
        }
        if (windowW < 768 && windowW > 480) {
          document.querySelector("#sect5 > div > div").style.height = `${
            windowW - windowW * 0.93
          }%`;
          if (
            document.querySelector(
              "#sect5 > div > div > div.section5__wofm-woman > picture"
            ).style.display === "none"
          ) {
            document.querySelector("#sect5 > div > div").style.height = `${
              windowW - windowW * 0.93
            }%`;
          } else {
            document.querySelector(
              "#sect5 > div > div > div.section5__wofm-woman > picture"
            ).style.display = "none";
          }
        }
        if (windowW <= 380) {
          document.querySelector("#sect5 > div > div").style.height = `${
            windowW - windowW * 0.85
          }%`;
          if (
            document.querySelector(
              "#sect5 > div > div > div.section5__wofm-woman > picture"
            ).style.display === "none"
          ) {
            document.querySelector("#sect5 > div > div").style.height = `${
              windowW - windowW * 0.85
            }%`;
          } else {
            document.querySelector(
              "#sect5 > div > div > div.section5__wofm-woman > picture"
            ).style.display = "none";
          }
        }

        let city = document.querySelector(
          "#sect5 > div > div > div.section5__wofm-form > div.section5__wofm-form-container > p"
        );
        document
          .querySelector("div.section5__wofm-form-container-dropdown-choose")
          .addEventListener("click", (e) => {
            if (windowW < 768 && windowW > 380) {
              document.querySelector("#sect5 > div > div").style.height = `${
                windowW - windowW * 0.87
              }%`;
              if (
                document.querySelector(
                  "#sect5 > div > div > div.section5__wofm-woman > picture"
                ).style.display === "none" &&
                document.querySelector(
                  "#sect5 > div > div > div.section5__wofm-form > div.section5__wofm-form-result"
                ).style.display === "flex"
              ) {
                document.querySelector("#sect5 > div > div").style.height = `${
                  windowW - windowW * 0.87
                }%`;
              }
            }
            if (windowW < 768 && windowW > 480) {
              document.querySelector("#sect5 > div > div").style.height = `${
                windowW - windowW * 0.93
              }%`;
              if (
                document.querySelector(
                  "#sect5 > div > div > div.section5__wofm-woman > picture"
                ).style.display === "none" &&
                document.querySelector(
                  "#sect5 > div > div > div.section5__wofm-form > div.section5__wofm-form-result"
                ).style.display === "flex"
              ) {
                document.querySelector("#sect5 > div > div").style.height = `${
                  windowW - windowW * 0.93
                }%`;
              }
            }
            if (windowW <= 380 && windowW > 320) {
              document.querySelector("#sect5 > div > div").style.height = `${
                windowW - windowW * 0.86
              }%`;
              if (
                document.querySelector(
                  "#sect5 > div > div > div.section5__wofm-woman > picture"
                ).style.display === "none" &&
                document.querySelector(
                  "#sect5 > div > div > div.section5__wofm-form > div.section5__wofm-form-result"
                ).style.display === "flex"
              ) {
                document.querySelector("#sect5 > div > div").style.height = `${
                  windowW - windowW * 0.86
                }%`;
              }
            }
            if (windowW === 768) {
              document.querySelector(
                "#sect5 > div > div > div.section5__wofm-form "
              ).style.marginTop = "77px";
              document.querySelector(
                "#sect5 > div > div > div.section5__wofm-form "
              ).style.marginBottom = "214px";
            }

            if (windowW === 320) {
              document.querySelector("#sect5 > div > div").style.height = `${
                windowW / 10
              }%`;
            }

            choosedCity.push(e.target.textContent);
            if (choosedCity[0].length < 20) {
              if (choosedCity.at(-1).length < 51) {
                city.innerText = choosedCity.at(-1);
              } else if (choosedCity.at(-1).length >= 30) {
                city.innerText = "City";
              }
            }
            contacts.classList.remove("active");
            contactsDropdown.style.display = "none";
            document.querySelector(
              "div.section5__wofm-form-container > button > img"
            ).src = "./assets/desktop/section5/images/a_btn.png";
            for (let key in contactsData) {
              if (contactsData[key].city === choosedCity.at(-1)) {
                let result = document.querySelector(
                  "div.section5__wofm-form-result"
                );
                result.children[3].children[0].children[0].href = `tel:${contactsData[
                  key
                ].phone
                  .split("")
                  .filter((x) => x != "\t" && x != " ")
                  .join("")}`;
                result.style.display = "flex";
                result.children[0].children[1].innerText =
                  contactsData[key].city;
                result.children[1].children[1].innerText =
                  contactsData[key].phone;
                result.children[2].children[1].innerText =
                  contactsData[key].ofAdress;
              }
            }
            if (windowW < 1200) {
              document.querySelector(
                "#sect5 > div > div > div.section5__wofm-form"
              ).style.paddingBottom = "0px";
            }
          });
      }
    });
};

console.log(`
Ваша оценка - 125 баллов 
Отзыв по пунктам ТЗ:
Выполненные пункты:
1) При выборе одной услуги (нажатии одной кнопки), остальные карточки услуг принимают эффект blur, выбранная услуга остается неизменной 

2) Пользователь может нажать одновременно две кнопки услуги, тогда эта кнопка тоже принимает стиль активной и карточки с именем услуги выходят из эффекта blur. При этом пользователь не может нажать одновременно все три кнопки услуг 

3) Анимации плавного перемещения кнопок в активное состояние и карточек услуг в эффект blur 

4) При нажатии на dropdown кнопку появляется описание тарифов цен в соответствии с макетом. Внутри реализована кнопка order, которая ведет на секцию contacts, при нажатии на нее Accordion все еще остается открытым 

5) Пользователь может самостоятельно закрыть содержимое нажав на кнопку dropup, но не может одновременно открыть все тарифы услуг, при открытии нового тарифа предыдущее автоматически закрывается 

6) В зависимости от выбора пользователя появляется блок с адресом и телефоном офиса в определенном городе 

7) При нажатии на кнопку Call us реализован вызов по номеру, который соответствует выбранному городу
`);
gardenBlur();
accordeon(windowW);
changeNavsectionColor();
contacts(contactsData);
navigation();
