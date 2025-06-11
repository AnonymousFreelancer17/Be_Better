export const getMonthNames = [
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

export const getWeekdayName = (date) => {
  return date.toLocaleDateString("en-US", { weekday: "short" }); // e.g. "Mon", "Tue"
};

export const getFormattedTime = (date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }); // e.g. "10:24 AM"
};

export const getAllDaysOfMonth = (month, year) => {
  const days = [];
  const lastDay = new Date(year, month + 1, 0).getDate();

  for (let day = 1; day <= lastDay; day++) {
    const date = new Date(year, month, day);
    days.push({
      dayNumber: day,
      weekday: getWeekdayName(date),
      time: getFormattedTime(date), // optional usage
      fullDate: date.toDateString(),
      isoDate: date.toISOString(),
    });
  }

  return days;
};
