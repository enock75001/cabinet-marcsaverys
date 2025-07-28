import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Users, Briefcase, BookOpen, MapPin, Phone, Mail, Menu } from "lucide-react";
import Image from "next/image";
import ConceptExplainer from "@/components/concept-explainer";
import { ContactForm } from "@/components/contact-form";
import Testimonials from "@/components/testimonials";

function ScaleIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m16 16 3-8 3 8c-2 1-4 1-6 0" />
      <path d="m2 16 3-8 3 8c-2 1-4 1-6 0" />
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
    </svg>
  );
}

export default function HomePage() {
  const services = [
    {
      icon: <Home className="h-8 w-8 text-accent" />,
      title: "Droit Immobilier",
      description: "Accompagnement complet pour l'achat, la vente, le financement et la gestion de vos biens immobiliers.",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Droit de la Famille",
      description: "Conseils et rédaction d'actes pour contrats de mariage, PACS, donations, adoptions et protection des proches.",
    },
    {
      icon: <Briefcase className="h-8 w-8 text-accent" />,
      title: "Droit des Sociétés",
      description: "Assistance pour la création, la transmission ou la cession de votre entreprise et gestion de patrimoine professionnel.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Gestion de Patrimoine & Successions",
      description: "Planification successorale, testaments, et règlement des successions pour protéger et transmettre votre patrimoine.",
    }
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center gap-3">
            <ScaleIcon className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary font-headline tracking-tight">Maître Marc Saverys</span>
          </a>
          <nav className="hidden md:flex gap-6 text-base font-medium items-center">
            <a href="#about" className="hover:text-primary transition-colors">À Propos</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Témoignages</a>
            <a href="#explainer" className="hover:text-primary transition-colors">Explication</a>
            <Button asChild variant="outline">
                <a href="#contact">Contact</a>
            </Button>
          </nav>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Ouvrir le menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full h-[70vh] flex items-center justify-center text-center text-primary-foreground">
          <div className="absolute inset-0 bg-primary/90">
            <Image
              src="https://placehold.co/1920x1080.png"
              alt="Intérieur d'un bureau juridique moderne"
              fill
              className="object-cover opacity-10"
              data-ai-hint="law office interior"
              priority
            />
          </div>
          <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center">
            <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter max-w-4xl">
              Conseil juridique, vision stratégique
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
              Maître Marc Saverys vous accompagne avec rigueur et bienveillance pour sécuriser tous les actes importants de votre vie.
            </p>
            <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-lg py-7 px-10 rounded-full shadow-lg transition-transform hover:scale-105">
              <a href="#contact">Prendre rendez-vous</a>
            </Button>
          </div>
        </section>

        <section id="about" className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
              <div className="rounded-lg overflow-hidden shadow-2xl order-last md:order-first">
                <Image
                  src="https://placehold.co/600x700.png"
                  alt="Portrait de Maître Marc Saverys"
                  width={600}
                  height={700}
                  className="object-cover w-full h-full"
                  data-ai-hint="professional portrait lawyer"
                />
              </div>
              <div className="space-y-6">
                <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
                  Maître Marc Saverys
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fort d'une solide expérience et d'une expertise reconnue, Maître Marc Saverys a fondé son étude avec la conviction que chaque client mérite une écoute attentive et des solutions juridiques sur-mesure. Diplômé de l'Université Panthéon-Sorbonne, il s'engage à offrir un service de haute qualité, alliant tradition notariale et approches modernes.
                </p>
                <p className="text-lg text-muted-foreground">
                  Sa pratique est guidée par les valeurs de rigueur, de transparence et de proactivité. Il met un point d'honneur à rendre le droit accessible et à construire des relations de confiance durables avec ses clients, les accompagnant à chaque étape clé de leur vie personnelle et professionnelle.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Nos Domaines d'Expertise</h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Nous offrons une gamme complète de services notariaux pour les particuliers et les professionnels.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card text-center p-8 flex flex-col items-center shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-accent">
                  <div className="mb-4">{service.icon}</div>
                  <CardHeader className="p-0">
                    <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 mt-4">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 md:py-32 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <Testimonials />
          </div>
        </section>

        <section id="explainer" className="py-20 md:py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <ConceptExplainer />
          </div>
        </section>

        <section id="contact" className="py-20 md:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Contactez l'Étude</h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Pour toute question ou pour prendre rendez-vous, n'hésitez pas à nous contacter.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16">
              <Card className="p-8 shadow-lg bg-card">
                <ContactForm />
              </Card>
              <div className="space-y-8 flex flex-col justify-center">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-full"><MapPin className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-xl">Adresse de l'étude</h3>
                    <p className="text-muted-foreground">123 Rue du Droit, 75001 Paris, France</p>
                    <Button variant="link" asChild className="p-0 h-auto mt-2 text-accent hover:text-accent/90">
                      <a href="https://www.google.com/maps/search/?api=1&query=123+Rue+du+Droit,75001+Paris,France" target="_blank" rel="noopener noreferrer">
                        Voir sur la carte
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-primary/10 p-3 rounded-full"><Phone className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-xl">Téléphone</h3>
                    <p className="text-muted-foreground">+33 1 23 45 67 89</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                   <div className="bg-primary/10 p-3 rounded-full"><Mail className="h-6 w-6 text-primary" /></div>
                  <div>
                    <h3 className="font-semibold text-xl">Email</h3>
                    <p className="text-muted-foreground">contact@saverys-notaire.fr</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <p>&copy; {new Date().getFullYear()} Maître Marc Saverys. Tous droits réservés.</p>
            <p className="text-sm text-primary-foreground/70 mt-2">123 Rue du Droit, 75001 Paris, France</p>
        </div>
      </footer>
    </div>
  );
}
