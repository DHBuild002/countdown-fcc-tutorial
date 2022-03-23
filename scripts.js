const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");
let futureDate = new Date(2022, 3, 24, 10, 30, 00);
// console.log(futureDate)

// Easy Data
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

// Difficult Data
// The below will use the new Date object to retrieve the chosen month of May
let month = futureDate.getMonth();
let day = futureDate.getDay();
month = months[month];
day = days[futureDate.getDay()];
// console.log(months[month]);
const date = futureDate.getDate();


giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year} - ${hours}:${minutes}am`