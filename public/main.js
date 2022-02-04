let backbag = document.getElementById("backbag");
let shoes = document.getElementById("shoes");
let count1 = 1;
let count2 = 1;
let backbagCurrent = document.getElementById("backbagCurrent");
let backbagPrevius = document.getElementById("backbagPrevius");
let shoesCurrent = document.getElementById("shoesCurrent");
let shoesPrevius = document.getElementById("shoesPrevius");
let shipping = document.getElementById("shipping");
let total = document.getElementById("total");
let quantity = document.getElementById("units");

document
  .querySelector(".order")
  .addEventListener("click", function ({ target }) {
    if (target.tagName === "BUTTON" && target.getAttribute("id") == "up1") {
      count1++;
    } else if (
      target.tagName === "BUTTON" &&
      target.getAttribute("id") == "down1" &&
      count1 > 0
    ) {
      count1--;
    } else if (
      target.tagName === "BUTTON" &&
      target.getAttribute("id") == "up2"
    ) {
      count2++;
    } else if (
      target.tagName === "BUTTON" &&
      target.getAttribute("id") == "down2" &&
      count2 > 0
    ) {
      count2--;
    }
    let units = count1 + count2;
    let ship = 0;
    if (units === 0) {
      ship = 0;
    } else if (units <= 5) {
      ship = 19;
    } else if (units > 5) {
      ship = Math.ceil(units / 5) * 19;
    }
    backbag.textContent = count1;
    shoes.textContent = count2;
    backbagCurrent.textContent = (count1 * 54.99).toFixed(2);
    backbagPrevius.textContent = (count1 * 90.99).toFixed(2);
    shoesCurrent.textContent = (count2 * 74.99).toFixed(2);
    shoesPrevius.textContent = (count2 * 124.99).toFixed(2);
    total.textContent = (count1 * 54.99 + count2 * 90.99 + ship).toFixed(2);
    shipping.textContent = ship;
    quantity.textContent = units;
  });
