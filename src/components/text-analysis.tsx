import { analyzeText } from "@/lib/text";
import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export function TextAnalysis({ value }: { value: string }) {
  const stats = analyzeText(value);
  const speakingTimeInSeconds = Math.round(stats.words.length / (150 / 60));
  const readingTimeInSeconds = Math.round(stats.words.length / (200 / 60));

  const items = [
    {
      name: "Total Characters",
      value: stats.chars,
      footer:
        stats.chars !== stats.charsNoSpaces
          ? `${stats.charsNoSpaces} w/o spaces`
          : "",
    },
    { name: "Word Count", value: stats.words.length },
    { name: "Sentence Count", value: stats.sentences.length },
    { name: "Paragraphs Count", value: stats.paragraphs.length },
    {
      name: "Reading Time",
      value: readingTimeInSeconds,
      unit: "seconds",
      className: "col-span-2",
    },
    {
      name: "Speaking Time",
      value: speakingTimeInSeconds,
      unit: "seconds",
      className: "col-span-2",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {items.map((item) => (
        <Card key={item.name} className={item.className}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {item.name}
            </CardTitle>
          </CardHeader>
          <CardContent className={cn(item.footer ? "pb-1" : "")}>
            <div className="flex items-baseline gap-2">
              <div className="text-3xl font-medium">{item.value}</div>
              {item.unit ? (
                <div className="text-xs text-muted-foreground">{item.unit}</div>
              ) : null}
            </div>
          </CardContent>
          {item.footer ? (
            <CardFooter>
              <div className="text-xs text-muted-foreground">{item.footer}</div>
            </CardFooter>
          ) : null}
        </Card>
      ))}
    </div>
  );
}
