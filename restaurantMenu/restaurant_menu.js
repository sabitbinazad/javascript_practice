const breakfastMenu = ['Pancakes - 10$', 'Eggs Benedict - 15$', 'Oatmeal - 25$', 'Frittata - 10$'];
const mainCourseMenu = ['Steak - 15$', 'Pasta - 10$', 'Burger - 20$', 'Salmon - 15$'];
const dessertMenu = ['Cake - 15$', 'Ice Cream  - 10$', 'Pudding - 15$', 'Fruit Salad - 10$'];

//using map method
 const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
        document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// using forEach loop
let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

//using for loop
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;