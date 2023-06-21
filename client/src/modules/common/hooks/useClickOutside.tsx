import { RefObject, useEffect } from "react";

export const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T>,
  handler: () => void
) => {
  const handleClick = (ev: MouseEvent) => {
    const el = ref.current;
    if (!el || el.contains(ev.target as Node)) return;
    handler();
  };
  useEffect(() => {
    document.addEventListener("click", handleClick);
  }, []);
};
