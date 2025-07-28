'use server';
/**
 * @fileOverview An AI agent that explains concepts.
 *
 * - conceptExplainer - A function that generates a simplified explanation of a concept.
 * - ConceptExplainerInput - The input type for the conceptExplainer function.
 * - ConceptExplainerOutput - The return type for the conceptExplainer function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ConceptExplainerInputSchema = z.object({
  concept: z.string().describe('The concept to explain.'),
});
export type ConceptExplainerInput = z.infer<typeof ConceptExplainerInputSchema>;

const ConceptExplainerOutputSchema = z.object({
  explanation: z.string().describe('A concise and easy-to-understand explanation of the concept.'),
});
export type ConceptExplainerOutput = z.infer<typeof ConceptExplainerOutputSchema>;

export async function conceptExplainer(input: ConceptExplainerInput): Promise<ConceptExplainerOutput> {
  return conceptExplainerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'conceptExplainerPrompt',
  input: {schema: ConceptExplainerInputSchema},
  output: {schema: ConceptExplainerOutputSchema},
  prompt: `You are an expert skilled at explaining complex topics in simple language.

  Provide a concise and easy-to-understand explanation of the following concept:

  Concept: {{{concept}}}`,
});

const conceptExplainerFlow = ai.defineFlow(
  {
    name: 'conceptExplainerFlow',
    inputSchema: ConceptExplainerInputSchema,
    outputSchema: ConceptExplainerOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
