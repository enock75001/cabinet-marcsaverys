import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Briefcase, Building, GraduationCap, Handshake, Heart, MapPin, Phone, Scale, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";

export default function HomePage() {

  const values = [
    {
      icon: <Scale className="h-8 w-8 text-primary" />,
      title: "Rigueur",
      description: "Une approche méthodique et précise pour chaque dossier.",
    },
    {
      icon: <Handshake className="h-8 w-8 text-primary" />,
      title: "Disponibilité",
      description: "Une écoute attentive et un accompagnement personnalisé.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-primary" />,
      title: "Confiance",
      description: "Une relation durable basée sur la transparence et l'intégrité.",
    },
  ];

  const team = [
    {
      name: "Marie Dupont",
      role: "Clerc principal",
      description: "Spécialiste en droit immobilier avec 15 ans d'expérience",
      avatar: "MD",
    },
    {
      name: "Pierre Martin",
      role: "Clerc senior",
      description: "Expert en droit des successions et fiscalité",
      avatar: "PM",
    },
    {
      name: "Sophie Leroy",
      role: "Assistante juridique",
      description: "Gestion des formalités et suivi clientèle",
      avatar: "SL",
    }
  ];

  return (
    <div className="flex flex-col min-h-dvh bg-background text-foreground font-body">
      {/* Header */}
      <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-50">
        <div className="container mx-auto flex items-center justify-between h-20 px-4 md:px-6">
          <div className="flex items-center gap-3">
            <Scale className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-xl font-bold text-primary tracking-tight font-headline">Étude Notariale Maître Marc Saverys</h1>
              <p className="text-sm text-muted-foreground">Notaire à Jeu-les-Bois</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="hover:text-primary transition-colors">À propos</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#team" className="hover:text-primary transition-colors">L'équipe</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="about" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-3 gap-12 items-center">
            <div className="md:col-span-2 space-y-6">
              <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
                Votre partenaire juridique pour la vie.
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Avec plus de 15 ans d'expérience, j'ai fondé mon étude sur des valeurs de rigueur, de disponibilité et de confiance.
                </p>
                <p>
                  Notre mission est de vous offrir une sécurité juridique optimale en vous fournissant des conseils éclairés et en rédigeant des actes authentiques incontestables, adaptés à chaque situation personnelle et professionnelle.
                </p>
              </div>
            </div>
            <div className="relative h-64 w-full md:h-80 rounded-lg overflow-hidden shadow-lg">
              <Image src="https://placehold.co/400x500.png" alt="Maître Marc Saverys" layout="fill" objectFit="cover" data-ai-hint="portrait professional" />
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section id="values" className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="flex items-start gap-6">
                  <div className="bg-primary/10 p-3 rounded-full">{value.icon}</div>
                  <div>
                    <h3 className="font-headline text-2xl font-semibold text-primary">{value.title}</h3>
                    <p className="text-muted-foreground mt-1">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Services Section */}
        <section id="services" className="py-20 md:py-32">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight mb-16">Nos Domaines d'Expertise</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader className="items-center p-0"><Building className="h-10 w-10 text-accent mb-4"/></CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Droit Immobilier</CardTitle>
              </Card>
               <Card className="text-center bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader className="items-center p-0"><Heart className="h-10 w-10 text-accent mb-4"/></CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Droit de la Famille</CardTitle>
              </Card>
               <Card className="text-center bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader className="items-center p-0"><Briefcase className="h-10 w-10 text-accent mb-4"/></CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Droit des Affaires</CardTitle>
              </Card>
               <Card className="text-center bg-white p-6 shadow-sm hover:shadow-lg transition-shadow">
                <CardHeader className="items-center p-0"><Users className="h-10 w-10 text-accent mb-4"/></CardHeader>
                <CardTitle className="font-headline text-xl text-primary">Successions</CardTitle>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Journey & Education Section */}
        <section id="journey" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight mb-8">Parcours Professionnel</h2>
                <div className="space-y-8 border-l-2 border-primary pl-8">
                  <div className="relative">
                     <div className="absolute -left-10 h-4 w-4 bg-primary rounded-full top-1"></div>
                    <p className="font-semibold text-primary">2009 - Aujourd'hui</p>
                    <h3 className="text-xl font-bold mt-1">Notaire titulaire</h3>
                    <p className="text-muted-foreground mt-2">Installation de l'étude notariale à Jeu-les-Bois. Développement d'une approche centrée sur la rigueur, la disponibilité et la confiance. Spécialisation dans l'accompagnement juridique personnalisé.</p>
                  </div>
                   <div className="relative">
                    <div className="absolute -left-10 h-4 w-4 bg-primary rounded-full top-1"></div>
                    <p className="font-semibold text-primary">2005 - 2009</p>
                    <h3 className="text-xl font-bold mt-1">Clerc de notaire principal</h3>
                    <p className="text-muted-foreground mt-2">Expérience en tant que clerc principal dans une étude notariale de la région Centre. Acquisition d'une expertise solide dans tous les domaines du droit notarial.</p>
                  </div>
                </div>
              </div>
               <div>
                <h2 className="font-headline text-3xl font-bold tracking-tight mb-8">Formation</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-primary mt-1 shrink-0"/>
                    <div>
                      <h3 className="font-semibold text-lg">Diplôme Supérieur du Notariat</h3>
                      <p className="text-muted-foreground">Institut des Métiers du Notariat de Paris - 1995</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-primary mt-1 shrink-0"/>
                    <div>
                      <h3 className="font-semibold text-lg">DESS Droit Notarial</h3>
                      <p className="text-muted-foreground">Université Paris II Panthéon-Assas - 1993</p>
                    </div>
                  </div>
                   <div className="flex items-start gap-4">
                    <GraduationCap className="h-6 w-6 text-primary mt-1 shrink-0"/>
                    <div>
                      <h3 className="font-semibold text-lg">Maîtrise en Droit</h3>
                      <p className="text-muted-foreground">Université Paris II Panthéon-Assas - 1992</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 md:py-32">
           <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Notre Équipe</h2>
              <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
                Des experts dévoués à votre service pour vous garantir un accompagnement de qualité.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member) => (
                <Card key={member.name} className="bg-white p-6 shadow-sm text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src={`https://placehold.co/100x100.png`} alt={member.name} data-ai-hint="portrait professional" />
                    <AvatarFallback>{member.avatar}</AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl font-headline text-primary">{member.name}</CardTitle>
                  <p className="text-accent font-semibold mt-1">{member.role}</p>
                  <CardContent className="p-0 mt-3">
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Commitments Section */}
        <section className="py-20 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Engagements Professionnels</h2>
            </div>
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                    <h3 className="text-lg font-semibold text-primary">Chambre des Notaires de Paris</h3>
                    <p className="text-muted-foreground">Membre actif depuis 2003</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-primary">Formation Continue</h3>
                    <p className="text-muted-foreground">Intervenant régulier dans les formations professionnelles</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-primary">Conseil Supérieur du Notariat</h3>
                    <p className="text-muted-foreground">Participation aux groupes de travail</p>
                </div>
            </div>
          </div>
        </section>


        {/* Contact Section */}
        <section id="contact" className="py-20 md:py-32 bg-primary/5">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight">Contactez-nous</h2>
              <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
                Nous sommes à votre disposition pour toute question ou pour prendre rendez-vous.
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                 <MapPin className="h-8 w-8 text-primary mt-1 shrink-0"/>
                 <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-muted-foreground">36120 Jeu-les-Bois, France</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <Phone className="h-8 w-8 text-primary mt-1 shrink-0"/>
                 <div>
                    <h3 className="font-semibold text-lg">Téléphone & E-mail</h3>
                    <p className="text-muted-foreground">+33 7 74 43 56 93</p>
                    <p className="text-muted-foreground">procureurjustice44@gmail.com</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <Scale className="h-8 w-8 text-primary mt-1 shrink-0"/>
                 <div>
                    <h3 className="font-semibold text-lg">Horaires</h3>
                    <p className="text-muted-foreground">Lundi - Vendredi: 9h00 - 18h00</p>
                    <p className="text-muted-foreground">Samedi: 9h00 - 12h00 (sur rdv)</p>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Étude Notariale Maître Marc Saverys. Tous droits réservés.</p>
            <div className="flex gap-4 mt-4 sm:mt-0">
              <a href="#" className="hover:text-primary">Mentions légales</a>
              <a href="#" className="hover:text-primary">Politique de confidentialité</a>
            </div>
        </div>
      </footer>
    </div>
  );
}
