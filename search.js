const button = document.querySelector("#button")
const header = document.querySelector("header")


  button.addEventListener("click", ()=> {
  const searchBox = document.getElementById("search").value;
  if(searchBox.length>=2){header.classList.add("smallheader")}})



const foodList = document.getElementById("results");

document.getElementById("search").addEventListener("change", doSearch);

function doSearch(event) {

 foodList.innerHTML = null;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${
    event.target.value
  }`;
  fetch(url)
  .then(data => {
      return data.json();
  })
    
  .then(results => {
    for (let meal of results.meals) {
      foodList.insertAdjacentHTML(
        "beforeend",
        `<li>${meal.strMeal}<img src="${meal.strMealThumb}"/></li>`
      );
    }
  });
}