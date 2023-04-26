/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const costPerDayFull = 35;
const costPerDayHalf = 20;
let numberOfDaysSelected = 0;
let dayCounter = {
monday: false,
tuesday: false,
wednesday: false,
thursday: false,
friday: false
};

const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const calculatedCostElement = document.getElementById('calculated-cost');
const clearButton = document.getElementById('clear-button');
const dayButtons = document.querySelectorAll('.day-selector li');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayButtons.forEach(dayButton => {
    dayButton.addEventListener('click', () => {
    const day = dayButton.id;
    if (!dayCounter[day]) {
    dayCounter[day] = true;
    numberOfDaysSelected++;
    dayButton.classList.add('clicked');
    } else {
    dayCounter[day] = false;
    numberOfDaysSelected--;
    dayButton.classList.remove('clicked');
    }
    calculateCost();
    });
    });



/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', () => {
    dayButtons.forEach(dayButton => {
    dayButton.classList.remove('clicked');
    });
    numberOfDaysSelected = 0;
    dayCounter = {
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: false
    };
    calculateCost();
    });




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', () => {
    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');
    calculateCost();
    });


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullDayButton.addEventListener('click', () => {
    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');
    calculateCost();
    });



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    const isHalfDay = halfDayButton.classList.contains('clicked');
    const costPerDay = isHalfDay ? costPerDayHalf : costPerDayFull;
    const totalCost = costPerDay * numberOfDaysSelected;
    calculatedCostElement.innerHTML = totalCost;
    }
    
    // Initialize cost calculation on page load
    calculateCost();
    
    
    
    
    
    
    
