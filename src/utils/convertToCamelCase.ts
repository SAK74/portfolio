export function convertToCamelCase(text: string) {
  return text.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
}
