import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center", className)}
      aria-label="Actors Carved Studio & Films — home"
    >
      <Image
        src="/images/logo-light.png"
        alt="Actors Carved Studio & Films"
        width={784}
        height={401}
        priority
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
