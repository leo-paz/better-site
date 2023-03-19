import { useEffect } from "react";

const useMouseHover = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.getElementsByClassName("card") as HTMLCollectionOf<HTMLElement>;
      for (const card of cards) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    const cardsContainer = document.getElementById("cards");
    cardsContainer?.addEventListener("mousemove", handleMouseMove);

    return () => {
      cardsContainer?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

export default useMouseHover;