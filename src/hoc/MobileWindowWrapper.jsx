import { useLayoutEffect, useState, useEffect } from "react";
import useWindowStore from "#store/window";

const MobileWindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const [isMobile, setIsMobile] = useState(false);

    // Check if screen is mobile (below sm breakpoint = 640px)
    useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 640);
      };

      checkMobile();
      window.addEventListener("resize", checkMobile);

      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useLayoutEffect(() => {
      const el = document.getElementById(`mobile-${windowKey}`);
      if (!el) return;
      el.style.display = isOpen && isMobile ? "block" : "none";
    }, [isOpen, isMobile]);

    // Don't render on desktop
    if (!isMobile || !isOpen) return null;

    return (
      <section id={`mobile-${windowKey}`} style={{ zIndex }}>
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `MobileWindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default MobileWindowWrapper;
