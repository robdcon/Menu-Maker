
function bind()
{
	// Load blank menu to the DOM/Start new menu
	$('#createmenu').click(function(event)
	{		
		
		var ui = "#menudisplay"	

		var temp1 = new Template();
		temp1.displayTemplate(ui);
		temp1.addSectionData();
		temp1.addSectionListeners();

		event.preventDefault();
		
	});

	$('#resultslist').click(getDishTitle);
	
	$('#resultslist').click(getUserMenuID);

	// Auto create menu based on input data attributes & random number generator	
	$('#genmenu').click(function()
	{
		generateMenu();
	})
	
	// Save current menu by calling the saveUserMenu method of the menu class
	$('#savemenu').click(function()
	{
		var menu1 = new Menu();
		menu1.saveUserMenu();
	});

	//Print the contents of the current menu using the window.print method
	$('#printmenu').click(function()
	{
		print();
	});

	//
	$('#getusermenus').click(function()
	{
		
		var ajax = new Ajax();
		ajax.getMenuString();
	});

	$('#getuserrecipes').click(function()
	{
		var ajax = new Ajax();
		ajax.getUserRecipes();
	});
	
	$('getrecipes').click(function()
	{
		$.get('recipecard.php #recipe-wrapper', function(data)
		{
			$('#menudisplay').html(data);
		} )
	}
	)
	

}


function init() 
{
	bind();
	addSelectListeners();
	
}
window.onload = init;
