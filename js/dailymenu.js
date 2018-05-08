	

// Constructor for instance of class DailyMenu

function DailyMenu(day, date, array)
{
	var menu = {}

	//Create a new instance of DayDate and access its methods to get a sql friendly date format
	var newdate = new DayDate();


	menu.datecreated = newdate.getMysqlFormat();
	menu.date = date; // The intended date for the menu to be displayed
	menu.day = day; // The day of the week the menu should be displayed
	menu.items = array; // The UserMenuItems 

	return menu;

	// Set day name
	this.setDay = function(dayname)
	{
		menu.day = dayname
	}
	// Get day name
	this.getDay = function()
	{
		return menu.day;
	}
	// Set date name
	this.setDate = function(datestring)
	{
		menu.date = datestring;
	}
	// Get date name
	this.getDate = function()
	{
		return menu.date;
	}
	// Set dish items
	this.setDishes = function(dishlist)
	{
		menu.dishes = dishlist;
	}
	// Get dish items
	this.getDishes = function()
	{
		return menu.dishes
	}

	// Get date created
	this.getDateCreated = function()
	{
		return menu.datecreated;
	}
	this.setDateCreated = function()
	{
		var date = new DayDate(); 
		var daytext = date.getDayText();
		var datetext = date.getDateText();
		return datetext;
	}
	
}

	
