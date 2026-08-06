"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  castingBriefSchema,
  PROJECT_TYPES,
  BUDGET_RANGES,
  type CastingBriefInput,
} from "@/lib/schemas/casting-brief";
import { useApiFormSubmit } from "@/hooks/use-api-form-submit";
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

const defaultValues: CastingBriefInput = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  projectType: "TVC / Advertisement",
  projectTitle: "",
  roleRequirements: "",
  numberOfRoles: 1,
  shootLocation: "",
  timeline: "",
  budgetRange: "Prefer to discuss",
  additionalNotes: "",
};

export function CastingBriefForm() {
  const form = useForm<CastingBriefInput>({
    resolver: zodResolver(castingBriefSchema),
    defaultValues,
  });
  const { submit, isSubmitting } = useApiFormSubmit<CastingBriefInput>("/api/casting-brief");

  async function onSubmit(values: CastingBriefInput) {
    await submit(values, () => form.reset(defaultValues));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company / Production Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Meridian Pictures" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@production.com" {...field} />
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

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Type *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {PROJECT_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
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
            name="projectTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project Title *</FormLabel>
                <FormControl>
                  <Input placeholder="Working title" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="roleRequirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Role Requirements *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the role(s): age range, gender, look, language, key scenes…"
                  rows={5}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-3">
          <FormField
            control={form.control}
            name="numberOfRoles"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Number of Roles *</FormLabel>
                <FormControl>
                  <Input type="number" min={1} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="shootLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Shoot Location *</FormLabel>
                <FormControl>
                  <Input placeholder="City / studio" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="timeline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Timeline *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. Shoots in October" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="budgetRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Budget Range *</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="sm:max-w-xs">
                    <SelectValue placeholder="Select budget range" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {BUDGET_RANGES.map((range) => (
                    <SelectItem key={range} value={range}>
                      {range}
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
          name="additionalNotes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Anything else we should know" rows={3} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" disabled={isSubmitting} className="self-start">
          {isSubmitting ? "Submitting…" : "Submit Casting Brief"}
        </Button>
      </form>
    </Form>
  );
}
