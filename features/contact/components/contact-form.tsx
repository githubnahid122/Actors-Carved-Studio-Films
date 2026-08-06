"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { contactEnquirySchema, type ContactEnquiryInput } from "@/lib/schemas/contact-enquiry";
import { useApiFormSubmit } from "@/hooks/use-api-form-submit";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const defaultValues: ContactEnquiryInput = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const form = useForm<ContactEnquiryInput>({
    resolver: zodResolver(contactEnquirySchema),
    defaultValues,
  });
  const { submit, isSubmitting } = useApiFormSubmit<ContactEnquiryInput>("/api/contact-enquiry");

  async function onSubmit(values: ContactEnquiryInput) {
    await submit(values, () => form.reset(defaultValues));
  }

  return (
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
                <FormLabel>Phone</FormLabel>
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
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject *</FormLabel>
              <FormControl>
                <Input placeholder="What is this about?" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message *</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us more…" rows={5} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" disabled={isSubmitting} className="self-start">
          {isSubmitting ? "Sending…" : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}
