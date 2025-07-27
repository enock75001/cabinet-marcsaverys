"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { submitContactForm } from "@/app/actions";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères."),
  email: z.string().email("Veuillez entrer une adresse e-mail valide."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères.").max(500, "Le message ne peut pas dépasser 500 caractères."),
});

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
        const result = await submitContactForm(values);
        if (result.success) {
          toast({
            title: "Message envoyé !",
            description: "Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.",
          });
          form.reset();
        } else {
          throw new Error(result.message || "An unknown error occurred");
        }
    } catch (error) {
        toast({
            variant: "destructive",
            title: "Erreur d'envoi",
            description: "Une erreur s'est produite. Veuillez réessayer plus tard.",
          });
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom complet</FormLabel>
              <FormControl>
                <Input placeholder="Votre nom et prénom" {...field} disabled={isSubmitting} />
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
              <FormLabel>Adresse e-mail</FormLabel>
              <FormControl>
                <Input placeholder="votre.email@exemple.com" {...field} disabled={isSubmitting} />
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
              <FormLabel>Votre message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Écrivez votre demande ou question ici..."
                  className="resize-none"
                  rows={6}
                  {...field}
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full font-bold" size="lg" disabled={isSubmitting}>
          {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Envoyer le message
        </Button>
      </form>
    </Form>
  );
}
