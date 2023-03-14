export const isFalsyOrWhiteSpace = (value: string) => {
  return typeof value !== "string" || value === "";
};
