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
let futureDate = new Date(2022, 3, 26, 15, 30, 0);
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

giveaway.textContent = `Giveaway ends on ${day}, ${date} ${month} ${year} - ${hours}:${minutes}`
// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1 day = 24 hr

    //Diff time denominations converted in to milliseconds
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calculate all values
    let days = t / oneDay;
    console.log(days);
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay) / oneHour);
    console.log(hours);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set value array
    const values = [
        days, hours, minutes, seconds
    ];
    items.forEach(function(item, index){
        item.innerHTML = values[index];
    })
}
getRemainingTime();