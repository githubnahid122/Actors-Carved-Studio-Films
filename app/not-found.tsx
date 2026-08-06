import Link from "next/link";

import { Container } from "@/components/shared/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <span className="font-display text-7xl text-gold">404</span>
        <h1 className="font-display text-3xl text-foreground">Scene not found</h1>
        <p className="max-w-md text-muted">
          This page didn&apos;t make the final cut. Let&apos;s get you back to the main feature.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </Container>
    </div>
  );
}
