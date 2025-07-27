"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just simulate a successful submission.
  console.log("Form submitted:", values);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real application, you would handle potential errors here.
  // For example, if an email service fails to send.
  
  return { success: true, message: "Message sent successfully!" };
}
