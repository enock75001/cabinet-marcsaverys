import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, Briefcase, BookOpen, MapPin, Phone, Mail, Clock, Scale } from "lucide-react";

export default function HomePage() {
  const services = [
    {
      icon: <Home className="h-10 w-10 text-primary" />,
      title: "Droit Immobilier",
      description: "Accompagnement pour l'achat, la vente, et le financement de vos biens immobiliers.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Droit de la Famille",
      description: "Contrats de mariage, PACS, donations, adoptions et protection des proches.",
    },
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      title: "Droit des Sociétés",
      description: "Création, transmission ou cession de votre entreprise et gestion de patrimoine.",
    },
    {
      icon: <BookOpen className="h-10 w-10 text-primary" />,
      title: "Successions",
      description: "Planification successorale, testaments, et règlement des successions.",
    }
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Scale className="h-7 w-7 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary tracking-tight font-headline">Étude Notariale</h1>
              <p className="text-sm text-muted-foreground">Maître Marc Saverys</p>
            </div>
          </div>
          <Button asChild>
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 md:py-32 text-center bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Conseil, Authenticité, Sécurité
            </h2>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
              Votre notaire à Jeu-les-Bois, expert en droit immobilier, famille, sociétés et successions. Nous sécurisons les actes importants de votre vie.
            </p>
            <Button asChild size="lg" className="mt-8">
              <a href="#services">Découvrir nos services</a>
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h3 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Nos Domaines d'Expertise</h3>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Une expertise complète pour vous accompagner à chaque étape.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="text-left p-6 shadow-sm hover:shadow-lg transition-shadow duration-300">
                  <div className="mb-4">{service.icon}</div>
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-2">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 md:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center space-y-6">
               <h3 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-primary">
                  À Propos de l'Étude
                </h3>
                <p className="text-lg text-muted-foreground">
                  Membre de la Chambre des Notaires de l'Indre, Maître Marc Saverys s'engage à fournir un service notarial de proximité, alliant rigueur juridique et écoute attentive. Notre mission est de vous offrir des solutions claires et sécurisées pour tous vos projets personnels et professionnels.
                </p>
                 <p className="text-lg text-muted-foreground">
                  Nous privilégions une relation de confiance et de transparence, en rendant le droit accessible pour vous accompagner dans la durée.
                </p>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center space-y-4 mb-16">
              <h3 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Contact & Horaires</h3>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Contactez-nous pour prendre rendez-vous.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <Card className="p-6 shadow-sm">
                <CardHeader className="p-0 items-center">
                   <div className="bg-primary/10 p-3 rounded-full mb-2"><MapPin className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Adresse</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">36120 Jeu-les-Bois, France</p>
                   <Button variant="link" asChild className="p-0 h-auto mt-1 text-primary">
                      <a href="https://www.google.com/maps/search/?api=1&query=36120+Jeu-les-Bois,France" target="_blank" rel="noopener noreferrer">
                        Voir sur la carte
                      </a>
                    </Button>
                </CardContent>
              </Card>
               <Card className="p-6 shadow-sm">
                <CardHeader className="p-0 items-center">
                  <div className="bg-primary/10 p-3 rounded-full mb-2"><Phone className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Contact</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">+33 7 74 43 56 93</p>
                  <p className="text-muted-foreground">procureurjustice44@gmail.com</p>
                </CardContent>
              </Card>
              <Card className="p-6 shadow-sm">
                <CardHeader className="p-0 items-center">
                   <div className="bg-primary/10 p-3 rounded-full mb-2"><Clock className="h-6 w-6 text-primary" /></div>
                  <CardTitle>Horaires</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <ul className="text-muted-foreground">
                      <li>Lundi - Vendredi: 9h00 - 18h00</li>
                      <li>Samedi: 9h00 - 12h00</li>
                      <li className="text-sm mt-2">Sur rendez-vous uniquement.</li>
                    </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary/5 border-t">
        <div className="container mx-auto px-4 md:px-6 py-6 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Étude Notariale Maître Marc Saverys. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}