// Central business config for the Ashburn microsite.
//
// TODO BEFORE LAUNCH: fill in the real street address, phone number,
// hours, and email. Pages and JSON-LD deliberately OMIT any field that
// is still a placeholder — never publish placeholder NAP data.

export const business = {
  name: "AZ Tech IT Repair",
  city: "Ashburn, VA",
  siteUrl: "https://ashburncomputerrepair.com",
  serviceArea: [
    "Ashburn",
    "Sterling",
    "Leesburg",
    "Herndon",
    "Reston",
    "Loudoun County",
  ],
  streetAddress: "44075 Pipeline Plaza Ste. 215",
  addressLocality: "Ashburn",
  addressRegion: "VA",
  postalCode: "20147",
  fullAddress: "44075 Pipeline Plaza Ste. 215, Ashburn, VA 20147",
  phoneDisplay: "(866) 991-6727",
  phone: "+1-866-991-6727",
  hoursDisplay:
    "Open every day — walk-ins 8:30 AM–2:00 PM; after-hours by appointment",
  openingHours: "Mo-Su 08:30-14:00",
  // TODO: real contact email, if one should be listed
  email: null as string | null,
};

export const serviceAreaText = business.serviceArea.join(", ");
