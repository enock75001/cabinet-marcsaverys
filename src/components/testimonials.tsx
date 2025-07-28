"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Famille Dubois",
      avatar: "FD",
      text: "Maître Saverys a été d'une aide inestimable pour notre premier achat immobilier. Son professionnalisme et sa clarté nous ont mis en confiance. Nous le recommandons vivement.",
      service: "Achat Immobilier",
    },
    {
      name: "J. Martin, Chef d'entreprise",
      avatar: "JM",
      text: "Un accompagnement expert pour la création de ma société. Rigueur, efficacité et de précieux conseils. Je suis très satisfait du service rendu.",
      service: "Création de Société",
    },
    {
      name: "Mme. Lefebvre",
      avatar: "ML",
      text: "La gestion de la succession de mon père a été menée avec beaucoup d'humanité et de compétence. Maître Saverys a su simplifier des démarches qui nous semblaient complexes.",
      service: "Règlement de Succession",
    },
    {
        name: "É. Petit & C. Robert",
        avatar: "EC",
        text: "Nous avons fait appel à Maître Saverys pour notre contrat de mariage. Il a été très à l'écoute et a su nous proposer une solution parfaitement adaptée à notre situation.",
        service: "Contrat de Mariage",
    }
  ];

  return (
    <div className="w-full">
      <div className="text-center space-y-4 mb-16">
        <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Ce que disent nos clients</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
          La confiance et la satisfaction de nos clients sont au cœur de nos priorités.
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-4xl mx-auto"
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1 h-full">
                <Card className="h-full flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Avatar className="mb-4 h-16 w-16">
                       <AvatarImage src={`https://placehold.co/64x64/E2E8F0/475569.png?text=${testimonial.avatar}`} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <p className="text-base text-muted-foreground italic">"{testimonial.text}"</p>
                  </CardContent>
                  <div className="p-6 pt-0 text-center">
                    <p className="font-bold text-lg text-primary">{testimonial.name}</p>
                    <p className="text-sm text-accent font-semibold">{testimonial.service}</p>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
