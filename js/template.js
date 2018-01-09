// Uses template-setup.js
// Used by 

function Template() 
{	

	// Insert the html template into a given container element in the DOM
	this.displayTemplate = function(container)
	{
		$.get('http://localhost/wrp/menutemplate.html', function(data)
		{
			$(container).html(data);
			$('#template').on('submit', function(event)
			{
				
				event.preventDefault();
			})
		})				
	}

	// Add data to each section to specify the dish type and price
	this.addSectionData = function()
	{
		$.getScript('js/template-setup.js', function(){addDataToTemplate()})
	}

	// Add listeners to each section to display specified list of results from ajax request
	this.addSectionListeners = function()
	{
		$.getScript('js/template-setup.js', function(){addListenersToSections()})
	}

	// Add item to active section of template

	this.addItem = function(itemtitle)
	{
		//Take the item parameter(passed by getDishTitle function), get its HTML text value and convert the ampersand
		var itemtitle = itemtitle; 
		var i = 1;
		$('.menusection').each(function() //Traverse the menu items to find the active one
		{
			if($(this).data('active') == 'true')
			{
				// Set the value as the item title
				this.value = itemtitle;
				var sectionID = i;
				//Call the function to check the item title against a database
				//A list of the dishes allergens is returned 
				//These are set to the relevant section using the counter i for reference
				var ajax10 = new Ajax();
				ajax10.getAllergens(itemtitle, sectionID)
								
				//$(this).removeData("active");
				$(this).focus(); // Focus to the active menu section
			}
			i++;
		});
	
	}
	this.getItems = function() 
	{
		var menu = [];
		inputs = $('.field');

		for (var i = 0; i < inputs.length; i++) 
		{
			// Select elements to extract data from & store in a variable
			var title = $('input.menusection')[i]
			var price = $('input.price')[i]
			var allergens = $('.allergens')[i]
			var dishID = $('.menusection')[i];
			//New instance of Template utility
			var temp = new Template()
			// Call the getter function to return the menu data as an object
			var item = temp.getTemplateItem(title, dishID, allergens, price)
			// Set an identifier for each object
			
			menu.push(item);
				
		};
		
		return menu;
	}
	this.getTemplateDateObj = function()
	{
		
		var dateobj = this.getTemplateDay($('.menuday'), $('.menudate'));
		return dateobj;
	}
	this.getTemplateItem = function(titlesection, dishtypesection, allergensection, pricesection)
	{
		
		var title = titlesection.value;
		var allergens = allergensection.innerHTML;
		var price = pricesection.value;
		var dishtype = dishtypesection.id;

	// Create new instance of UserMenuItem with the values as its properties

		var item = new UserMenuItem();
		item.setTitle(title);
		item.setAllergens(allergens);
		item.setPrice(price);
		item.setDishType(dishtype);

		return item;

	} 
	this.getTemplateDay = function(daysection, datesection)
	{
		
		var day = $(daysection).val();
		var date = $(datesection).val();
		var menudateobj = [];
		menudateobj['menuday'] = day;
		menudateobj['menudate'] = date;
		return menudateobj;
	}
	
	
	
				
}

