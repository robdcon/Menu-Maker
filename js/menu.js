function saveUserMenu()
{
	var date = [] 
	// Returns an object array containing display day/date data
	$.getScript('js/template.js', function(){ date = getTemplateDateObj() })
	
	var displayday = date.menuday; 
	var displaydate = date.menudate;
	var menuitems = getItems(); // Returns object containing menu item details from the DOM template

	// Create new instance of DailyMenu with retrieved menu data
	var menu = new DailyMenu(displayday, displaydate, menuitems);

	// Send menu as a string via an AJAX POST request to be processed by PHP script
	$.getScript('js/ajax.js', function(){saveMenuString(menu)})
}

function getUserMenus()
{
	// Get a list of saved menus for the user through ajax get request display in Tthe DOM
	$.getScript('js/ajax.js', function(){ getMenuString() });
}

