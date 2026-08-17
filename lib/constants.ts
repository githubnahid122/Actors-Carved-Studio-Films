/**
 * Site-wide constants. Centralised so brand/contact detail changes happen once.
 */
export const SITE = {
  name: "Actors Carved Studio & Films",
  shortName: "Actors Carved",
  tagline: "Where Performance Is Carved Into Craft.",
  description:
    "A cinematic production house, casting desk, and acting academy — carving actors, briefs, and stories into premium screen work.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.actorscarved.com",
  // General/business enquiries (brands, production houses, casting briefs).
  email: "infoacsfilms@gmail.com",
  adminEmail: process.env.ADMIN_NOTIFICATION_EMAIL ?? "infoacsfilms@gmail.com",
  // Actor-facing enquiries (registrations, casting calls).
  actorsEmail: "casting.acsf@gmail.com",
  actorsEmailAlt: "actorscarvedstudiofilms@gmail.com",
  // Acting Academy enquiries.
  academyEmail: "theatreactorscarved@gmail.com",
  phone: "+91 98185 08398",
  landline: "+91 11 3594 1052",
  academyPhones: ["+91 99112 99301", "+91 88514 32278"],
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919911299301",
  address: {
    line1: "4th Floor, Kaveri Arcade, Film Nagar",
    line2: "Jubilee Hills, Hyderabad, Telangana 500033",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.5!2d78.4107!3d17.4239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!5e0!3m2!1sen!2sin!4v0",
  },
  social: {
    instagram: "https://www.instagram.com/actorscarvedstudio?igsh=MTcwajlsbjdxYzQ4YQ==",
    youtube: "https://youtube.com/@actorscarvedstudiofilms5261?si=P7DVN_uZw_xX514j",
    linkedin:
      "https://www.linkedin.com/in/actorscarved-studio-1a9a5a62?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    facebook: "https://www.facebook.com/share/1HLVdD2qyz/",
  },
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/casting-desk", label: "Casting Desk" },
  { href: "/academy", label: "Academy" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export const PORTFOLIO_CATEGORIES = [
  "TVCs",
  "Movies",
  "Serials",
  "Music Videos",
  "Web Series",
  "Short Films",
  "Vertical Series",
] as const;

export type PortfolioCategory = (typeof PORTFOLIO_CATEGORIES)[number];

export function whatsappLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${encoded}`;
}

export const FILE_UPLOAD_LIMITS = {
  headshot: {
    maxSizeMb: 8,
    accept: ["image/jpeg", "image/png", "image/webp"],
  },
  reel: {
    maxSizeMb: 200,
    accept: ["video/mp4", "video/quicktime", "video/webm"],
  },
} as const;
