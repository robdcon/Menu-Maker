

function Recipe()
 {
 	this.dishtitle;
 	this.img;
 	this.recipedescription;
 	this.allergens;
 	this.preptime;
 	this.cookingtime;
 	this.difficulty;
 	this.serves;
 	this.nutrition;
 	this.ingredients;
 	this.recipemethod;

 	this.getTitle = function()
 	{
 		var title = this.dishtitle;
 		return title;
 	}
 	this.setTitle = function(title)
 	{
 		this.dishtitle = title;
 	}
 	this.getImg = function()
 	{
 		return this.img
 	}
 	this.setImg = function(img)
 	{
 		this.img = img;
 	}
 	this.getDescription = function()
 	{
 		return this.description
 	}
 	this.setDescription = function(description)
 	{
 		this.description = description;
 	}
 	this.getAllergens = function()
 	{
 		return this.allergens;
 	}
 	this.setAllergens = function(allergens)
 	{
 		
 		this.allergens = allergens;
 	}
 	this.getServes = function()
 	{
 		return this.serves
 	}
 	this.setServes = function(serves)
 	{
 		this.serves = serves;
 	}
 	this.getPrepTime = function()
 	{
 		return this.preptime
 	}
 	this.setPrepTime = function(preptime)
 	{
 		this.preptime = preptime;
 	}
 	this.getCookingTime = function()
 	{
 		return this.cookingtime
 	}
 	this.setCookingTime = function(cookingtime)
 	{
 		this.cookingtime = cookingtime;
 	}
 	this.getDifficulty = function()
 	{
 		return this.difficulty
 	}
 	this.setDifficulty = function(difficulty)
 	{
 		this.difficulty = difficulty;
 	}
 	this.getNutrition = function()
 	{
 		return this.nutrition
 	}
 	this.setNutrition = function(nutrition)
 	{
 		this.nutrition = nutrition;
 	}
 	this.getIngredients = function()
 	{
 		return this.ingredients
 	}
 	this.setIngredients = function(ingredients)
 	{
 		this.ingredients = ingredients;
 	}
 	this.getMethod = function()
 	{
 		return this.method
 	}
 	this.setMethod = function(method)
 	{
 		this.method = method;
 	}

	
}
function getRecipeDetails(title)
{
	var recipetitle = title;
	var recipeobject = getRecipe(title);
	return recipeobject;
}

function loadRecipeList() 
{
	
	$('#recipetype').on('change focus',function() // When the option changes, execute the function to load the relevant cities
	{
		var option = ($(this).val());

		$.getScript('js/loadrecipes.js',function(){getRecipeList(option)});		

	})
}

// Recipe select area to load info for a chosen city

function loadRecipe() // When the option changes, execute the function to load the relevant city info
{
	$('#recipelist').on('change focus', function()
	{
		
		var option = ($(this).val());
		getRecipeDetails(option);


	})
}
function addSelectListeners()
{
	$('#recipetype').focus(function()
		{

			loadRecipeList();
			loadRecipe();
		})
}

function saveRecipe()
{	
	var recipeTitle = $('.recipe-heading').html()
	var recipeDescription = $('#description').html()
	var recipeUrl = $('#image img').attr('src')

	var recipe = 
	{
			'title': recipeTitle,
			'description': recipeDescription,
			'url': recipeUrl
	}
	// Ajax call to POST recipe details & save to database
	saveRecipeData()
	//$.getScript('js/ajax.js', function(){ saveRecipeData(recipe)})
}

function saveRecipeData(recipeData)
{

	$.post('php/saverecipe.php', recipeData)
	.done(function(response, recipeData)
	{
		alert('done')
		console.log(recipeData)
	})
	
	// $.post
	// ({
	// 	type:'POST',
	// 	url:'php/saverecipe.php',
	// 	data:data,
	// 	dataType:'text',
		
	// 	success:function(res)
	// 	{
	// 		//alert('Recipe saved to your profile!')
	// 		console.log("Success : Menu sent to server");

	// 	},
	// 	error: function()
	// 	{
	// 		alert('Sorry, the menu could not be saved,\ncheck you are logged in. ')
	// 		console.log("Fail: Menu not sent, check connection")
	// 	}

	// })
}

function getRecipe()
{
	getUserRecipes();
}

