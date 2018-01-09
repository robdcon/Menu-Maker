// Used by 

//Constructor for dish item on user menu
//Each item on the menu will be stored as an object with properties, 
//i.e. the dish information displayed on the menu.
//When saved each object will be stored in a usermenu object and 
//converted to a string to be saved on the database

function UserMenuItem()
{
	
	this.itemTitle;
	this.allergens;
	this.price;
	this.dishtype;
	this.course;
// Set the dish title

	this.setTitle = function(title)
	{
		this.itemtitle = title;
	}

// Get dish title

	this.getTitle = function()
	{
		return this.itemtitle;
	}

// Set price

	this.setAllergens = function(allergens)
	{
		this.itemallergens = allergens;
	}

// Get allergens

	this.getAllergens = function()
	{
		return this.itemallergens;
	}

// Set price

	this.setPrice = function(price)
	{
		this.itemprice = price;
	}

// Get price

	this.getPrice = function()
	{
		return this.dishprice;
	}

// Set dishtype

	this.setDishType = function(dishtype)
	{
		this.dishtype = dishtype;
	}

// Get dishtype

	this.getDishtype = function()
	{
		return this.dishtype;
	}
// Set course

	this.setCourse = function(course)
	{
		this.course = course;
	}

// Get course

	this.getCourse = function()
	{
		return this.course;
	}


}