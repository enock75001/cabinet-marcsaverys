"use client";

import { useState } from "react";
import { conceptExplainer, type ConceptExplainerOutput } from "@/ai/flows/concept-explainer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Sparkles } from "lucide-react";

export default function ConceptExplainer() {
  const [concept, setConcept] = useState("");
  const [displayConcept, setDisplayConcept] = useState("");
  const [result, setResult] = useState<ConceptExplainerOutput | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!concept) {
      setError("Veuillez entrer un concept.");
      return;
    }
    setLoading(true);
    setError(null);
    setResult(null);
    setDisplayConcept(concept);

    try {
      const response = await conceptExplainer({ concept });
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
        <h2 className="text-4xl md:text-5xl font-bold text-center font-headline">Explication de Concept IA</h2>
        <p className="mt-2 text-center text-lg text-muted-foreground">
          Obtenez des explications simples sur des concepts complexes grâce à notre assistant intelligent.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-2">
        <Input
          type="text"
          value={concept}
          onChange={(e) => {
            setConcept(e.target.value);
            setError(null);
          }}
          placeholder="Ex: 'Intelligence Artificielle', 'Blockchain'..."
          className="flex-grow text-base"
          aria-label="Concept"
          disabled={loading}
        />
        <Button type="submit" disabled={loading} className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
          {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
          Expliquer le concept
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
            <p className="mt-4 text-muted-foreground">Génération de l'explication pour "{displayConcept}"...</p>
          </div>
        )}

        {result && (
          <Card className="animate-in fade-in-50 shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-2xl text-primary">Explication de : {displayConcept}</CardTitle>
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
