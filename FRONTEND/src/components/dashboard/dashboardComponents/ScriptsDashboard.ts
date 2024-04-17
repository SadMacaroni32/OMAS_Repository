

export const ScriptsDashboard = () => {

  {/* DashboardStatusBoxes */}
  {/* DashboardSeatCondition */}

  {/* DashboardRecentComments */}
  
    // Function to get the first letter of the name
    const getAvatarLetter = (name: string | string[]) => {
      if (!name) return "";
      return name[0].toUpperCase();
    };
  
  // Function to format date as "Month Day, Year at 0:00 AM/PM"
  const formatDateTime = (dateTimeString: string) => {
    const date = new Date(dateTimeString);
    const options = { month: "long", day: "2-digit", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-US", options);
    const hour = date.getHours();
    let formattedHour = hour % 12;
    formattedHour = formattedHour === 0 ? 12 : formattedHour; // Convert 0 to 12
    const meridiem = hour >= 12 ? "PM" : "AM";
    const formattedTime = `${formattedHour}:${String(date.getMinutes()).padStart(2, '0')}`;
    return `${formattedDate} at ${formattedTime} ${meridiem}`;
  };

  {/* DashboardSummary */}

  return {
    getAvatarLetter,
    formatDateTime,
  };
}