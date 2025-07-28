"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, Car, Building } from 'lucide-react';
import Image from 'next/image';

const formSchema = z.object({
  name: z.string().min(2, "Le nom est requis."),
  email: z.string().email("L'adresse email est invalide."),
  phone: z.string().optional(),
  subject: z.string().min(1, "Veuillez sélectionner un sujet."),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères."),
  consent: z.boolean().refine(val => val === true, "Vous devez accepter les conditions."),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Ici, vous intégreriez la logique d'envoi d'email
  }

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display">Contactez-nous</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Nous sommes à votre disposition pour répondre à vos questions et vous accompagner dans vos démarches juridiques.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border/60">
              <CardHeader>
                <CardTitle className="font-display text-2xl">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom et Prénom *</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom complet" {...field} />
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
                            <Input type="email" placeholder="votre.email@example.com" {...field} />
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
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="Votre numéro de téléphone" {...field} />
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
                          <FormLabel>Sujet *</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Choisissez un sujet" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="immobilier">Droit Immobilier</SelectItem>
                              <SelectItem value="famille">Droit de la Famille</SelectItem>
                              <SelectItem value="succession">Successions</SelectItem>
                              <SelectItem value="affaires">Droit des Affaires</SelectItem>
                              <SelectItem value="autre">Autre demande</SelectItem>
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
                          <FormLabel>Message *</FormLabel>
                          <FormControl>
                            <Textarea placeholder="Décrivez votre situation ou votre demande..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                     <FormField
                        control={form.control}
                        name="consent"
                        render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                J'accepte que mes données personnelles soient utilisées pour traiter ma demande *
                                </FormLabel>
                                <FormMessage />
                            </div>
                            </FormItem>
                        )}
                        />
                    <Button type="submit">Envoyer le message</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-bold font-display mb-4">Informations de contact</h3>
                    <ul className="space-y-3 text-muted-foreground">
                        <li className="flex items-start"><MapPin className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" /><span><b>Adresse :</b><br/>36120 Jeu-les-Bois, France</span></li>
                        <li className="flex items-center"><Phone className="h-5 w-5 mr-3 text-primary" /><span><b>Téléphone :</b><br/>+33 774 43 5693</span></li>
                        <li className="flex items-center"><Mail className="h-5 w-5 mr-3 text-primary" /><span><b>Email :</b><br/>procureurjustice44@gmail.com</span></li>
                    </ul>
                </div>
                 <div>
                    <h3 className="text-xl font-bold font-display mb-4">Horaires d'ouverture</h3>
                    <ul className="space-y-2 text-muted-foreground">
                         <li className="flex items-center"><Clock className="h-5 w-5 mr-3 text-primary" /><span>Lundi - Vendredi: 9h00 - 18h00</span></li>
                         <li className="flex items-center"><Clock className="h-5 w-5 mr-3 text-primary" /><span>Samedi: 9h00 - 12h00</span></li>
                         <li className="flex items-center text-destructive/80"><Clock className="h-5 w-5 mr-3 text-destructive/80" /><span>Dimanche: Fermé</span></li>
                         <li className="pl-8 pt-1 text-sm">Rendez-vous sur rendez-vous uniquement</li>
                    </ul>
                     <p className="mt-4 text-sm text-muted-foreground border-l-2 border-primary pl-4"><b>Urgences :</b> En cas d'urgence en dehors des heures d'ouverture, laissez un message détaillé sur notre répondeur. Nous vous recontacterons dans les plus brefs délais.</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold font-display mb-4">Notre localisation</h3>
                    <div className="relative h-64 w-full rounded-lg overflow-hidden border">
                         <Image src="https://i.postimg.cc/Ghd7PNWJ/notary-office.png" alt="Carte de localisation" layout="fill" objectFit="cover" />
                    </div>
                     <div className="grid grid-cols-2 gap-4 mt-4 text-muted-foreground text-sm">
                        <div className="flex items-start"><Car className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" /><div><b>Accès et Transport :</b><br/>Accès facile par la D925. Stationnement gratuit sur place.</div></div>
                        <div className="flex items-start"><Building className="h-5 w-5 mr-3 mt-1 text-primary shrink-0" /><div><b>Localisation :</b><br/>Centre-ville de Jeu-les-Bois, proche de Châteauroux.</div></div>
                     </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
