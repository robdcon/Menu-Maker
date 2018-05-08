function generateMenu()
{
	
  $('.menusection').each(function()
  {
	  
  	var itemtype = $(this).data('dishtype');
  	var sectionID = this.id;
	autoCompleteMenu(itemtype, sectionID);

  })
}