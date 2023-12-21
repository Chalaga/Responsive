function displayGeorgiaDateTime() {
    // Get the current date/time in UTC
    const now = new Date();

    // Create a new Date object for Georgia's timezone (UTC+4)
    const georgiaTime = new Date(now.toLocaleString("en-US", { timeZone: "Asia/Tbilisi" }));

    // Format the date
    const dateFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    const formattedDate = new Intl.DateTimeFormat('en-US', dateFormatOptions).format(georgiaTime);

    // Format the time
    const timeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false, // Use 24-hour format
      timeZoneName: 'short'
    };

    const formattedTime = new Intl.DateTimeFormat('en-US', timeFormatOptions).format(georgiaTime);

    // Display the date and time on the webpage
    document.querySelector('.georgian-time').innerHTML = `<p>Date: ${formattedDate}</p><p>Time: ${formattedTime}</p>`;
  }

  // Update date and time every second
  setInterval(displayGeorgiaDateTime, 1000);

  // Initial call to display date and time immediately
  displayGeorgiaDateTime();