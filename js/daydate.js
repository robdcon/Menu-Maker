// Create an object whose properties are a day and date in suitable display format

function DayDate(date) 
{
	var dateobj = date || new Date() ;
	var sec = dateobj.getSeconds();
	var min = dateobj.getMinutes();
	var hour = dateobj.getHours();
	var day = dateobj.getDay();
	var date = dateobj.getDate();
	var month = dateobj.getMonth();
	var year = dateobj.getFullYear();

	month++; // Account for 0 indexing

	if (sec < 10) 
	{
		sec = "0" + sec; 
	};
	if (min < 10) 
	{
		min = "0" + min; // Add a preceding 0 if less han 9
	};
	if (hour < 10) 
	{
		hour = "0" + hour; 
	};
	if (date < 10) 
	{
		date = "0" + date; 
	};

	if (month < 10) 
	{
		month = "0" + month; 
	};

	fulldate = date + "/" + month + "/" + year;

	switch(day)
	{
		case 0:
		day = "Sunday";
		break;
		case 1:
		day = "Monday";
		break
		case 2:
		day = "Tuesday";
		break;
		case 3:
		day = "Wednsday";
		break;
		case 4:
		day = "Thursday";
		break;
		case 5:
		day = "Friday";
		break;
		case 6:
		day = "Saturday";
		break;
	}

	this.day = day;

	this.date = fulldate;
	
	this.getDayText = function(){return this.day};

	this.getDateText = function(){return this.fulldate};

	this.getMysqlFormat = function()
	{		

		var result = year + "-" + month + "-" + date + " " + hour + ":" + min + ":" + sec;
		return result;
	}
	
}