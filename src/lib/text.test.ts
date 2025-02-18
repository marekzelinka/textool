import { describe, expect, test } from "vitest";
import { analyzeText } from "./text";

describe("analyzeText", () => {
  test("count correctly", () => {
    const stats = analyzeText("Lorem ipsum dolor sit amet.");
    expect(stats).toEqual({
      chars: 27,
      charsNoSpaces: 23,
      words: ["Lorem", "ipsum", "dolor", "sit", "amet"],
      sentences: ["Lorem ipsum dolor sit amet."],
      paragraphs: ["Lorem ipsum dolor sit amet."],
    });
  });

  test("handles newlines", () => {
    const stats = analyzeText(
      "I have a dream.\nI have a dream.\n\nI have a dream.",
    );
    expect(stats).toEqual({
      chars: 48,
      charsNoSpaces: 36,
      words: [
        "I",
        "have",
        "a",
        "dream",
        "I",
        "have",
        "a",
        "dream",
        "I",
        "have",
        "a",
        "dream",
      ],
      sentences: ["I have a dream.", "I have a dream.", "I have a dream."],
      paragraphs: ["I have a dream.", "I have a dream.", "I have a dream."],
    });
  });

  test("handles special characters", () => {
    const stats = analyzeText(
      "aijsfoiasfgÉÉasjifajo.\\n\naskgoaskgoasg\nWo wo @%*@*  @*%92058)@%!? sdsd??? sdsd lll",
    );
    expect(stats).toEqual({
      chars: 82,
      charsNoSpaces: 73,
      words: [
        "aijsfoiasfgÉÉasjifajo.\\n",
        "askgoaskgoasg",
        "Wo",
        "wo",
        "@%*@*",
        "@*%92058)@%",
        "sdsd",
        "sdsd",
        "lll",
      ],
      sentences: [
        "aijsfoiasfgÉÉasjifajo.\\n",
        "askgoaskgoasg",
        "Wo wo @%*@*  @*%92058)@%!?",
        "sdsd???",
        "sdsd lll",
      ],
      paragraphs: [
        "aijsfoiasfgÉÉasjifajo.\\n",
        "askgoaskgoasg",
        "Wo wo @%*@*  @*%92058)@%!? sdsd??? sdsd lll",
      ],
    });
  });
});
