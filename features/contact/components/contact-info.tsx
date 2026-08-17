import { MapPin, Mail, Phone } from "lucide-react";

import { SITE } from "@/lib/constants";
import { WhatsAppButton } from "@/components/shared/whatsapp-button";
import { InstagramIcon, YoutubeIcon, LinkedinIcon, FacebookIcon } from "@/components/shared/social-icons";

const SOCIAL_LINKS = [
  { href: SITE.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SITE.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: SITE.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: SITE.social.facebook, label: "Facebook", Icon: FacebookIcon },
];

const CONTACT_GROUPS = [
  {
    label: "General & Business Enquiries",
    emails: [SITE.email],
    phones: [SITE.phone, SITE.landline],
  },
  {
    label: "For Actors",
    emails: [SITE.actorsEmail, SITE.actorsEmailAlt],
    phones: [SITE.phone],
  },
  {
    label: "Acting Academy",
    emails: [SITE.academyEmail],
    phones: [...SITE.academyPhones],
  },
];

export function ContactInfo() {
  return (
    <div className="flex flex-col gap-8">
      <div className="overflow-hidden rounded-md border border-border">
        <iframe
          src={SITE.address.mapEmbedUrl}
          title="Studio location map"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-64 w-full border-0"
        />
      </div>

      <div className="flex flex-col gap-4 rounded-md border border-border bg-surface p-6">
        <div className="flex gap-3">
          <MapPin className="mt-0.5 size-5 shrink-0 text-gold" />
          <address className="text-sm text-muted not-italic">
            {SITE.address.line1}
            <br />
            {SITE.address.line2}
          </address>
        </div>
      </div>

      {CONTACT_GROUPS.map((group) => (
        <div key={group.label} className="flex flex-col gap-4 rounded-md border border-border bg-surface p-6">
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">{group.label}</h3>
          {group.emails.map((email) => (
            <div key={email} className="flex gap-3">
              <Mail className="size-5 shrink-0 text-gold" />
              <a href={`mailto:${email}`} className="text-sm text-muted hover:text-gold">
                {email}
              </a>
            </div>
          ))}
          {group.phones.map((phone) => (
            <div key={phone} className="flex gap-3">
              <Phone className="size-5 shrink-0 text-gold" />
              <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-sm text-muted hover:text-gold">
                {phone}
              </a>
            </div>
          ))}
        </div>
      ))}

      <WhatsAppButton
        message="Hi Actors Carved Studio, I have a general enquiry."
        label="Chat with us on WhatsApp"
      />

      <div className="flex gap-3">
        {SOCIAL_LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="flex size-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-gold hover:text-gold"
          >
            <Icon className="size-4" />
          </a>
        ))}
      </div>
    </div>
  );
}
