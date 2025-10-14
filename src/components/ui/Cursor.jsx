// src/components/ui/CustomCursor.jsx
import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("custom-cursor");
    document.body.appendChild(cursor);

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      requestAnimationFrame(animate);
    };

    // Hover effect
    const enlarge = () => cursor.classList.add("hover");
    const shrink = () => cursor.classList.remove("hover");

    document.addEventListener("mousemove", moveCursor);

    // Apply only hover effect for clickable elements, don't hide native cursor
    const clickableElements = document.querySelectorAll(
      "a, button, input, textarea, svg, .sidebar *"
    );
    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", enlarge);
      el.addEventListener("mouseleave", shrink);
    });

    animate();

    return () => {
      cursor.remove();
      document.removeEventListener("mousemove", moveCursor);
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseenter", enlarge);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return null;
};

export default CustomCursor;
