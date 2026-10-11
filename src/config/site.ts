export const siteConfig = {
  name: "Urban Bite Kitchen",
  phone: "0161 555 2847",
  whatsapp: "+44 161 555 2847",
  whatsappDigits: "441615552847",
  email: "hello@urbanbitekitchen.co.uk",
  address: "42 Wilmslow Road, Manchester, M14 5TP",
  domain: "urbanbitekitchen.co.uk",
  siteUrl: "https://urbanbitekitchen.co.uk",
  openingHours: {
    structured: [
      { day: "Monday", open: "11:30", close: "23:00" },
      { day: "Tuesday", open: "11:30", close: "23:00" },
      { day: "Wednesday", open: "11:30", close: "23:00" },
      { day: "Thursday", open: "11:30", close: "23:00" },
      { day: "Friday", open: "11:30", close: "00:00" },
      { day: "Saturday", open: "11:30", close: "00:00" },
      { day: "Sunday", open: "12:00", close: "22:00" },
    ],
    display: {
      monThu: "Mon–Thu: 11:30–23:00",
      friSat: "Fri–Sat: 11:30–00:00",
      sun: "Sun: 12:00–22:00",
      full: "Mon–Thu 11:30–23:00 • Fri–Sat 11:30–00:00 • Sun 12:00–22:00",
    },
  },
  social: {
    instagram: {
      url: "https://instagram.com/urbanbitekitchen",
      label: "Instagram",
      note: "TODO: replace with real URL",
    },
    facebook: {
      url: "https://facebook.com/urbanbitekitchen",
      label: "Facebook",
      note: "TODO: replace with real URL",
    },
  },
  currency: "GBP",
  locale: "en-GB",
} as const;

export type SiteConfig = typeof siteConfig;