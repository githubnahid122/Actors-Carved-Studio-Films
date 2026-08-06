"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  actorRegistrationSchema,
  EXPERIENCE_LEVELS,
  GENDER_OPTIONS,
  type ActorRegistrationInput,
} from "@/lib/schemas/actor-registration";
import { FILE_UPLOAD_LIMITS } from "@/lib/constants";
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
import { UploadInput } from "@/components/shared/upload-input";

const defaultValues: ActorRegistrationInput = {
  fullName: "",
  email: "",
  phone: "",
  age: 18,
  gender: "Prefer not to say",
  city: "",
  experienceLevel: "Fresher / No experience",
  languages: "",
  heightCm: undefined,
  headshotUrl: "",
  reelUrl: "",
  instagramHandle: "",
  aboutYou: "",
};

export function ActorRegistrationForm() {
  const form = useForm<ActorRegistrationInput>({
    resolver: zodResolver(actorRegistrationSchema),
    defaultValues,
  });
  const { submit, isSubmitting } = useApiFormSubmit<ActorRegistrationInput>(
    "/api/actor-registration",
  );

  async function onSubmit(values: ActorRegistrationInput) {
    await submit(values, () => form.reset(defaultValues));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6" noValidate>
        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
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
                  <Input type="email" placeholder="you@email.com" {...field} />
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
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City *</FormLabel>
                <FormControl>
                  <Input placeholder="Hyderabad" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age *</FormLabel>
                <FormControl>
                  <Input type="number" min={3} max={90} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {GENDER_OPTIONS.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
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
            name="heightCm"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Height (cm)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={90}
                    max={230}
                    value={field.value ?? ""}
                    onChange={(e) =>
                      field.onChange(e.target.value === "" ? undefined : Number(e.target.value))
                    }
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="experienceLevel"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Experience *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {EXPERIENCE_LEVELS.map((level) => (
                      <SelectItem key={level} value={level}>
                        {level}
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
            name="languages"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Languages *</FormLabel>
                <FormControl>
                  <Input placeholder="Hindi, English, Telugu" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="headshotUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Headshot Photo *</FormLabel>
              <UploadInput
                id="headshot-upload"
                label="Upload a recent headshot"
                resourceType="image"
                folder="actors-carved/headshots"
                accept={FILE_UPLOAD_LIMITS.headshot.accept}
                maxSizeMb={FILE_UPLOAD_LIMITS.headshot.maxSizeMb}
                onUploaded={field.onChange}
                required
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="reelUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Showreel (optional)</FormLabel>
              <UploadInput
                id="reel-upload"
                label="Upload a showreel or self-tape"
                resourceType="video"
                folder="actors-carved/reels"
                accept={FILE_UPLOAD_LIMITS.reel.accept}
                maxSizeMb={FILE_UPLOAD_LIMITS.reel.maxSizeMb}
                onUploaded={field.onChange}
              />
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="instagramHandle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Instagram Handle</FormLabel>
                <FormControl>
                  <Input placeholder="@yourhandle" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="aboutYou"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About You</FormLabel>
              <FormControl>
                <Textarea placeholder="Training, notable work, special skills…" rows={4} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" disabled={isSubmitting} className="self-start">
          {isSubmitting ? "Submitting…" : "Register as an Actor"}
        </Button>
      </form>
    </Form>
  );
}
