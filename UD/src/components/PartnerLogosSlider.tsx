import React, { useEffect, useRef } from "react";

interface PartnerLogosSliderProps {
  logos: string[];
  speed?: number;
}

const PartnerLogosSlider: React.FC<PartnerLogosSliderProps> = ({
  logos,
  speed = 50,
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const duplicated = [...logos, ...logos];

  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const totalWidth = el.scrollWidth / 2;
    const duration = totalWidth / speed;
    el.style.setProperty("--marquee-duration", `10s`);
  }, [logos, speed]);

  return (
    <div className="relative overflow-hidden w-full py-4">
      <div ref={marqueeRef} className="animate-marquee gap-8">
        {duplicated.map((logo, index) => (
          <div key={index} className="flex-shrink-0 w-36 sm:w-48">
            <img
              src={logo}
              alt={`Partner ${index + 1}`}
              className="h-15 w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogosSlider;
