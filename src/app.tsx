import { ScanTextIcon } from "lucide-react";
import { useState } from "react";
import { TextAnalysis } from "./components/text-analysis";
import { TextInput } from "./components/text-input";

export function App() {
  const [text, setText] = useState("");

  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10">
      <div className="w-full max-w-md md:max-w-3xl">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2">
            <div className="flex flex-col items-center gap-2 font-medium">
              <div className="flex h-8 w-8 items-center justify-center rounded-md">
                <ScanTextIcon aria-hidden className="size-6" />
              </div>
            </div>
            <h1 className="text-xl font-bold">Welcome to Textool</h1>
            <p className="text-sm text-muted-foreground">
              A better toolkit for text manipulation and analysis.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <TextInput value={text} onChange={setText} />
            <TextAnalysis value={text} />
          </div>
        </div>
      </div>
    </div>
  );
}
