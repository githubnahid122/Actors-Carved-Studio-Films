"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  academyEnquirySchema,
  COURSE_INTERESTS,
  type AcademyEnquiryInput,
} from "@/lib/schemas/academy-enquiry";
import { useApiFormSubmit } from "@/hooks/use-api-form-submit";
import { Container } from "@/components/shared/container";
import { SectionHeading } from "@/components/shared/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const defaultValues: AcademyEnquiryInput = {
  name: "",
  email: "",
  phone: "",
  courseInterest: "Not sure yet — need guidance",
  message: "",
};

export function EnquiryForm() {
  const form = useForm<AcademyEnquiryInput>({
    resolver: zodResolver(academyEnquirySchema),
    defaultValues,
  });
  const { submit, isSubmitting } = useApiFormSubmit<AcademyEnquiryInput>("/api/academy-enquiry");

  async function onSubmit(values: AcademyEnquiryInput) {
    await submit(values, () => form.reset(defaultValues));
  }

  return (
    <section id="enquiry" className="border-t border-border bg-background py-24 md:py-32">
      <Container className="max-w-2xl">
        <SectionHeading
          eyebrow="Enquire Now"
          title="Ready to start training?"
          description="Tell us a little about you — our academy desk replies within 2 business days."
          align="center"
          className="mb-12 mx-auto"
        />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
            <div className="grid gap-6 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone *</FormLabel>
                    <FormControl>
                      <Input type="tel" placeholder="+91 98765 43210" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="you@email.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="courseInterest"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Interest *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a program" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {COURSE_INTERESTS.map((interest) => (
                        <SelectItem key={interest} value={interest}>
                          {interest}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Anything you'd like us to know" rows={4} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting…" : "Send Enquiry"}
            </Button>
          </form>
        </Form>
      </Container>
    </section>
  );
}
