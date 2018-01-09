
// When an item is clicked, check if it is a dish list item, 
// get its title and pass it to a function to add it to the relevant section

function getDishTitle(event)
{
	var item = event.target;
	if ($(item).hasClass('dishlistitem')) 
	{
	itemtitle = item.innerHTML.replace(/&amp;+/g,'&');
	//Create new instance of template and access method to add item to template
	var temp2 = new Template();	
	temp2.addItem(itemtitle);

	return itemtitle;

	}
}
function getUserMenuID(event)
{
	var item = event.target;
	if ($(item).hasClass('usermenu')) 
	{
	itemID = item.id;
	var ajax9 = new Ajax();		
	ajax9.getUserMenu(itemID);
	}
}