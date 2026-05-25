"use client";

import { useEffect, useRef } from "react";
import { GiCoffeePot } from "react-icons/gi";

export default function CoffeeCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const cursor = cursorRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    let rotation = 0;

    let animationFrame;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.14;
      currentY += (mouseY - currentY) * 0.14;

      const deltaX = mouseX - currentX;

      rotation = deltaX * 0.08;

      if (cursor) {
        cursor.style.transform =
          `translate3d(${currentX}px, ${currentY}px, 0) rotate(${rotation}deg)`;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveCursor);

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 1024) return;

    const createCoffeeSplash = (e) => {
      // Main Liquid Burst
      const burst = document.createElement("div");

      burst.className = "coffee-burst";

      burst.style.left = `${e.clientX}px`;
      burst.style.top = `${e.clientY}px`;

      document.body.appendChild(burst);

      setTimeout(() => {
        burst.remove();
      }, 1200);

      // Droplets
      for (let i = 0; i < 18; i++) {
        const splash = document.createElement("div");

        splash.className = "coffee-drop";

        splash.style.left = `${e.clientX}px`;
        splash.style.top = `${e.clientY}px`;

        const randomX = (Math.random() - 0.5) * 240;
        const randomY = (Math.random() - 0.5) * 240;

        const randomSize = Math.random() * 10 + 6;

        splash.style.width = `${randomSize}px`;
        splash.style.height = `${randomSize}px`;

        splash.style.setProperty("--x", `${randomX}px`);
        splash.style.setProperty("--y", `${randomY}px`);

        document.body.appendChild(splash);

        setTimeout(() => {
          splash.remove();
        }, 1400);
      }

      // Ambient Glow
      const glow = document.createElement("div");

      glow.className = "coffee-glow";

      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;

      document.body.appendChild(glow);

      setTimeout(() => {
        glow.remove();
      }, 1500);
    };

    window.addEventListener("click", createCoffeeSplash);

    return () => {
      window.removeEventListener("click", createCoffeeSplash);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-[9999]
        hidden

        lg:flex

        -translate-x-1/2
        -translate-y-1/2

        items-center
        justify-center
      "
    >
      {/* Ambient Glow */}
      <div
        className="
          absolute
          h-24
          w-24
          rounded-full
          bg-[#c08b5c]/10
          blur-3xl
        "
      />

      {/* Cursor Body */}
      <div
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center

          rounded-full

          border
          border-[#c08b5c]/20

          bg-[#120d0b]/80

          backdrop-blur-xl

          shadow-[0_0_40px_rgba(192,139,92,0.18)]
        "
      >
        <GiCoffeePot
          size={26}
          className="text-[#d7a36d]"
        />
      </div>
    </div>
  );
}