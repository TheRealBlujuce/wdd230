// make sure we have defined the important stuff
const selectElements = document.querySelectorAll('select');
const url = './fruit-data.json';
let fruitData;

const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();

const popup = document.getElementById('popup');
const popupContent = document.getElementById('popup-content');
const popupMessage = document.getElementById('popup-message');
const popupClose = document.getElementById('popup-close');

// Add an event listener to the form to handle submissions
// const form = document.querySelector("form");
// form.addEventListener("click", handleFormSubmit);


// get the data from the json
fetch('fruit-data.json')
  .then(response => response.json())
  .then(data => fruitData = data)
  .catch(error => console.error('Error retrieving fruit data:', error));


fetch('fruit-data.json')
  .then(response => response.json())
  .then(data => {
    fruitData = data;
    data.forEach(fruit => {
      selectElements.forEach(select => {
        const option = document.createElement('option');
        option.textContent = fruit.name;
        option.value = fruit.id;
        select.appendChild(option);
      });
    });
  })
  .catch(error => console.error(error));


// Function to calculate nutritional information based on selected fruits
function calculateNutrition(fruit1, fruit2, fruit3) {
  // Get nutritional information for each fruit
  const nut1 = fruitData[fruit1].nutritions;
  const nut2 = fruitData[fruit2].nutritions;
  const nut3 = fruitData[fruit3].nutritions;
  
  // Calculate total nutritional information
  const totalCarbs = nut1.carbohydrates + nut2.carbohydrates + nut3.carbohydrates;
  const totalProtein = nut1.protein + nut2.protein + nut3.protein;
  const totalFat = nut1.fat + nut2.fat + nut3.fat;
  const totalSugar = nut1.sugar + nut2.sugar + nut3.sugar;
  const totalCalories = nut1.calories + nut2.calories + nut3.calories;

  return {
    totalCarbs,
    totalProtein,
    totalFat,
    totalSugar,
    totalCalories
  };
}

// function to validate the form
function validateForm() {
  const form = document.getElementById("order-form");
  const inputs = form.querySelectorAll("input, select, textarea");
  
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].value) {
      showPopup('Please fill out all fields before submitting.');
      return false;
    }
  }
  
  return true;
}

// Function to display order information in output card
function displayOrderInfo() {

  if (validateForm()){
    const firstName = document.getElementById('first-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruit-1').value;
    const fruit2 = document.getElementById('fruit-2').value;
    const fruit3 = document.getElementById('fruit-3').value;
    const instructions = document.getElementById('special-instructions').value;

    const nutrition = calculateNutrition(fruit1, fruit2, fruit3);

    const orderfirstName = document.getElementById('order-first-name');
    const orderemail = document.getElementById('order-email');
    const orderphone = document.getElementById('order-phone');
    const orderfruit1 = document.getElementById('order-fruit-1');
    const orderfruit2 = document.getElementById('order-fruit-2');
    const orderfruit3 = document.getElementById('order-fruit-3');
    const orderinstructions = document.getElementById('order-special-instructions');
    const orderdate = document.getElementById('order-date');
    const ordercarbs = document.getElementById('order-total-carbs');
    const orderprotein = document.getElementById('order-total-protein');
    const orderfat = document.getElementById('order-total-fat');
    const ordersugar = document.getElementById('order-total-sugar');
    const ordercalories = document.getElementById('order-total-calories');
    
    // assign values to the detail card
    orderfirstName.innerHTML = firstName;
    orderemail.innerHTML = email;
    orderphone.innerHTML = phone;
    orderfruit1.innerHTML = fruitData[fruit1].name;
    orderfruit2.innerHTML = fruitData[fruit2].name;
    orderfruit3.innerHTML = fruitData[fruit3].name;
    orderinstructions.innerHTML = instructions;
    orderdate.innerHTML = month + "/" + day + "/" + year;

    ordercarbs.innerHTML = nutrition.totalCarbs;
    orderprotein.innerHTML = nutrition.totalProtein;
    orderfat.innerHTML = nutrition.totalFat;
    ordersugar.innerHTML = nutrition.totalSugar;
    ordercalories.innerHTML = nutrition.totalCalories;

    handleFormSubmit();

  }
}

// function to show the pop up

function showPopup(message) {
  popupMessage.textContent = message;
  popup.style.display = 'block';
}

function hidePopup() {
  popup.style.display = 'none';
}

popupClose.addEventListener('click', hidePopup);
popup.addEventListener('click', function (event) {
  if (event.target === popup) {
    hidePopup();
  }
});

// save data to local storage

// Function to handle the form submission and store the drink count in localStorage
function handleFormSubmit() {
  // event.preventDefault();
  // const form = event.target;
  const drinkCount = localStorage.getItem("specialtyDrinkCount");
  localStorage.setItem("specialtyDrinkCount", (drinkCount ? parseInt(drinkCount) + 1 : 1));
  // form.reset();
  
}

