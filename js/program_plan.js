const months = [
    {title: `1 Month`, price: 149.00},
    {title: `3 Month`, price: 447.00},
    {title: `6 Month`, price: 894.00},
]

const refs = {
  dropdownButton: document.querySelector('#dropBtn'),
  dropdownMenu: document.querySelector('#month_list'),
  costOrder: document.querySelector('.js-cost-order'),
}

console.log(refs.costOrder);

// let price = 0;
let selectedMonth = months[0];

// refs.dropdownButton.textContent = month[0].title
// const countryList = createMonthList(month)
// refs.dropdownMenu.innerHTML = countryList

refs.dropdownButton.textContent = selectedMonth.title;
const monthList = createMonthList(months);
refs.dropdownMenu.innerHTML = monthList;

function createMonthList (monthList) {
    return monthList.map(month => `<li class="dropdown-item">${month.title}</li>`).join('');
} 

function openDropdown() {
    refs.dropdownMenu.style.display = 'block';
}
  
  // Функція для закриття випадаючого вікна
function closeDropdown() {
    refs.dropdownMenu.style.display = 'none';
}

refs.dropdownButton.addEventListener('click', () => {
  if (refs.dropdownMenu.style.display === 'block') {
    closeDropdown();
  } else {
    openDropdown();
  }
});

refs.dropdownMenu.addEventListener('click', onMonthListClick);

function onMonthListClick(event) {
  const selectedTitle = event.target.textContent;
  console.log(selectedTitle);
  selectedMonth = months.find((month) => month.title === selectedTitle);
  console.log(selectedMonth);
  refs.dropdownButton.textContent = selectedTitle;
  calculateCost();
}

function calculateCost() {
  const price = selectedMonth.price;
  refs.costOrder.textContent = `$${price}.00`;
  refs.costOrder.style.fontSize = "40px"
  refs.costOrder.style.fontWeight = "500"
  refs.costOrder.style.color = "#09080D"
}

refs.dropdownMenu.style.display = 'none';

calculateCost(); // Обчислюємо початкову суму


// refs.dropdownMenu.addEventListener('click', onMonthListClick)

// function onMonthListClick (event) {
//     refs.dropdownButton.textContent = event.target.textContent
//     switch (refs.dropdownButton.textContent) {
//         case `1 Month`: 
//             price = 149.00; 
//             break;
//         case `3 Month`: 
//             price = 447.00; 
//             break;
//         case `6 Month`: 
//             price = 894.00; 
//             break;
//         default:
//             price = 0; 
//     }
//     console.log(price);
// }

// function calculateCost() {
//   const price = selectedMonth.price;
//   refs.costOrder.textContent = `Total: ${price} /Month`;
// }

// calculateCost()