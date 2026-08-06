import type { SVGProps } from "react";

/**
 * Lucide dropped brand/logo glyphs from its icon set, so social icons are hand-rolled here
 * as minimal inline SVGs (24x24, stroke-based to match the lucide look) instead.
 */
type IconProps = SVGProps<SVGSVGElement>;

function baseProps(props: IconProps) {
  return {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    ...props,
  };
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <line x1="7.5" y1="10.5" x2="7.5" y2="16.5" />
      <circle cx="7.5" cy="7" r="0.9" fill="currentColor" stroke="none" />
      <path d="M11.5 16.5v-4a2 2 0 0 1 4 0v4" />
      <line x1="11.5" y1="10.5" x2="11.5" y2="16.5" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M14 21v-7h2.5l.5-3H14V9c0-.9.3-1.5 1.7-1.5H17V5c-.3 0-1.2-.1-2.2-.1-2.2 0-3.8 1.3-3.8 3.8V11H8.5v3H11v7Z" />
    </svg>
  );
}
