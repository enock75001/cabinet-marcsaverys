import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { Scale } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Étude Notariale Maître Marc Saverys',
  description: 'Étude notariale de Maître Marc Saverys, notaire à Jeu-les-Bois. Services de notariat en immobilier, famille, sociétés et successions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-background text-foreground antialiased">
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
          <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
            <a href="/" className="flex items-center gap-3">
              <Scale className="h-7 w-7 text-primary" />
              <span className="font-bold text-xl tracking-wide font-display">Maître Marc Saverys</span>
            </a>
            <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
              <a href="/" className="hover:text-primary transition-colors">Accueil</a>
              <a href="/services" className="hover:text-primary transition-colors">Services</a>
              <a href="/about" className="hover:text-primary transition-colors">À propos</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </nav>
            <Button asChild className="hidden md:flex">
              <a href="#contact">Prendre RDV</a>
            </Button>
          </div>
        </header>
        
        <main className="flex-1">{children}</main>

        <footer id="contact" className="bg-secondary text-secondary-foreground border-t border-border/40">
          <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-2 md:px-6 lg:grid-cols-4">
            <div className="col-span-2 space-y-2">
              <a href="/" className="flex items-center gap-3">
                <Scale className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold tracking-wide font-display">Maître Marc Saverys</span>
              </a>
              <p className="text-muted-foreground">Votre partenaire juridique de confiance pour la vie.</p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Contact</h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>36120 Jeu-les-Bois, France</li>
                <li>+33 774 43 5693</li>
                <li>procureurjustice44@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Horaires</h3>
              <ul className="mt-2 space-y-1 text-muted-foreground">
                <li>Lundi - Vendredi: 9h - 18h</li>
                <li>Samedi: 9h - 12h (sur RDV)</li>
                <li>Dimanche: Fermé</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/40">
            <div className="container mx-auto flex flex-col items-center justify-between px-4 py-6 text-sm text-muted-foreground sm:flex-row md:px-6">
              <p>&copy; {new Date().getFullYear()} Étude Notariale Maître Marc Saverys. Tous droits réservés.</p>
              <div className="mt-4 flex gap-4 sm:mt-0">
                <a href="#" className="hover:text-primary transition-colors">Mentions légales</a>
                <a href="#" className="hover:text-primary transition-colors">Politique de confidentialité</a>
              </div>
            </div>
          </div>
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
