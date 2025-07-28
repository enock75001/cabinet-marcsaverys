import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Building, CheckCircle, HandCoins, Heart, Home, MapPin, Phone, Scale, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Immobilier",
      description: "Ventes, acquisitions, prêts immobiliers et copropriété",
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: "Droit de la famille",
      description: "Mariages, PACS, divorces et régimes matrimoniaux",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Successions",
      description: "Testaments, donations et règlements successoraux",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Droit des affaires",
      description: "Créations, cessions d'entreprises et fonds de commerce",
    },
  ];

  const whyChooseUs = [
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Expertise reconnue",
      description: "Plus de 15 ans d'expérience dans tous les domaines du droit notarial",
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Accompagnement personnalisé",
      description: "Une écoute attentive et des conseils adaptés à votre situation",
    },
    {
      icon: <HandCoins className="h-8 w-8 text-primary" />,
      title: "Disponibilité",
      description: "Écoute attentive et suivi personnalisé de vos dossiers",
    },
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-primary" />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">Maître Marc Saverys</span>
              <span className="text-sm text-muted-foreground">Notaire</span>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#home" className="hover:text-primary transition-colors">Accueil</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#about" className="hover:text-primary transition-colors">À propos</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
          <Button className="md:hidden">Menu</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="py-20 md:py-32 bg-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1 text-sm font-semibold text-primary">
              15+ années d&apos;expérience
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-primary">
              Maître Marc Saverys
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mt-2">Notaire à Jeu-les-Bois</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80">
              Expertise juridique et accompagnement personnalisé pour tous vos projets immobiliers, familiaux et patrimoniaux depuis plus de 15 ans. Votre partenaire juridique pour la vie.
            </p>
            <p className="mt-4 font-semibold text-primary">
              Sécurité juridique garantie • Actes authentiques
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Nos domaines d&apos;expertise</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Une approche professionnelle et humaine pour vous accompagner dans tous vos projets juridiques.
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <Card key={service.title} className="text-center transition-shadow hover:shadow-lg">
                  <CardHeader className="items-center">{service.icon}</CardHeader>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">Pourquoi choisir notre étude ?</h2>
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-lg">
                 <Image src="https://placehold.co/600x400.png" alt="Notre étude à Jeu-les-Bois" layout="fill" objectFit="cover" data-ai-hint="office building" />
                 <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-2xl font-bold text-white">Notre étude à Jeu-les-Bois</h3>
                 </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-primary">Besoin d&apos;un conseil juridique ?</h2>
             <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
              Contactez-nous pour un premier entretien et bénéficiez de notre expertise.
             </p>
             <Button size="lg" className="mt-8">Contactez-nous</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer id="contact" className="bg-primary text-primary-foreground border-t">
        <div className="container mx-auto px-4 md:px-6 py-12">
           <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <h3 className="font-bold text-lg">Étude Notariale</h3>
                <p>Maître Marc Saverys</p>
                <p>Notaire</p>
                <p>Membre de la Chambre des Notaires de l&apos;Indre</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Contact</h3>
                <p>36120 Jeu-les-Bois, France</p>
                <p>+33 774 43 5693</p>
                <p>procureurjustice44@gmail.com</p>
              </div>
               <div>
                <h3 className="font-bold text-lg">Horaires</h3>
                <p>Lundi - Vendredi: 9h00 - 18h00</p>
                <p>Samedi: 9h00 - 12h00</p>
                <p>Dimanche: Fermé</p>
                <p className="font-semibold">Rendez-vous sur rendez-vous uniquement</p>
               </div>
           </div>
           <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm">
              <p>&copy; {new Date().getFullYear()} Étude Notariale Maître Marc Saverys. Tous droits réservés.</p>
              <div className="flex gap-4 mt-4 sm:mt-0">
                <a href="#" className="hover:underline">Mentions légales</a>
                <a href="#" className="hover:underline">Politique de confidentialité</a>
              </div>
           </div>
        </div>
      </footer>
    </div>
  );
}
