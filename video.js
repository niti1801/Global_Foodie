const link = "https://www.themealdb.com/api/json/v1/1/random.php";

const thumbnail = document.getElementById("video");

fetch(link)
  .then(data => {
    return data.json();
  })
  .then(video => {
    for (let meal of video.meals) {
      thumbnail.insertAdjacentHTML(
        "beforeend",
        `<li>${meal.strMeal}, try this ${meal.strArea} ${meal.strCategory} dish today!
        <a href="${meal.strYoutube}">
          <img src="${meal.strMealThumb}"/> 
        </a>
        </li>`
      );
    }
  });
