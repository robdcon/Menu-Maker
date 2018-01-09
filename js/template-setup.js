//Used by template.js

// This function adds data attributes to each input on the menu so as to constrain the options to the business needs
// Future update to provide functionality to create the template will follow in the admin set up once it is complete
function addDataToTemplate()
{
	// Select the input areas by an assinged id and add an appropriate data object to each
	$('#main-1').data({'dishtype':'meat','price':'1.95'});
	$('#main-2').data({'dishtype':'poultry','price':'1.95'});
	$('#main-3').data({'dishtype':'fish','price':'1.95'});
	$('#main-4').data({'dishtype':'vegetarian','price':'1.95'});

	$('#soup-1').data({'dishtype':'soup','price':'1.60'});

	$('#side-1').data({'dishtype':'potato','price':'0.60'});
	$('#side-2').data({'dishtype':'vegetable','price':'0.60'});
	$('#side-3').data({'dishtype':'rice','price':'0.60'});
	$('#side-4').data({'dishtype':'vegetable','price':'0.60'});

	$('.menusection').each(function() // For each section of the menu, 
	{
		var menuitemprice = '#' + this.id.replace(/-+/,'-price-'); // use the id to create a unique selector to target its corresponding price
		
		var price = $(this).data('price'); // Set a price variable to add to the appropriate element
		
		$(menuitemprice).val(price); // Set the value of the target
		
	})

	$('#dayname').html("<h1>Daily Menu</h1>")

	$('#menudate').change(function()
		{
			console.log($(this).val())
		})
	
	  $('form').find('input.menusection').each(function(ev)
	  {
	      if(!$(this).val()) // If value of element returns false, i.e. is empty
	      { 
		     $(this).attr("placeholder", ("Click to enter a " + $(this).data('dishtype') + " dish...")); // Set the place holder corresponding to the set dish type
		  }
	  });
	
	// TEST
	// $.each($('.menuitem'), function()
	// {
	// 	console.log($(this).data('dishtype'))
	// })
	// console.log($('#main-1').data('dishtype'));
	
}
function addListenersToSections()
{
	
	$('.menusection').on('focus', function() // Set event listener on each section to call getJson() with specific dish type
	{
		dishtype = $(this).data('dishtype');
		console.log(dishtype)
		//New instance of the utility class to access methods
		var ajax11 = new Ajax()
		ajax11.getRecipeTitles(dishtype);

		$(this).on('click keypress', function() // Attach events to invoke a function to shift focus to results area while marking the menu section as active 
		{
			$('.menusection').each(function() // Search each section of the menu for an already active section
			{
				if ($(this).data('active') == 'true') { $(this).removeData('active')}; // Remove the data to ensure 2 elements cannot be active at once
			})
			$(this).data({'active':'true'}); // Add the data to mark as active
			 
			$('#listcontainer ul').focus(); // Shift focus to results area (for accessibilty purposes)
		})
		
	})
}

