'use server';
/**
 * @fileOverview A legal glossary entry AI agent.
 *
 * - legalGlossaryEntry - A function that generates a simplified explanation of a legal term.
 * - LegalGlossaryEntryInput - The input type for the legalGlossaryEntry function.
 * - LegalGlossaryEntryOutput - The return type for the legalGlossaryEntry function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LegalGlossaryEntryInputSchema = z.object({
  term: z.string().describe('The legal term to explain.'),
});
export type LegalGlossaryEntryInput = z.infer<typeof LegalGlossaryEntryInputSchema>;

const LegalGlossaryEntryOutputSchema = z.object({
  explanation: z.string().describe('A concise and easy-to-understand explanation of the legal term.'),
});
export type LegalGlossaryEntryOutput = z.infer<typeof LegalGlossaryEntryOutputSchema>;

export async function legalGlossaryEntry(input: LegalGlossaryEntryInput): Promise<LegalGlossaryEntryOutput> {
  return legalGlossaryEntryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'legalGlossaryEntryPrompt',
  input: {schema: LegalGlossaryEntryInputSchema},
  output: {schema: LegalGlossaryEntryOutputSchema},
  prompt: `You are a legal expert skilled at explaining complex legal terms in simple language.

  Provide a concise and easy-to-understand explanation of the following legal term:

  Term: {{{term}}}`,
});

const legalGlossaryEntryFlow = ai.defineFlow(
  {
    name: 'legalGlossaryEntryFlow',
    inputSchema: LegalGlossaryEntryInputSchema,
    outputSchema: LegalGlossaryEntryOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
