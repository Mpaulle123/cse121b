/* Persol project*/
/* I want to display some images of dogs that the user can filter to have specific images/ 

/* here are my variables */
const dogsElement = document.querySelector("#dogs");
let dogsList = [];

/* async displayTemples Function */
const displayDogs = (dogs) => {
  dogs.forEach((dog) => {
    let article = document.createElement("article");

    let animalName = document.createElement("h3");
    animalName.textContent = dog.animalName;

    let img = document.createElement("img");
    img.setAttribute("src", dog.imageUrl);
    img.setAttribute("alt", dog.animalName);

    article.appendChild(animalName);
    article.appendChild(img);
    dogsElement.appendChild(article);
  });
};

/* async getTemples Function using fetch()*/

const getDogs = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/1573a60d-e1f3-4d7c-bec7-0514e75c8a27"
  )
    .then((response) => response.json())
    .then((dogs) => {
      dogsList = dogs;
      displayDogs(dogsList);
    });
};
/* reset Function */
const reset = () => {
  document.querySelector("#dogs").innerHTML = "";
};

/* sortBy Function */
const sortBy = (dogs) => {
  reset();

  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    
    case "dogface":
      displayDogs(dogs.filter((dog) => dog.caracteristique.includes("face")));

      break;
    case "dogingarden":
      displayDogs(dogs.filter((dog) => dog.caracteristique.includes("Garden")));

      break;
    case "catface":
      displayDogs(dogs.filter((dog) => dog.caracteristique.includes("Face")));

      break;
    case "catingarden":
      displayDogs(dogs.filter((dog) => dog.caracteristique.includes("garden")));

      break;

    case "all":
    default:
      displayDogs(dogs);
      break;
  }
};

getDogs();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {
  sortBy(dogsList);
});
