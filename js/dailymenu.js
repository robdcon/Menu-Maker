	

// Constructor for instance of class DailyMenu

function DailyMenu(day, date, array)
{
	//Create a new instance of DayDate and access its methods to get a sql friendly date format
	var newdate = new DayDate();


	this.datecreated = newdate.getMysqlFormat();
	this.date = date; // The intended date for the menu to be displayed
	this.day = day; // The day of the week the menu should be displayed
	this.items = array; // The UserMenuItems 

	// Set day name
	this.setDay = function(dayname)
	{
		this.day = dayname
	}
	// Get day name
	this.getDay = function()
	{
		return this.day;
	}
	// Set date name
	this.setDate = function(datestring)
	{
		this.date = datestring;
	}
	// Get date name
	this.getDate = function()
	{
		return this.date;
	}
	// Set dish items
	this.setDishes = function(dishlist)
	{
		this.dishes = dishlist;
	}
	// Get dish items
	this.getDishes = function()
	{
		return this.dishes
	}

	// Get date created
	this.getDateCreated = function()
	{
		return this.datecreated;
	}
	this.setDateCreated = function()
	{
		var date = new DayDate(); 
		var daytext = date.getDayText();
		var datetext = date.getDateText();
		return datetext;
	}
	
}

	
