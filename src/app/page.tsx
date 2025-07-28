import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Gavel, Heart, Home, ShieldCheck, Star, Users } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-primary" />,
      title: "Droit Immobilier",
      description: "Conseil et rédaction d'actes pour ventes, acquisitions, et copropriété.",
      href: "/services",
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: "Droit de la Famille",
      description: "Contrats de mariage, PACS, gestion de divorces et régimes matrimoniaux.",
      href: "/services",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Droit des Successions",
      description: "Planification successorale, testaments, donations et règlements complets.",
      href: "/services",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Droit des Affaires",
      description: "Constitution de sociétés, cessions d'entreprises et baux commerciaux.",
      href: "/services",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Gavel className="h-10 w-10 text-primary" />,
      title: "Rigueur et Précision",
      description: "Analyse approfondie de chaque dossier pour une sécurité juridique sans faille.",
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-primary" />,
      title: "Conseil sur Mesure",
      description: "Une écoute attentive pour des solutions personnalisées et optimisées.",
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Relation de Confiance",
      description: "Transparence et disponibilité pour vous accompagner à chaque étape clé.",
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-sans">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground font-display">
                  Votre Conseiller Juridique de Confiance.
                </h1>
                <p className="text-lg text-muted-foreground">
                  Maître Marc Saverys vous accompagne avec expertise et dévouement dans la réalisation de vos projets de vie.
                  Bénéficiez de plus de 15 ans d'expérience pour sécuriser vos actes les plus importants.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" asChild>
                    <a href="/services">Découvrir nos services</a>
                  </Button>
                  <Button size="lg" variant="secondary" asChild>
                     <a href="/contact">Nous Contacter</a>
                  </Button>
                </div>
              </div>
              <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl group">
                 <Image src="https://i.postimg.cc/Ghd7PNWJ/notary-office.png" alt="Portrait de Maître Marc Saverys" layout="fill" objectFit="cover" className="group-hover:scale-105 transition-transform duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">Nos Domaines d'Expertise</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Une compétence juridique complète pour sécuriser vos projets personnels et professionnels.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <a href={service.href} key={service.title}>
                  <Card className="bg-card border-border/60 text-center h-full transition-all hover:border-primary hover:-translate-y-2 flex flex-col">
                    <CardHeader className="items-center pt-8">
                      {service.icon}
                      <CardTitle className="text-xl pt-4 font-display">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild>
                <a href="/services">Voir tous les services</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">Notre Engagement à vos Côtés</h2>
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
                  <h3 className="text-2xl font-bold font-display">{item.title}</h3>
                  <p className="text-muted-foreground max-w-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold font-display">Prêt à discuter de votre projet ?</h2>
             <p className="mt-4 max-w-xl mx-auto text-lg text-primary-foreground/80">
              Contactez-nous pour une consultation confidentielle et découvrez comment nous pouvons vous aider.
             </p>
             <Button size="lg" variant="secondary" className="mt-8" asChild>
              <a href="/contact">Prendre un rendez-vous</a>
             </Button>
          </div>
        </section>
    </div>
  );
}
