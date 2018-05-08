
function bind()
{
	// Load blank menu to the DOM/Start new menu
	$('#createmenu').click(function()
	{		
		
		var ui = "#menu-display"	

		displayTemplate(ui)
		addSectionData()
		addSectionListeners()

		
	});

	$('#results-list').click(getDishTitle);
	
	$('#results-list').click(getUserMenuID);

	// Auto create menu based on input data attributes & random number generator	
	$('#genmenu').click(generateMenu)
	
	// Save current menu by calling the saveUserMenu method of the menu class
	$('#savemenu').click(function(){ saveUserMenu() })
	

	//Print the contents of the current menu using the window.print method
	$('#printmenu').click(function()
	{
		print();
	});

	$('#getusermenus').click(function()
	{	
		
		$.getScript('js/ajax.js',function(){ getMenuString() });
	});

	$('#saverecipe').click(function()
	{
		saveRecipe();
	})

	$('#getuserrecipes').click(function()
	{
		$.getScript('js/ajax.js', function(){ getUserRecipes() });
	});
	
	// $('getrecipes').click(function()
	// {
	// 	$.get('recipecard.php #recipe-wrapper', function(data)
	// 	{
	// 		$('#menu-display').html(data);
	// 	} )
	// }
	//)
	

}


function init() 
{
	bind();
	addSelectListeners();
	
}
window.onload = init;
