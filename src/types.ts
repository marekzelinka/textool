export interface TextAnalysis {
  chars: number;
  charsNoSpaces: number;
  words: string[];
  sentences: string[];
  paragraphs: string[];
}

export interface TextAnalysisOptions {
  excludeSpaces: boolean;
}
