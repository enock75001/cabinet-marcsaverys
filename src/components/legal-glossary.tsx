"use client";

import { useState } from "react";
import { legalGlossaryEntry, type LegalGlossaryEntryOutput } from "@/ai/flows/legal-glossary-entry";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles } from "lucide-react";

export default function LegalGlossary() {
  const [term, setTerm] = useState("");
  const [displayTerm, setDisplayTerm] = useState("");
  const [result, setResult] = useState<LegalGlossaryEntryOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!term) {
      setError("Veuillez entrer un terme juridique.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    setDisplayTerm(term);

    try {
      const response = await legalGlossaryEntry({ term });
      setResult(response);
    } catch (err) {
      setError("Une erreur est survenue lors de la génération de l'explication. Veuillez réessayer.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center font-headline">Glossaire Juridique IA</h2>
        <p className="mt-2 text-center text-lg text-muted-foreground">
          Obtenez des explications simples sur des termes juridiques complexes grâce à notre assistant intelligent.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-2">
        <Input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
            setError(null);
          }}
          placeholder="Ex: 'Hypothèque', 'Usufruit'..."
          className="flex-grow text-base"
          aria-label="Terme juridique"
          disabled={loading}
        />
        <Button type="submit" disabled={loading} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
          Expliquer le terme
        </Button>
      </form>

      <div className="mt-6 min-h-[150px]">
        {error && (
          <Alert variant="destructive">
            <AlertTitle>Erreur</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {loading && (
          <div className="flex justify-center items-center flex-col text-center p-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="mt-4 text-muted-foreground">Génération de l'explication pour "{displayTerm}"...</p>
          </div>
        )}

        {result && (
          <Card className="animate-in fade-in-50 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Définition de : {displayTerm}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="whitespace-pre-wrap text-base leading-relaxed">{result.explanation}</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
