import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Briefcase, Building, Family, HandCoins, Home, Landmark, ShieldQuestion } from "lucide-react";

const services = [
  {
    value: "droit-immobilier",
    title: "Droit Immobilier",
    icon: <Home className="h-6 w-6 mr-4 text-primary" />,
    categories: [
      {
        title: "Ventes et Acquisitions",
        items: [
          "Rédaction et signature des avant-contrats",
          "Négociation des conditions de vente",
          "Vérification des titres de propriété",
          "Calcul et perception des droits et taxes",
        ],
      },
      {
        title: "Financement",
        items: [
          "Constitution de garanties hypothécaires",
          "Mainlevées d'hypothèques",
          "Renégociation de prêts immobiliers",
        ],
      },
      {
        title: "Copropriété",
        items: [
          "Rédaction de règlements de copropriété",
          "Modification de la répartition des charges",
          "Conseils en assemblée générale",
        ],
      },
    ],
  },
  {
    value: "droit-famille",
    title: "Droit de la Famille",
    icon: <Family className="h-6 w-6 mr-4 text-primary" />,
    categories: [
      {
        title: "Union et Mariage",
        items: [
          "Contrats de mariage",
          "Conventions de PACS",
          "Changement de régime matrimonial",
          "Adoption simple et plénière",
        ],
      },
      {
        title: "Séparation et Divorce",
        items: [
          "Divorce par consentement mutuel",
          "Liquidation de régimes matrimoniaux",
          "Partage des biens",
        ],
      },
      {
        title: "Protection des Personnes",
        items: [
          "Mandats de protection future",
          "Tutelles et curatelles",
          "Procurations authentiques",
        ],
      },
    ],
  },
  {
    value: "successions-donations",
    title: "Successions et Donations",
    icon: <HandCoins className="h-6 w-6 mr-4 text-primary" />,
    categories: [
      {
        title: "Règlement de Successions",
        items: [
          "Établissement d'actes de notoriété",
          "Déclarations de succession",
          "Partages amiables et judiciaires",
          "Liquidation des régimes matrimoniaux",
        ],
      },
      {
        title: "Donations",
        items: [
          "Donations entre époux",
          "Donations aux enfants",
          "Donations-partages",
        ],
      },
      {
        title: "Testaments",
        items: [
          "Rédaction de testaments authentiques",
          "Dépôt de testaments olographes",
          "Révocation et modification",
        ],
      },
    ],
  },
  {
    value: "droit-affaires",
    title: "Droit des Affaires",
    icon: <Briefcase className="h-6 w-6 mr-4 text-primary" />,
    categories: [
      {
        title: "Création d'Entreprises",
        items: [
          "Constitution de sociétés",
          "Rédaction de statuts",
          "Dépôt de capital social",
          "Formalités d'immatriculation",
        ],
      },
      {
        title: "Vie des Sociétés",
        items: [
          "Assemblées générales",
          "Modifications statutaires",
          "Augmentation de capital",
        ],
      },
      {
        title: "Transmission d'Entreprises",
        items: [
          "Cession de parts sociales",
          "Vente de fonds de commerce",
          "Transmission familiale",
        ],
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-display text-foreground">
              Nos Services
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              Une expertise complète dans tous les domaines du droit notarial pour vous accompagner dans vos projets de vie. Chaque situation est unique, c'est pourquoi nous vous offrons un conseil personnalisé adapté à vos besoins spécifiques.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full" defaultValue="droit-immobilier">
              {services.map((service) => (
                <AccordionItem value={service.value} key={service.value}>
                  <AccordionTrigger className="text-2xl font-display hover:no-underline">
                    <div className="flex items-center">
                      {service.icon}
                      {service.title}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4 pl-10">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                      {service.categories.map((category) => (
                        <div key={category.title}>
                          <h4 className="font-semibold text-lg mb-2 text-foreground/90">{category.title}</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {category.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <ShieldQuestion className="h-16 w-16 mx-auto text-primary mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold font-display">Besoin d'un accompagnement juridique ?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Chaque situation est unique. Contactez-nous pour un conseil personnalisé adapté à vos besoins spécifiques.
          </p>
          <Button size="lg" className="mt-8" asChild>
            <a href="/#contact">Prendre un rendez-vous</a>
          </Button>
        </div>
      </section>
    </div>
  );
}
