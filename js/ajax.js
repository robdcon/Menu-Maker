// AJAX request to get all items of a specific dishType and display them in the #resultslist section of the UI
function Ajax()
{

	this.getRecipeTitles = function(itemtype)

	{
		 
		var itemtype = itemtype;		
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

		    		if(response.recipes[index].course[1] == itemtype)
		    		{
		    		//FILTER RESULTS BY DISHTYPE
			    	txt += '<li><img src="img/'+ response.recipes[index].img +'" alt="recipe picture"><div class="dishlistitem '+ response.recipes[index].dishtype +'" id="'+ response.recipes[index].dishtype + index +'" class="itembtn">' + response.recipes[index].title.replace(/&amp;+/g,'&') + '</div></a></li>'; 
			    	// alert(response.recipes[index].title);
			    	
				    }
		
		    	})

		    	$('#resultslist').html(txt);
		    	
		    },
		    error : function (xhr, ajaxOptions, thrownError)
		    {  
		        console.log(xhr.status);          
		        console.log(thrownError);

		    } 
		    
		});
	}

	this.getAllergens = function(dishname, sectionID) 
	{
		console.log(dishname);
		console.log(sectionID);
		var allergens = [];
		$.ajax
		({
			url: 'localhost/wrp/json/savedrecipes.json',
		    type:'GET',
		    data: 'json',
		    success:function(response)
		    {

		    	$.each(response.recipes, function(index)
		    	{

		    		
		    		if(response.recipes[index]['title'] == dishname)
		    		{
		    			
		    			$.each(response.recipes[index].ingredients, function(i)
		    			{
		    				allergen = response.recipes[index].ingredients[i].allergen;
		  				
							if(allergen !== false)
							{	
								//http://api.jquery.com/jquery.inarray/
								if(($.inArray(allergen, allergens) == -1))
								{

								allergens.push(allergen);

								}

							}
		    			})
		    			$(('#allergen-section-'+ sectionID)).html("Allergens:" + allergens.join());
	    				
		    		}
		    		else
		    		{
		    			console.log('FAIL')
		    		}

		    	})		    	

		    },
		    error : function (xhr, ajaxOptions, thrownError)
		    {  
		        console.log(xhr.status);          
		        console.log(thrownError);

		    } 

		})
	}

	// AJAX request to PHP file on server to POST menu to database

	this.postMenuString = function(menu) 
	{
		var data = JSON.stringify(menu);
		
		$.ajax
		({
			type:'POST',
			url:'php/savemenu.php',
			data: {dataString:data},

			success:function(res)
			{
				alert('Menu saved to your profile!')
				console.log("Success : Menu sent to server");
			},
			error: function()
			{
				alert('Sorry, the menu could not be saved,\ncheck you are logged in. ')
				console.log("Fail: Menu not sent, check connection")
			}

		})
	}

	this.getMenuString = function() // Access the database to find matching records for saved menus
	{

		$.ajax
		({
			
			type:'GET',
			url: 'php/getsavedmenus.php',
			data: 'json',        
			success:function(response)
			{
				
				
				var txt = "";
				var menu = $.parseJSON(response);

				for (var i = 0; i < menu.length; i++) {
					if (menu[i].display_day)

					txt += '<button id="'+ menu[i].id + '" class="itembtn usermenu">' + "Menu Display Date: "menu[i].display_date + ',' + menu[i].status + '</button>';
				};
				//console.log(menu[0].display_date);
				//storeLocal("menu", response); // Add the item to local storage for future access

				//console.log('PASS');
				
				$('#resultslist').html("<div id='usermenu'>"+txt+"</div>"); // Add the results to the results list			
			},
			error:function(response)
			{
				response + '</br>' + console.log('FAIL');
			}
		})

	}
	this.getUserMenu = function(id) //Takes the ID of the selected menu as a parameter
	{

		$.ajax
		({
			
			type:'GET',
			url: 'php/getusermenu.php', // Gets the menu data in string format
			data: {dataString:id},      
			success:function(response)
			{
				var result = JSON.parse(response); 
				
				for (var i = 0; i < result.items.length; i++) {
					
					var day = result.day;
					
					$('.menuday').val(day);
					var date = result.date;
					
					$('.menudate').val(date);

					var section = "#" + result.items[i].dishtype;
					var title = result.items[i].itemtitle;
					
					$(section).val(title);
				};
							
			},
			error:function(response)
			{
				response + '</br>' + console.log('FAIL');
			}
		})
	}
	this.getUserRecipes = function()
	{

		var txt ="";

		$.ajax
		({
			
			type:'GET',
			url: 'php/getuserrecipes.php',
			data: '$userrecipe',        
			success:function(response)
			{

				
				var result = JSON.parse(response);
				
				$.each(result, function(index)
				{
					txt += "<button class='dishlistitem'>" + result[index].recipe + "</button>";

				})
				$('#resultslist').html(txt);

							
			},
			error:function(response)
			{
				response + '</br>' + console.log('FAIL');
			}
		})

	}
	this.getRecipe = function(title)

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
	this.getRecipeList = function(option)
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
	this.saveRecipeToDB = function(title)
	{
		var data = title;
		console.log(data);
		
		$.ajax({

			url: 'php/savetofavourites.php',
		    type: 'POST',
		    data: {datastring:data},
		    success : function(response) 
		    {
		    	console.log('success')
		    },
		    error : function (xhr, ajaxOptions, thrownError)
		    {  
		        console.log(xhr.status);          
		        console.log(thrownError);

		    } 
		})
	}
	this.autoCompleteMenu = function(dishtype, sectionID)

	{
		 
		var itemType = dishtype;
		var section = "#" + sectionID;		
		$.ajax(
		{

		   url: 'http://localhost/wrp/json/recipetitles.json', 
		  
		    type: 'GET',
		    dataType: 'json',
		    success : function(response) 
		    {
		    	var items = [];
		    	$.each(response.recipes, function(index)
		    	{
					
					if(response.recipes[index].dishtype == itemType)
					{
						items.push(response.recipes[index].title);

					}
		    	})
		    	var listlength = items.length;
		    	do 
		    	{
		    		randomnumber = Math.floor((Math.random()*100) + 1);
		    	}
		    	while(randomnumber >= listlength);
		    	console.log(section);
		    	$(section).val(items[randomnumber]);

		    	
		    	
		    },
		    error : function (xhr, ajaxOptions, thrownError)
		    {  
		        console.log(xhr.status);          
		        console.log(thrownError);

		    } 
		    
		});

	}
	


}//ajax