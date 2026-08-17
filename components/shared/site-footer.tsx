import Link from "next/link";

import { NAV_LINKS, SITE } from "@/lib/constants";
import { Logo } from "@/components/shared/logo";
import { Container } from "@/components/shared/container";
import { InstagramIcon, YoutubeIcon, LinkedinIcon, FacebookIcon } from "@/components/shared/social-icons";

const SOCIAL_LINKS = [
  { href: SITE.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: SITE.social.youtube, label: "YouTube", Icon: YoutubeIcon },
  { href: SITE.social.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: SITE.social.facebook, label: "Facebook", Icon: FacebookIcon },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
        <div className="flex flex-col gap-4">
          <Logo />
          <p className="max-w-xs text-sm text-muted">{SITE.description}</p>
          <div className="flex gap-3 pt-2">
            {SOCIAL_LINKS.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-muted transition-colors hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Academy</h3>
          <ul className="flex flex-col gap-3">
            <li>
              <Link href="/academy/programs" className="text-sm text-muted transition-colors hover:text-gold">
                Programs &amp; Fees
              </Link>
            </li>
            <li>
              <Link href="/academy#alumni" className="text-sm text-muted transition-colors hover:text-gold">
                Alumni Wall
              </Link>
            </li>
            <li>
              <Link href="/academy#enquiry" className="text-sm text-muted transition-colors hover:text-gold">
                Enquire Now
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
          <address className="flex flex-col gap-2 text-sm text-muted not-italic">
            <span>{SITE.address.line1}</span>
            <span>{SITE.address.line2}</span>
            <a href={`mailto:${SITE.email}`} className="transition-colors hover:text-gold">
              {SITE.email}
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
              {SITE.phone}
            </a>
            <a href={`tel:${SITE.landline.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
              {SITE.landline}
            </a>
          </address>
        </div>
      </Container>

      <Container className="flex flex-col items-center justify-between gap-4 border-t border-border py-6 text-xs text-muted-foreground md:flex-row">
        <p>
          &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </p>
        <p>Crafted with intent, in Hyderabad.</p>
      </Container>
    </footer>
  );
}
