import type { Metadata } from "next";

import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { ProgramsComparison, EnquiryForm } from "@/features/academy";

export const metadata: Metadata = {
  title: "Programs & Fees",
  description:
    "Compare the 3 Months Weekend, 6 Months Advanced, and 1 Year Flagship Diploma acting programs — duration, schedule, and outcomes.",
  alternates: { canonical: "/academy/programs" },
  openGraph: { url: "/academy/programs" },
};

export default function ProgramsPage() {
  return (
    <div className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Programs & Fees"
          title="Choose the pace that fits your commitment"
          description="All programs share the same craft standard — the difference is depth, duration, and industry access. Fees are shared on enquiry to match your program and batch."
          align="center"
          className="mx-auto mb-16 max-w-2xl"
        />
        <ProgramsComparison />
      </Container>
      <EnquiryForm />
    </div>
  );
}
