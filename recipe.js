let fetchRecipes = () => {
	axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            let recipes = response.data;
            console.log(`GET recipes`, recipes);
            displayRecipe(recipes);
            
        })
        .catch(error => console.error(error));
}


let displayRecipe = (recipes) => {
	let getMeals = recipes.meals[0];
	let getName = getMeals.strMeal;
	let divElement = document.getElementsByClassName('randomRecipe')[0].innerHTML = getName;
	let getImage = document.getElementById('myImg').src = getMeals.strMealThumb;
}


