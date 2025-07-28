import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Award, Briefcase, GraduationCap, Handshake, ShieldCheck, Star, Users } from "lucide-react";
import Image from 'next/image';

export default function AboutPage() {
  const team = [
    {
      name: "Marie Dupont",
      role: "Clerc principal",
      description: "Spécialiste en droit immobilier avec 15 ans d'expérience",
      initials: "MD",
    },
    {
      name: "Pierre Martin",
      role: "Clerc senior",
      description: "Expert en droit des successions et fiscalité",
      initials: "PM",
    },
    {
      name: "Sophie Leroy",
      role: "Assistante juridique",
      description: "Gestion des formalités et suivi clientèle",
      initials: "SL",
    },
  ];

  const values = [
      {
        icon: <Award className="h-10 w-10 text-primary" />,
        title: "Rigueur",
        description: "Une approche méthodique et précise pour chaque dossier.",
      },
      {
        icon: <Handshake className="h-10 w-10 text-primary" />,
        title: "Disponibilité",
        description: "Une écoute attentive et un accompagnement personnalisé.",
      },
      {
        icon: <ShieldCheck className="h-10 w-10 text-primary" />,
        title: "Confiance",
        description: "Une relation durable basée sur la transparence et l'intégrité.",
      },
  ];

  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold font-display">
                Maître Marc Saverys, Notaire à Jeu-les-Bois
              </h1>
              <p className="text-lg text-muted-foreground">
                Avec plus de 15 ans d'expérience, j'ai fondé mon étude sur des valeurs de rigueur, de disponibilité et de confiance.
              </p>
              <p className="text-muted-foreground">
                Notre mission est de vous offrir une sécurité juridique optimale en vous fournissant des conseils éclairés et en rédigeant des actes authentiques incontestables, adaptés à chaque situation personnelle et professionnelle.
              </p>
               <p className="text-lg font-semibold text-primary">Votre partenaire juridique pour la vie.</p>
            </div>
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-2xl">
              <Image src="https://i.postimg.cc/Ghd7PNWJ/notary-office.png" alt="Bureau de notaire" layout="fill" objectFit="cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="values" className="py-20 md:py-24 bg-secondary">
          <div className="container mx-auto px-4 md:px-6">
             <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">Nos Valeurs</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-12 items-start text-center">
              {values.map((item) => (
                <div key={item.title} className="flex flex-col items-center space-y-4">
                  <div className="bg-background/20 p-4 rounded-full">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-display">{item.title}</h3>
                  <p className="text-muted-foreground max-w-xs">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
      </section>

      <section id="journey" className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold font-display">Mon Parcours</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-12 relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>
                
                <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                        <Card className="bg-card border-border/60">
                            <CardHeader>
                                <CardTitle className="font-display text-xl">Notaire titulaire</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Installation de l'étude notariale à Jeu-les-Bois. Développement d'une approche centrée sur la rigueur, la disponibilité et la confiance. Spécialisation dans l'accompagnement juridique personnalisé.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-secondary p-3 rounded-full border-4 border-background">
                        <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-1/2 pl-8">
                        <p className="text-lg font-semibold font-display">2009 - Aujourd'hui</p>
                    </div>
                </div>

                <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                       <p className="text-lg font-semibold font-display">2005 - 2009</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-secondary p-3 rounded-full border-4 border-background">
                        <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-1/2 pl-8">
                        <Card className="bg-card border-border/60">
                             <CardHeader>
                                <CardTitle className="font-display text-xl">Clerc de notaire principal</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Expérience en tant que clerc principal dans une étude notariale de la région Centre. Acquisition d'une expertise solide dans tous les domaines du droit notarial.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                 <div className="relative flex items-center">
                    <div className="w-1/2 pr-8 text-right">
                        <Card className="bg-card border-border/60">
                            <CardHeader>
                                <CardTitle className="font-display text-xl">Formation notariale</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">Diplôme Supérieur du Notariat. Formation complète en droit notarial et acquisition des compétences nécessaires pour l'exercice de la profession de notaire.</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 bg-secondary p-3 rounded-full border-4 border-background">
                        <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-1/2 pl-8">
                        <p className="text-lg font-semibold font-display">Formation</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section id="team" className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Notre Équipe</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="bg-card border-border/60 text-center flex flex-col items-center p-6">
                <Avatar className="w-24 h-24 mb-4">
                  <AvatarImage src={`https://i.postimg.cc/Ghd7PNWJ/notary-office.png`} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <CardHeader className="p-0">
                  <CardTitle className="text-xl font-display">{member.name}</CardTitle>
                </CardHeader>
                <p className="text-primary font-semibold mt-1">{member.role}</p>
                <CardContent className="flex-grow mt-4 p-0">
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section id="engagements" className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold font-display">Engagements Professionnels</h2>
          </div>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-card border-border/60 text-center p-6">
              <CardHeader>
                <CardTitle className="font-display">Chambre des Notaires</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Membre actif depuis 2003</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border/60 text-center p-6">
              <CardHeader>
                <CardTitle className="font-display">Formation Continue</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Intervenant régulier dans les formations professionnelles</p>
              </CardContent>
            </Card>
            <Card className="bg-card border-border/60 text-center p-6">
              <CardHeader>
                <CardTitle className="font-display">Conseil Supérieur</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Participation aux groupes de travail sur la modernisation du notariat</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
