import { useEffect, useRef, useState } from "react";

const KONAMI = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "KeyB", "KeyA",
];

export function useKonamiCode() {
  const [konamiActive, setKonamiActive] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const bufferRef = useRef<string[]>([]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      bufferRef.current.push(e.code);
      if (bufferRef.current.length > KONAMI.length) {
        bufferRef.current.shift();
      }
      if (
        bufferRef.current.length === KONAMI.length &&
        bufferRef.current.every((k, i) => k === KONAMI[i])
      ) {
        bufferRef.current = [];
        setKonamiActive(true);
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 4000);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return { konamiActive, toastVisible };
}
