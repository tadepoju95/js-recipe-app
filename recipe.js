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
	let getInstructions = document.getElementById('instructions').innerHTML = getMeals.strInstructions;
	let grabVideo = getMeals.strYoutube;
	let createElement = "<button onclick='video("+ JSON.stringify(grabVideo) + ")' id='videoElement'>" + "watch Video"  + "</button>" 
    let displayVideoButton = document.getElementById('getVideo').innerHTML = createElement;
    let setIngredients = document.getElementById('listIngredients');
    let ulElement = '<ul>';
   	for(let i = 1; i <= 20; i++) {
   		if(getMeals[`strIngredient${i}`]) {
   			ulElement += '<li>' + `${getMeals[`strIngredient${i}`]} - ${getMeals[`strMeasure${i}`]}` + '</li>';
   		}
   	}
   	 ulElement += '</ul>'
	 setIngredients.innerHTML = ulElement;
}

let video = (grabVideo) => {
	if(grabVideo !== '') {
		window.open(grabVideo);

	} else {
		document.getElementById('setInnerhtml').innerHTML = 'Video Unavailable';
	}
}

let getRecipe = () => {
	fetchRecipes();
	document.getElementById('setInnerhtml').innerHTML = '';

}