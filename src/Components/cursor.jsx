import React, { useEffect, useRef } from "react";

const DotCursor = () => {
  const dotRef = useRef(null);

  useEffect(() => {
    const moveDot = (e) => {
      const dot = dotRef.current;
      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    };

    document.addEventListener("mousemove", moveDot);

    return () => {
      document.removeEventListener("mousemove", moveDot);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed z-[9999] w-3 h-3 bg-orange-500 rounded-full pointer-events-none transition-all duration-75 transform -translate-x-1/2 -translate-y-1/2"
    />
  );
};

export default DotCursor;

