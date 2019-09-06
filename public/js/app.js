let currentDate = new Date();

const pad = (n) => {
    return n<10 ? '0'+n : n;
};

const displayDate = () => {
  let date = currentDate.getDate();
  let month = currentDate.getMonth();
  let year = currentDate.getFullYear();
  let monthNames = [
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
    "December"
  ];
  let dateWithFullMonthName = monthNames[month] + " " + pad(date) + ", " + year;
  document.getElementById("date").innerHTML = dateWithFullMonthName;
};

const addDay = () => {
  currentDate.setDate(currentDate.getDate() + 1);
  displayDate();
};

const subtractDay = () => {
  currentDate.setDate(currentDate.getDate() - 1);
  displayDate();
};

const addWeek = () => {
  currentDate.setDate(currentDate.getDate() + 7);
  displayDate();
};

const subtractWeek = () => {
  currentDate.setDate(currentDate.getDate() - 7);
  displayDate();
};

const addMonth = () => {
  currentDate.setDate(currentDate.getDate() + 30);
  displayDate();
};

const subtractMonth = () => {
  currentDate.setDate(currentDate.getDate() - 30);
  displayDate();
};

const resetDate = () => {
  currentDate = new Date();
  displayDate();
}
