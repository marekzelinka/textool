import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function TextAnalysis() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Total Characters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-medium">0</div>
          <div className="text-sm text-muted-foreground">0 w/o spaces</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Word Count
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-medium">0</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Sentence Count
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-medium">0</div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Paragraphs Count
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-medium">0</div>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Reading Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <div className="text-3xl font-medium">0</div>
            <div className="text-xs text-muted-foreground">seconds</div>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-2">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            Speaking Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-baseline gap-2">
            <div className="text-3xl font-medium">0</div>
            <div className="text-xs text-muted-foreground">seconds</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
