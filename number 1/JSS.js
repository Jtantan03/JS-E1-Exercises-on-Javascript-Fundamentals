

const months = ['January', 'February', 'March', 'April', 
'May', 'June', 'July', 'August', 'September', 'October', 
'November', 'December'];

const updateClock = () => {
  const date = new Date();
  const day = date.getDay();
  const month = date.getMonth();
  const monthName = months[month];
  const dayNumber = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = 'AM';
  const weekdays = ['Sunday', 'Monday', 
  'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (hours >= 12) {
    ampm = 'PM';
    hours -= 12;
  }
  if (hours === 0) {
    hours = 12;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  const time = `<center><h3>${monthName} ${dayNumber}  <br><br> ${hours}:${minutes}:${seconds} ${ampm}<br></h3> <h5>${weekdays[day]}</h5></center>`;
  document.getElementById('clock').innerHTML = time;
};

updateClock();
setInterval(updateClock, 1000); // this will keep the clock running without refreshing









  




