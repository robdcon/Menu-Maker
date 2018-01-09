function generateMenu()
{
	
  $('.menusection').each(function()
  {
	  
  	var itemtype = $(this).data('dishtype');
  	var sectionID = this.id;
	var ajax1 = new Ajax();
  	ajax1.autoCompleteMenu(itemtype, sectionID);

  })
}