import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  CastingBriefForm,
  ActorRegistrationForm,
  CastingWhatsAppCta,
} from "@/features/casting-desk";

export const metadata: Metadata = {
  title: "Casting Desk",
  description:
    "Submit a casting brief for your production, or register as an actor on the Actors Carved Studio casting desk.",
  alternates: { canonical: "/casting-desk" },
  openGraph: { url: "/casting-desk" },
};

export default function CastingDeskPage() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Casting Desk"
          title="Brief a role, or step in front of the camera"
          description="Agencies and productions submit a casting brief below. Actors register directly to join our talent pool."
          className="mb-12 max-w-3xl"
        />

        <Tabs defaultValue="brief">
          <TabsList>
            <TabsTrigger value="brief">Submit a Casting Brief</TabsTrigger>
            <TabsTrigger value="register">Register as an Actor</TabsTrigger>
          </TabsList>

          <TabsContent value="brief">
            <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
              <CastingBriefForm />
              <CastingWhatsAppCta variant="brief" />
            </div>
          </TabsContent>

          <TabsContent value="register">
            <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
              <ActorRegistrationForm />
              <CastingWhatsAppCta variant="registration" />
            </div>
          </TabsContent>
        </Tabs>
      </Container>
    </div>
  );
}
