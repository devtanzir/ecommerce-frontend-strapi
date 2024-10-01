
/**
 * id generator
 * @returns
 */

export const createId = () => {
    const timestamp = ((new Date().getTime() / 1000) | 0).toString(16);
    const machineId = "xxxxxxxxxxxx".replace(/[x]/g, function () {
      return ((Math.random() * 16) | 0).toString(16);
    });
    const processId = (Math.floor(Math.random() * 1000) % 1000)
      .toString(16)
      .padStart(3, "0");
    const counter = ((Math.random() * 16777216) | 0)
      .toString(16)
      .padStart(6, "0");
  
    return timestamp + machineId + processId + counter;
  };
  

export const getDayAfterOneWeek = () => {
  const today = new Date();
  // Add 7 days to the current date
  today.setDate(today.getDate() + 7);

  // Array of day names and month names
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Get day, date, month, and year
  const dayName = days[today.getDay()];
  const date = today.getDate();
  const month = months[today.getMonth()];
  const year = today.getFullYear();

  // Return formatted date string
  return `${dayName}, ${date} ${month} ${year}`;
  }