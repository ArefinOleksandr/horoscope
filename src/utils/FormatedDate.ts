const WEEKDAYS_NOMINATIVE = [
    "Неділя",
    "Понеділок",
    "Вівторок",
    "Середа",
    "Четвер",
    "П’ятниця",
    "Субота",
  ];
  
  export function formatDateToUkrainian(dateStr: string): string {
    const date = new Date(dateStr);
  
    const weekday = WEEKDAYS_NOMINATIVE[date.getDay()]; // 0 — Неділя, 1 — Понеділок...
  
    const formatter = new Intl.DateTimeFormat("uk-UA", {
      day: "numeric",
      month: "long",
    });
  
    const dayMonth = formatter.format(date); // "9 квітня"
  
    return `${weekday} \n ${dayMonth}`;
  }