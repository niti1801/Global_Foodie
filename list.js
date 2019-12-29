const url = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood";

const meallist = document.getElementById("meals");

fetch(url)
  .then(data => {
    return data.json();
  })
  .then(meals => {
    for (let meal of meals.meals) {
      meallist.insertAdjacentHTML(
        "beforeend",
        `<li>${meal.strMeal}<img src="${meal.strMealThumb}"/></li>`
      );
    }
  });
