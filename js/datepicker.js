
function getDayString()
{
	var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var iMonthStart = [0,3,3,6,1,4,6,2,5,0,3,5,6,2];

	var date = $('#menudate').selectedDate(); // Not sure what kind of datePicker you are using but you call the method that returns the selected date.
	// 01234567
	// yyyymmdd
	var century = date.substring(0,2); // Century
	var year = date.substring(2,2); //Year
	var month = date.substring(4,2);
	var day    = date.substring(6,2);

	//Please refer to the algorithm described here: <a href="http://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week">http://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week</a>[<a href="http://en.wikipedia.org/wiki/Determination_of_the_day_of_the_week" target="_blank" title="New Window">^</a>]

	var centuryForCalc = 2*(3-(century%4));
	var yearForCalc = year/4;

	//Test for leap year
	var yearFull = date.substring(0,4);
	var iModLeap = yearFull%4;
	var monthTblVal = 0;
	if(iModLeap == 0)
	{
	   // Leap Year
	   if(month == 1)
	   {
	       monthTblVal = 6;
	    }
	    else if(month == 2)
	    {
	      monthTblVal = 2;
	    }
	    else
	    {
	      monthTblVal = iMonthStart[month]; 
	    }
	}
	else
	{
	   monthTblVal = iMonthStart[month]; 
	}

	var iTotal = centuryForCalc + yearForCalc + year + monthTblVal + day;
	var iDayIndex = iTotal%7;
	var dayString = days[iDayIndex-1];

	return dayString;
}
