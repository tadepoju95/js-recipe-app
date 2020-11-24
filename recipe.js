let fetchRecipes = () => {
	axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => {
            let recipes = response.data;
            //console.log(`GET recipes`, recipes);
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
	let videoUrl = JSON.stringify(getMeals.strYoutube);
	video(videoUrl);
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

let video = (videoUrl) => {
	if(videoUrl !== "\"\"" ) {
      setVideoButton = "<a href=" + videoUrl + " target='_blank'><button id='videoElement'>" + "watch video" + "</button></a>"
	  document.getElementById('getVideo').innerHTML = setVideoButton;
    } else {
      setVideoButton = "<button id='videoElement'>" + "video unavailable" + "</button>"
      document.getElementById('getVideo').innerHTML = setVideoButton;
    }
}

let getRecipe = () => {
	fetchRecipes();
}