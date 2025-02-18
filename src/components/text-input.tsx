import { ClipboardPasteIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function TextInput() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Textarea
          placeholder="Start typing here… (or paste your text)"
          className="peer min-h-48 resize-none"
        />
        <div className="absolute top-10 left-3 not-peer-placeholder-shown:hidden md:top-8">
          <Button type="button" variant="outline" className="md:hidden">
            <ClipboardPasteIcon aria-hidden />
            Paste
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="max-md:hidden"
          >
            <ClipboardPasteIcon aria-hidden />
            Paste
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Exclude spaces</Label>
      </div>
    </div>
  );
}
