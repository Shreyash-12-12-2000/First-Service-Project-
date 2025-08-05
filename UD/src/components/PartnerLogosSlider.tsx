import React, { useEffect, useRef } from "react";

interface PartnerLogosSliderProps {
  logos: string[];
  speed?: number; // pixels per second
}

const PartnerLogosSlider: React.FC<PartnerLogosSliderProps> = ({
  logos,
  speed = 50,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const duplicated = [...logos, ...logos];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const totalWidth = el.scrollWidth / 2;
    const duration = totalWidth / speed;
    el.style.setProperty("--marquee-duration", `${duration}s`);
  }, [logos, speed]);

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={ref}
        className="animate-marquee whitespace-nowrap"
        style={{ "--marquee-duration": "20s" } as React.CSSProperties}
      >
        {duplicated.map((logo, i) => (
          <span
            key={i}
            className="inline-block mx-6 align-middle"
            style={{ width: "150px" }}
          >
            <img
              src={logo}
              alt={`Partner ${i + 1}`}
              className="h-25 w-auto object-contain"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogosSlider;
