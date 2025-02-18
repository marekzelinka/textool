import { ClipboardPasteIcon } from "lucide-react";
import {
  useRef,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

export function TextInput({
  value,
  onChange,
}: {
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const focusInput = () => {
    if (textareaRef.current) {
      textareaRef.current.focus({ preventScroll: true });
    }
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const handlePaste = async () => {
    try {
      const value = await navigator.clipboard.readText();
      onChange(value);

      focusInput();
    } catch {
      alert("Clipboard access denied!");
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <Textarea
          ref={textareaRef}
          value={value}
          onChange={handleChange}
          placeholder="Start typing here… (or paste your text)"
          className="peer min-h-48 resize-none"
        />
        <div className="absolute top-10 left-3 not-peer-placeholder-shown:hidden md:top-8">
          <Button
            type="button"
            variant="outline"
            onClick={handlePaste}
            className="md:hidden"
          >
            <ClipboardPasteIcon aria-hidden />
            Paste
          </Button>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={handlePaste}
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
