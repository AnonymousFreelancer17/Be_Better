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

export const getWeekdayName = (date: Date) => {
  return date.toLocaleDateString("en-US", { weekday: "short" }); // e.g. "Mon", "Tue"
};

export const getFormattedTime = (date: Date) => {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }); // e.g. "10:24 AM"
};

export const getAllDaysOfMonth = (month: number, year: number) => {
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

export const formatDateTime = (dateString: string | Date): string => {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  let hours = date.getHours();
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12; // Convert 0 -> 12
  const time = `${hours}:${minutes} ${ampm}`;

  return JSON.stringify({ day: day, month: month, year: year, time: time });
};

export const generateTimeSlots = (interval = 30) => {
  const times = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const time = new Date();
      time.setHours(hour);
      time.setMinutes(minute);
      time.setSeconds(0);

      const formatted = time.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      times.push(formatted);
    }
  }

  return times;
};

export const fetchTasksForSelectedDay = async () => {
  return true;
};
