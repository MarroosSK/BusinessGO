export const getFromLocalStorage = (key: string): string | null => {
  if (!key || typeof window === "undefined") {
    return null;
  }
  return localStorage.getItem(key);
};
