/**
 * Single source of truth for every business fact on the site.
 *
 * RULE: nothing in this file may be changed without confirmation from Sherri.
 * Every value here is taken from the live shedrivessocal.com site or from
 * facts confirmed directly. No value here is an estimate or a placeholder
 * except where it is explicitly marked TODO, and no TODO may be published.
 */

export const site = {
  name: "She Drives",
  legalName: "She Drives LLC",
  tagline: "Women-Led Chauffeur Service",

  // Confirmed: live site footer, every page.
  phone: "(949) 688-6767",
  phoneHref: "tel:+19496886767",
  smsHref: "sms:+19496886767",
  email: "contact@SheDrivesSoCal.com",

  // Confirmed: live site footer. Seal Beach is the registered address.
  address: {
    locality: "Seal Beach",
    region: "CA",
    country: "US",
  },

  // Confirmed: live site footer, every page.
  tcp: "TCP 46691-A",
  tcpLong: "California TCP 46691-A",

  // Confirmed: Instagram handle in use.
  instagram: "https://www.instagram.com/shedriveschauffeur/",

  // The production domain. Staging runs on *.pages.dev until she says go.
  siteUrl: "https://www.shedrivessocal.com",

  // Confirmed: services page airport list.
  airports: [
    { code: "LAX", name: "Los Angeles International Airport" },
    { code: "LGB", name: "Long Beach Airport" },
    { code: "SNA", name: "John Wayne Airport Orange County" },
    { code: "BUR", name: "Burbank Airport" },
    { code: "ONT", name: "Ontario International Airport" },
    { code: "VNY", name: "Van Nuys Airport" },
    { code: "HHR", name: "Hawthorne Airport" },
  ],

  // Confirmed: services page cruise port list.
  cruisePorts: ["San Pedro", "Long Beach", "San Diego"],

  // Tier 1 and tier 2 from the blueprint. Stated as served, not as
  // dedicated pages until those pages exist.
  serviceAreas: [
    "Seal Beach",
    "Los Alamitos",
    "Rossmoor",
    "Long Beach",
    "Huntington Beach",
    "Newport Beach",
    "Irvine",
    "Orange County",
    "Los Angeles County",
  ],
} as const;

/**
 * The overflow clause. This is the most important paragraph on the site and
 * the one thing that must never be reworded without Sherri's sign-off.
 * It appears verbatim on the homepage, the women-led page and /vehicles/.
 */
export const overflowClause =
  "Every She Drives chauffeur is a woman. If your date, your group size, or " +
  "your vehicle is something we cannot cover ourselves, we will tell you " +
  "before anything is booked and let you decide whether a vetted partner " +
  "operator works for you. We will never put you in a car you did not agree to.";

/**
 * Testimonials, copied verbatim from the live testimonials page, which is
 * the only form in which they are cleared to appear. Attribution stays at
 * first name and last initial. Nothing is added here without written consent.
 */
export const testimonials = [
  {
    quote:
      "I rely on She Drives weekly for business travel and going to meetings. " +
      "The level of professionalism, discretion and consistency is exceptional. " +
      "I know I'll be on time, taken care of, and able to focus on what matters.",
    attribution: "James R.",
  },
  {
    quote:
      "Whether it's an airport transfer, a night out to a concert, or a multi-day " +
      "trip, She Drives is always our first call. The level of care is unmatched.",
    attribution: "Michael & Lauren T.",
  },
  {
    quote:
      "She Drives handled real-time tracking and coordination flawlessly for our " +
      "group of 50. The service was seamless start to finish. Truly outstanding!",
    attribution: "Lynn S.",
  },
] as const;

export const nav = [
  { href: "/women-led-chauffeur-service/", label: "Women-Led" },
  { href: "/lax-car-service/", label: "LAX" },
  { href: "/about/", label: "About" },
  { href: "/book/", label: "Reserve" },
] as const;
