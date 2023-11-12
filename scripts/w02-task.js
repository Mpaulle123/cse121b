/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "MAHOUANGOU Paulle";

let currentYear = new Date().getFullYear();

let profilePicture = "images/Profile.jpg";

/* Step 3 - Element Variables */

const nameElement = document.querySelector("#name");

const foodElement = document.querySelector("#food");

const yearElement = document.querySelector("#year");

const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */

nameElement.innerHTML = "<strong>" + fullName + "</strong>";

yearElement.textContent = currentYear;

imageElement.setAttribute("src", profilePicture);

imageElement.setAttribute("alt", "Profile Image of " + fullName);

/* Step 5 - Array */

let favoriteFood = ["chiken", "fish", "pasta", "rice"];

foodElement.textContent = favoriteFood.join(", ");

/*I add a new element in my list of foods*/
let additionnalFood = "banana cake";
favoriteFood.push(additionnalFood);
foodElement.innerHTML += "<br>" + favoriteFood;

/*I remove the first element of my list*/
favoriteFood.shift();
foodElement.innerHTML += "<br>" + favoriteFood;

/*I remove the last element of my list*/
favoriteFood.pop();
foodElement.innerHTML += "<br>" + favoriteFood;
