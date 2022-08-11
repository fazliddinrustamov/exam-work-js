// // first section

let elPizzaForm = document.querySelector(".pizza__form");
let elPizzaSelectWide = document.querySelector(".bread__selection");
let elPizzaSelectWideResult = document.querySelector(".result-bread__text");

let elSizeResult = document.querySelector(".result-size__text");

let elFirstSize = document.querySelector(".size__radio-first");
let elSecondSize = document.querySelector(".size__radio-second");
let elThirdSize = document.querySelector(".size__radio-third");

const elFirstSizeContainValue = "25 cm";
const elSecondSizeContainValue = "30 cm";
const elThiedSizeContainValue = "35 cm";

elPizzaSelectWide.addEventListener("click", function(evt){
  evt.preventDefault();

  let pizzaSelectWideValue = elPizzaSelectWide.value;

  if (pizzaSelectWideValue == "thick") {
    elPizzaSelectWideResult.textContent = "Thick";
  } else if (pizzaSelectWideValue == "middle") {
    elPizzaSelectWideResult.textContent = "Middle";
  } else if (pizzaSelectWideValue == "thin") {
    elPizzaSelectWideResult.textContent = "Thin";
  };
});

// // second section

elFirstSize.addEventListener("click", function(evt){
  evt.preventDefault();

  if (elFirstSize.checked == true) {
    elSizeResult.textContent = elFirstSizeContainValue;
  };
});

elSecondSize.addEventListener("click", function(evt){
  evt.preventDefault();

  if (elSecondSize.checked == true) {
    elSizeResult.textContent = elSecondSizeContainValue;
  };
});

elThirdSize.addEventListener("click", function(evt){
  evt.preventDefault();

  if (elThirdSize.checked == true) {
    elSizeResult.textContent = elThiedSizeContainValue;
  };
});

// // third section

let elResultListLeft = document.querySelector(".result-surface__list-left");
let elResultListRight = document.querySelector(".result-surface__list-right");

// Tomato value function

let elTomato = document.querySelector(".box__check-tomato");
let elTomatoResult = document.createElement("li");

elTomato.addEventListener("change", function(evt){
  evt.preventDefault();

  if (elTomato.checked == true) {
    elTomatoResult.textContent = elTomato.value;
    elResultListLeft.appendChild(elTomatoResult);
  } else {
    elResultListLeft.removeChild(elTomatoResult);
  }
});

// Meat value function

let elMeat = document.querySelector(".box__check-meat");
let elMeatResult = document.createElement("li");

elMeat.addEventListener("change", function(evt){
  evt.preventDefault();

  if (elMeat.checked == true) {
    elMeatResult.textContent = elMeat.value;
    elResultListLeft.appendChild(elMeatResult);
  } else {
    elResultListLeft.removeChild(elMeatResult);
  }
});

// Cheese value function

let elCheese = document.querySelector(".box__check-cheese");
let elCheeseResult = document.createElement("li");

elCheese.addEventListener("change", function(evt){
  evt.preventDefault();

  if (elCheese.checked == true) {
    elCheeseResult.textContent = elCheese.value;
    elResultListLeft.appendChild(elCheeseResult);
  } else {
    elResultListLeft.removeChild(elCheeseResult);
  }
});

// Hen value function

let elHen = document.querySelector(".box__check-hen");
let elHenResult = document.createElement("li");

elHen.addEventListener("change", function(evt){
  evt.preventDefault();

  if (elHen.checked == true) {
    elHenResult.textContent = elHen.value;
    elResultListRight.appendChild(elHenResult);
  } else {
    elResultListRight.removeChild(elHenResult);
  }
});

// Cucumber value function

let elCucumber = document.querySelector(".box__check-cucumber");
let elCucumberResult = document.createElement("li");

elCucumber.addEventListener("change", function(evt){
  evt.preventDefault();

  if (elCucumber.checked == true) {
    elCucumberResult.textContent = elCucumber.value;
    elResultListRight.appendChild(elCucumberResult);
  } else {
    elResultListRight.removeChild(elCucumberResult);
  }
});

// Mushrooms value function

let elMushrooms = document.querySelector(".box__check-mushrooms");
let elMushroomsResult = document.createElement("li");

elMushrooms.addEventListener("change", function(evt){
  evt.preventDefault();

  if (elMushrooms.checked == true) {
    elMushroomsResult.textContent = elMushrooms.value;
    elResultListRight.appendChild(elMushroomsResult);
  } else {
    elResultListRight.removeChild(elMushroomsResult);
  }
});

// 4th section 

let elResultListAdditions = document.querySelector(".result-additions__list");

// Spicy value function

let elSpicy = document.querySelector(".additions__check-spicy");
let elSpicyResult = document.createElement("li");

elSpicy.addEventListener("change", function(evt){
  evt.preventDefault();

  if (elSpicy.checked == true) {
    elSpicyResult.textContent = elSpicy.value;
    elResultListAdditions.appendChild(elSpicyResult);
  } else {
    elResultListAdditions.removeChild(elSpicyResult);
  }
});

// Tasty value function

let elTasty = document.querySelector(".additions__check-tasty");
let elTastyResult = document.createElement("li");

elTasty.addEventListener("change", function(evt){
  evt.preventDefault();

  if (elTasty.checked == true) {
    elTastyResult.textContent = elTasty.value;
    elResultListAdditions.appendChild(elTastyResult);
  } else {
    elResultListAdditions.removeChild(elTastyResult);
  }
});

// Pineapple value function

let elPineapple = document.querySelector(".additions__check-pineapple");
let elPineappleResult = document.createElement("li");

elPineapple.addEventListener("change", function(evt){
  evt.preventDefault();

  if (elPineapple.checked == true) {
    elPineappleResult.textContent = elPineapple.value;
    elResultListAdditions.appendChild(elPineappleResult);
  } else {
    elResultListAdditions.removeChild(elPineappleResult);
  }
});

// Final button

let finalButton = document.querySelector(".order__button");
let textSaver = document.querySelector(".final__text-saver");

finalButton.addEventListener("click", function(evt){
  evt.preventDefault();

  textSaver.textContent = "You ordered pizza successfully!"
});

finalButton.addEventListener("dblclick", function(evt){
  evt.preventDefault();

  textSaver.textContent = "Your order was reset!"
});