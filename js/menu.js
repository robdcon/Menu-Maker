function Menu()
{
	this.saveUserMenu = function()
	{
		
		var temp = new Template();
		var date = temp.getTemplateDateObj();
		displayday = date.menuday;
		displaydate = date.menudate;
		var menuitems = temp.getItems(); // Returns object containing menu details from template
		// Create new instance of DailyMenu with retrieved information
		var menu = new DailyMenu(displayday, displaydate, menuitems);
		console.log(menu);
		var ajax4 = new Ajax(); //Create instance of Ajax 
		ajax4.postMenuString(menu); // Call a function to make an AJAX post request to write to a database
	}
	this.getUserMenus = function()
	{
		var ajax5= new Ajax();
		ajax5.getMenuString();
	}
}