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
  // TODO: real street address (e.g. "123 Example Rd, Ashburn, VA 20147")
  streetAddress: null as string | null,
  // TODO: real phone number
  phone: null as string | null,
  // TODO: real opening hours
  hours: null as string | null,
  // TODO: real contact email
  email: null as string | null,
};

export const serviceAreaText = business.serviceArea.join(", ");
