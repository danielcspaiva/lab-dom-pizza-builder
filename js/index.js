// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll('.pep').forEach(onePep => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll('.mushroom').forEach(oneMush => {
    if (state.mushrooms) {
      oneMush.style.visibility = 'visible';
    } else {
      oneMush.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll('.green-pepper').forEach(oneGreenPepper => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(sauce => {
    if (state.whiteSauce) {
      sauce.setAttribute('class', 'sauce sauce-white');
      // sauce.style.visibility = 'visible';
    } else {
      sauce.setAttribute('class', 'sauce');
      // sauce.style.visibility = 'hidden';
    }
  });
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(crust => {
    if (state.glutenFreeCrust) {
      crust.setAttribute('class', 'crust crust-gluten-free');
      // crust.style.visibility = 'visible';
    } else {
      crust.setAttribute('class', 'crust')
      // crust.style.visibility = 'hidden';
    }
  });
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepButton = document.querySelector('.btn.btn-pepperoni');
  let mushButton = document.querySelector('.btn.btn-mushrooms');
  let greenButton = document.querySelector('.btn.btn-green-peppers');
  let sauceButton = document.querySelector('.btn.btn-sauce');
  let glutenButton = document.querySelector('.btn.btn-crust');

  if (state.pepperoni) {
    pepButton.setAttribute('class', 'btn btn-pepperoni active');
  } else {
    pepButton.setAttribute('class', 'btn btn-pepperoni');
  }

  if (state.mushrooms) {
    mushButton.setAttribute('class', 'btn btn-mushrooms active');
  } else {
    mushButton.setAttribute('class', 'btn btn-mushrooms');
  }

  if (state.greenPeppers) {
    greenButton.setAttribute('class', 'btn btn-green-peppers active');
  } else {
    greenButton.setAttribute('class', 'btn btn-green-peppers');
  }

  if (state.whiteSauce) {
    sauceButton.setAttribute('class', 'btn btn-sauce active');
  } else {
    sauceButton.setAttribute('class', 'btn btn-sauce');
  }

  if (state.glutenFreeCrust) {
    glutenButton.setAttribute('class', 'btn btn-crust active');
  } else {
    glutenButton.setAttribute('class', 'btn btn-crust');
  }

 }

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let prices = document.querySelector('aside.panel.price ul');
  prices.innerHTML = '';
  console.log(prices);
  let sum = basePrice;
  for (let val in ingredients) {
    if (state[val]) {
      sum += ingredients[val].price;
      prices.innerHTML += `<li> $ ${ingredients[val].price} ${ingredients[val].name} </li>`;
    }
  }
  document.querySelector('aside.panel.price strong').innerHTML = `$` + sum;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').addEventListener('click', () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').addEventListener('click', () => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').addEventListener('click', () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`\
document.querySelector('.btn.btn-crust').addEventListener('click', () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
