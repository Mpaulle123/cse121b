/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
  name: "Paulle Mahouangou",
  photo: "images/Profile.jpg",
  favoriteFoods: ["Rice", "Chicken", "Saka-saka", "beans"],
  hobbies: ["Listen to music", "Walk", "Dance", "Sing"],
  placesLived: [],
};

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
  {
    place: "Brazzaville, Republic of Congo",
    length: "10 years",
  },
  {
    place: "Pointe-noire, Republic of Congo",
    length: "5 years",
  },
  {
    place: "Paris, France",
    length: "2 years",
  }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
document
  .querySelector("#photo")
  .setAttribute("alt", "Profile Image of " + myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement("li");
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobby) => {
  let li = document.createElement("li");
  li.textContent = hobby;
  document.querySelector("#hobbies").appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((place) => {
  let dt = document.createElement("dt");
  dt.textContent = place.place;
  let dd = document.createElement("dd");
  dd.textContent = place.length;
  document.querySelector("#places-lived").appendChild(dt);
  document.querySelector("#places-lived").appendChild(dd);
});