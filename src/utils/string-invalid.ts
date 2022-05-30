export default function isStringInvalid(item: any) {
  if (typeof item !== "string") return false;
  const lowerCase = item.toLowerCase();
  return (
    lowerCase === "undefined" ||
    lowerCase === "null" ||
    lowerCase === "nan"
  );
}
