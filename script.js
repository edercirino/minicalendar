const monthNameValue = document.getElementById("monthName");
const dayNameValue = document.getElementById("dayName");
const dayNumberValue = document.getElementById("dayNumber");
const yearValue = document.getElementById("year");

const date = new Date();
const month = date.getMonth();
monthNameValue.innerText = date.toLocaleString("pt-br", {
    month: "long",
});

dayNameValue.innerText = date.toLocaleString("pt-br", {
    weekday: "long"
});

dayNumberValue.innerText = date.getDate();

yearValue.innerText = date.getFullYear();