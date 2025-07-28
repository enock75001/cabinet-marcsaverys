import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, CheckCircle, HandCoins, Heart, Home, MapPin, Phone, Scale, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Droit Immobilier",
      description: "Conseil et rédaction d'actes pour ventes, acquisitions, et copropriété.",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Droit de la Famille",
      description: "Contrats de mariage, PACS, gestion de divorces et régimes matrimoniaux.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Droit des Successions",
      description: "Planification successorale, testaments, donations et règlements complets.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Droit des Affaires",
      description: "Constitution de sociétés, cessions d'entreprises et baux commerciaux.",
    },
  ];

  const whyChooseUs = [
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Rigueur et Précision",
      description: "Analyse approfondie de chaque dossier pour une sécurité juridique sans faille.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Conseil sur Mesure",
      description: "Une écoute attentive pour des solutions personnalisées et optimisées.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Relation de Confiance",
      description: "Transparence et disponibilité pour vous accompagner à chaque étape clé.",
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-['Roboto']">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Scale className="h-7 w-7 text-primary" />
            <span className="font-bold text-xl tracking-wide font-['Playfair_Display']">Maître Marc Saverys</span>
          </div>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#engagement" className="hover:text-primary transition-colors">Engagement</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button asChild className="hidden md:flex">
            <a href="#contact">Prendre RDV</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-['Playfair_Display']">
                  Votre Conseiller Juridique de Confiance.
                </h1>
                <p className="text-lg text-muted-foreground">
                  Maître Marc Saverys vous accompagne avec expertise et dévouement dans la réalisation de vos projets de vie.
                  Bénéficiez de plus de 15 ans d'expérience pour sécuriser vos actes les plus importants.
                </p>
                <div className="flex gap-4">
                  <Button size="lg" asChild>
                    <a href="#services">Découvrir nos services</a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                     <a href="#contact">Nous Contacter</a>
                  </Button>
                </div>
              </div>
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl">
                 <Image src="https://placehold.co/600x800.png" alt="Portrait de Maître Marc Saverys" layout="fill" objectFit="cover" data-ai-hint="lawyer portrait" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-['Playfair_Display']">Nos Domaines d'Expertise</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Une compétence juridique complète pour sécuriser vos projets personnels et professionnels.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Card key={service.title} className="bg-card border-border/60 text-center transition-all hover:border-primary hover:-translate-y-2">
                  <CardHeader className="items-center pt-8">
                    {service.icon}
                    <CardTitle className="text-xl pt-4 font-['Playfair_Display']">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="engagement" className="py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-['Playfair_Display']">Notre Engagement à vos Côtés</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Plus qu'un service juridique, un véritable partenariat fondé sur des valeurs solides.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-12 items-start text-center">
              {whyChooseUs.map((item) => (
                <div key={item.title} className="flex flex-col items-center space-y-4">
                  <div className="bg-secondary p-4 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-['Playfair_Display']">{item.title}</h3>
                  <p className="text-muted-foreground max-w-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-['Playfair_Display']">Prêt à discuter de votre projet ?</h2>
             <p className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/80">
              Contactez-nous pour une consultation confidentielle et découvrez comment nous pouvons vous aider.
             </p>
             <Button size="lg" variant="secondary" className="mt-8">
              Prendre un rendez-vous
             </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-secondary text-foreground border-t border-border/40">
        <div className="container mx-auto px-4 md:px-6 py-12">
           <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <h3 className="font-bold text-lg font-['Playfair_Display'] text-primary">Étude Notariale Maître Marc Saverys</h3>
                <p className="text-muted-foreground mt-2">Votre partenaire pour une sécurité juridique durable.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg font-['Playfair_Display']">Contact</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>36120 Jeu-les-Bois, France</li>
                  <li>+33 774 43 5693</li>
                  <li>procureurjustice44@gmail.com</li>
                </ul>
              </div>
               <div>
                <h3 className="font-bold text-lg font-['Playfair_Display']">Horaires</h3>
                <ul className="mt-2 space-y-1 text-muted-foreground">
                  <li>Lundi - Vendredi: 9h - 18h</li>
                  <li>Samedi: 9h - 12h (sur RDV)</li>
                  <li>Dimanche: Fermé</li>
                </ul>
               </div>
           </div>
           <div className="border-t border-border/40 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
              <p>&copy; {new Date().getFullYear()} Étude Notariale Maître Marc Saverys. Tous droits réservés.</p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
