import { useEffect, useState } from "react";

// hooks/useMediaQuery.js — FILE TERPISAH
export function useMediaQuery({query}: {query: string}) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handleChange = (e : { matches: boolean }) => setMatches(e.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, [query]);

  return matches;
}