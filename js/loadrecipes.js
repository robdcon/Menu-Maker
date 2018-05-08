function getRecipeList(option)
{
	 	
	$.ajax(
	{

	    url: 'http://localhost/wrp/json/savedrecipes.json', 
	    type: 'GET',
	    dataType: 'json',
	    success : function(response) 
	    {
	    	var txt = '';
	    
	    	$.each(response.recipes, function(index)
	    	{

	    		if(response.recipes[index].course[1] == option)
	    		{
	    			console.log(response.recipes[index].course[1] == option)
	    		//FILTER RESULTS BY DISHTYPE
		    	txt += '<option class="recipelistitem '+ response.recipes[index].course[0] +'" id="'+ response.recipes[index].title.split(' ').join('+') +'" class="itembtn">' + response.recipes[index].title.replace(/&amp;+/g,'&') + '</option>'; 
		    	// alert(response.recipes[index].title);
		    	
			    }
	
	    	})

	    	$('#recipelist').html(txt);
	    	
	    },
	    error : function (xhr, ajaxOptions, thrownError)
	    {  
	        console.log(xhr.status);          
	        console.log(thrownError);

	    } 
	    
	});

}

// Load recipes from API matching to the option parameter

function getRecipe(title)

{
	var recipe = new Recipe(); // Create new instance of recipe	
	var allergens = []; // Empty array to store allergen list	
	$.ajax(
	{
		

	    url: 'http://localhost/wrp/json/savedrecipes.json', 
	    type: 'GET',
	    dataType: 'json',
	    success : function(response) 
	    {
	    
	    	$.each(response.recipes, function(index)
	    	{


	    		if(response.recipes[index].title == title)
	    		{
	    			// Assign recipe details
	    			recipe.setTitle(response.recipes[index].title);
	    			recipe.setDescription(response.recipes[index].description);
	    			recipe.setImg(response.recipes[index].img);
	    			recipe.setPrepTime(response.recipes[index].prep);
	    			recipe.setCookingTime(response.recipes[index].cook);
	    			recipe.setDifficulty(response.recipes[index].difficulty);
	    			recipe.setServes(response.recipes[index].serves);
	    			recipe.setIngredients(response.recipes[index].ingredients);
	    			recipe.setIngredients(response.recipes[index].ingredients);
	    			recipe.setMethod(response.recipes[index].method);
					recipe.setNutrition(response.recipes[index]["nutrition: per serving"]);

					
	    			$.each(response.recipes[index].ingredients, function(i)
	    			{
	    				allergen = response.recipes[index].ingredients[i].allergen;
	    				    				
						if(allergen !== false) // if the allergen has anything but a false value, put that value (i.e. the name of the allergen) in an array
						{	
							//http://api.jquery.com/jquery.inarray/
							if(($.inArray(allergen, allergens) == -1))
							{

							allergens.push(allergen);

							}

						}
	    			})
	    			recipe.setAllergens(allergens);
	    			

	    			$('.recipe-heading').html(recipe.dishtitle)
	    			$('#description').html(recipe.description);
	    			$('#image').html('<img class="headerimage" alt="recipe image" src=img/' + recipe.getImg() + '>');
	    			$('#prep-mins').html(recipe.getPrepTime());
	    			$('#cooking-mins').html(recipe.getCookingTime());
	    			$('#difficulty-level').html(recipe.getDifficulty());
	    			$('#serves').html(recipe.getServes());
	    			$('#allergen-list').html(recipe.getAllergens().join());
	    			// Set nutrition values to recipe template
	    			var nutrition_list = recipe.getNutrition();
	    			$('.energy').html(nutrition_list.energy);
	    			$('.fat').html(nutrition_list.fat);
	    			$('.saturates').html(nutrition_list.saturates);
	    			$('.carbs').html(nutrition_list.carbs);
	    			$('.sugars').html(nutrition_list.sugars);
	    			$('.fibre').html(nutrition_list.fibre);
	    			$('.protein').html(nutrition_list.protein);
	    			$('.salt').html(nutrition_list.salt);
	    			// Set ingredients to recipe template
	    			var ingredients_txt = "";
	    			var ingredients = recipe.getIngredients();
	    			for (var i = 0; i < ingredients.length; i++) 
	    			{
	    				ingredients_txt += "<li>" + ingredients[i].measure+ingredients[i].unit + " " + ingredients[i].name +"</li>";
	    			};
	    			$('#ingredients-list').html(ingredients_txt);




	    			var method_txt = "";
	    			var method = recipe.getMethod();
//http://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object	 
	    			for (var key in method) 
	    			{
	    				method_txt += "<li>"+ method[key] + "</li>";
	    			};
	    			$('#method-list').html(method_txt);
	    			
		    	
			    }
	
	    	})
	    	
	    },
	    error : function (xhr, ajaxOptions, thrownError)
	    {  
	        console.log(xhr.status);          
	        console.log(thrownError);

	    } 
	    
	});

}