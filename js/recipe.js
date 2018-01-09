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
	var ajax7 = new Ajax();
	var recipetitle = title;
	var recipeobject = ajax7.getRecipe(title);
	return recipeobject;
}

function loadRecipeList() 
{
	
	$('#recipetype').change(function() // When the option changes, execute the function to load the relevant cities
	{
		var option = ($(this).val());

		var ajax6 = new Ajax();

		ajax6.getRecipeList(option);		

	})
}

// Recipe select area to load info for a chosen city

function loadRecipe() // When the option changes, execute the function to load the relevant city info
{
	$('#recipelist').change(function()
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
			$('#saverecipe').click(function(event)
			{
				event.preventDefault();
				saveRecipe();
			})
		})
}

function saveRecipe()
{
	
	var recipe = $('.recipe-heading').html();
	var ajax8 = new Ajax();	
	ajax8.saveRecipeToDB(recipe);
}
function getRecipe()
{
	getUserRecipes();
}

