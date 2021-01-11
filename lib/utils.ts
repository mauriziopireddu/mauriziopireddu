export const toTitleCase = (text: string) =>
  text[0].toUpperCase() + text.slice(1).toLowerCase();

export const toSentenceCase = (text: string, separator = " ") => {
  const words = text.split(separator);
  const [firstWord, ...otherWords] = words;
  const otherWordLowerCase = otherWords.map((word) => word.toLowerCase());
  return [toTitleCase(firstWord), ...otherWordLowerCase].join(" ");
};

export const parseDate = (date: string) =>
  new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(Date.parse(date));
