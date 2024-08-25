// Meal Maker
// As a note, this project originally came from Codecademy but we've edited it a bit.

// Intro
// As a frequent diner, you love trying out new restaurants and experimenting with different foods. However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, and you want an easier way to be able to figure out what you are going to eat.

// In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!

// Step 1
// Start by creating an empty menu object.

// let menu = {};

// Step 2
// Add a courses property to your menu object and set its value to an empty object. This property will ultimately contain a mapping between each course and the dishes available to order in that course.

// let menu = {
//   courses: {},
// };

// Step 3
// Create three properties inside the courses object called appetizers, mains, and desserts. Each one of these should initialize to an empty array.

// let menu = {
//   courses: {
//     appetizers: [],
//     mains: [],
//     desserts: [],
//   },
// };

// Step 4
// Inside the menu object, we are going to create a method called .addDishToCourse() which will be used to add a new dish to the specified course on the menu.

// The method should take in three parameters: the courseName, the dishName , and the dishPrice.

let menu = {
  courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  // Step 5
  // The .addDishToCourse() method should create an object called dish which has a name and price which it gets from the parameters.
  addDishToCourse: function (courseName, dishName, dishPrice) {
    const dish = {
      courses: courseName,
      name: dishName,
      price: dishPrice,
    };
    // The method should then push this dish object into the appropriate array in your menu‘s courses object based on what courseName was passed in.
    this.courses[courseName].push(dish);
  },
  // Step 6
  // Now, we’re going to need another function which will allow us to get a random dish from a course on the menu, which will be necessary for generating a random meal.

  // Create a method inside the menu object called .getRandomDishFromCourse(). It will take in one parameter which is the courseName.
  getRandomDishFromCourse: function (courseName) {
    // Step 7
    // There are a few steps in getting the .getRandomDishFromCourse() to work:

    // Retrieve the array of the given course’s dishes from the menu‘s courses object and store in a variable called dishes.
    const dishes = this.courses[courseName];
    // Generate a random index by multiplying Math.random() by the length of the dishes array (This will guarantee that the random number will be between 0 and the length of the array).
    // Round that generated number to a whole number by using Math.floor() on the result.
    const randomIndex = Math.floor(Math.random() * dishes.length);
    // Return the dish located at that index in dishes.
    return dishes[randomIndex];
  },
  // Step 8
  // Now that we have a way to get a random dish from a course, we can create a .generateRandomMeal() function which will automatically generate a three-course meal for us. The function doesn’t need to take any parameters.

  // The function should create an appetizer variable which should be the result of calling the .getRandomDishFromCourse() method when we pass in an 'appetizers' string to it.

  // Create a main variable and dessert variable the same way you created the appetizer variable, but make sure to pass in the right course type.

  // The function should calculate the total price and return a string that contains the name of each of the dishes and the total price of the meal, formatted as you like.
  generateRandomMeal: function () {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, and ${
      dessert.name
    }. The total price is $${totalPrice.toFixed(2)}.`;
  },
};

// Step 9
// Now that we’ve finished our menu, object, let’s use it to create a menu by adding some appetizers, mains, and desserts with the .addDishToCourse() function. Add at least 3 dishes to each course (or more if you like!).

menu.addDishToCourse("appetizers", "Caesar Salad", 4.25);
menu.addDishToCourse("appetizers", "Bruschetta", 4.5);
menu.addDishToCourse("appetizers", "Garlic Bread", 4.75);
menu.addDishToCourse("mains", "Steak", 18.99);
menu.addDishToCourse("mains", "Chicken Parmesan", 17.5);
menu.addDishToCourse("mains", "Spaghetti Bolognese", 16.5);
menu.addDishToCourse("desserts", "Cheesecake", 6.5);
menu.addDishToCourse("desserts", "Ice Cream", 5.5);
menu.addDishToCourse("desserts", "Tiramisu", 6.5);

console.log(menu);

// Step 10
// Once your menu has items inside it, generate a meal by using the .generateRandomMeal() function on your menu, and save it to a variable called meal. Lastly, print out your meal variable to see what meal was generated for you.

const meal = menu.generateRandomMeal();
console.log(meal);

// Step 11
// Submit your project
