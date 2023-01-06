 // Get today's date
 const today = new Date();

 // Set next Christmas to be on December 25th of the current year
 let nextChristmas = new Date(today.getFullYear(), 11, 25);

 // If today's date is after December 25th, set next Christmas to be on December 25th of the next year
 if (today.getMonth() === 11 && today.getDate() > 25) {
   nextChristmas = new Date(today.getFullYear() + 1, 11, 25);
 }

 // Calculate the number of milliseconds in one day
 const oneDayInMilliseconds = 1000 * 60 * 60 * 24;

 // Calculate the number of days left until next Christmas by subtracting the current time from the time of next Christmas,
 // and dividing the result by the number of milliseconds in one day
 const daysLeft = Math.ceil((nextChristmas.getTime() - today.getTime()) / oneDayInMilliseconds);

 // Update the text content of the element with id "daysLeft" to show the number of days left until next Christmas
 document.getElementById("daysLeft").textContent ="Days until Christmas: "+ daysLeft;