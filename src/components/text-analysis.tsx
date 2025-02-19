import { analyzeText } from "@/lib/text";
import { cn } from "@/lib/utils";
import { LetterDensityChart } from "./letter-density-chart";
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

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <AnalysisItem
        label="Total Characters"
        value={stats.chars}
        extra={`${stats.charsNoSpaces} w/o spaces`}
      />
      <AnalysisItem label="Word Count" value={stats.words.length} />
      <AnalysisItem label="Sentence Count" value={stats.sentences.length} />
      <AnalysisItem label="Paragraphs Count" value={stats.paragraphs.length} />
      <AnalysisItem
        label="Reading Time"
        value={readingTimeInSeconds}
        unit="seconds"
      />
      <AnalysisItem
        label="Speaking Time"
        value={speakingTimeInSeconds}
        unit="seconds"
      />
      <Card className="order-last col-span-2 md:col-span-2 md:col-start-1 md:row-start-2">
        <CardHeader>
          <CardTitle>Letter Density</CardTitle>
        </CardHeader>
        <CardContent>
          <LetterDensityChart />
        </CardContent>
        {/* <CardFooter className="flex-col items-start gap-2 text-sm">
          <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
          </div>
          <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
          </div>
          </CardFooter> */}
      </Card>
    </div>
  );
}

function AnalysisItem({
  label,
  value,
  unit,
  extra,
  className,
}: {
  label: string;
  value: number;
  unit?: string;
  extra?: string;
  className?: string;
}) {
  return (
    <Card className={className}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className={cn(extra ? "pb-0" : "")}>
        <div className="flex items-baseline gap-2">
          <div className="text-3xl font-medium">{value}</div>
          {unit ? (
            <div className="text-xs text-muted-foreground">{unit}</div>
          ) : null}
        </div>
      </CardContent>
      {extra ? (
        <CardFooter className="text-[0.8rem] text-muted-foreground">
          {extra}
        </CardFooter>
      ) : null}
    </Card>
  );
}
