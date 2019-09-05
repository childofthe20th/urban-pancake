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

const subtractDay = () => {
  currentDate.setDate(currentDate.getDate() - 1);
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

const addWeek = () => {
  currentDate.setDate(currentDate.getDate() + 7);
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

const subtractWeek = () => {
  currentDate.setDate(currentDate.getDate() - 7);
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

const addMonth = () => {
  currentDate.setDate(currentDate.getDate() + 30);
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

const subtractMonth = () => {
  currentDate.setDate(currentDate.getDate() - 30);
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
