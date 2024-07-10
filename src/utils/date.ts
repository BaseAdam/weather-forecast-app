function getDate(): string {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      day: '2-digit', 
      month: 'long'
    };
    const formattedDate = today.toLocaleDateString('en-US', options);
    return formattedDate;
  }
  
  export const date = getDate();