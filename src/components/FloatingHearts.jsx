import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);
  const rotationTypes = ["normal", "reverse", "wobble"];

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => {
        if (prev.length > 30) return prev.slice(1);
        return [
          ...prev,
          {
            id: Math.random(),
            left: Math.random() * 100,
            duration: Math.random() * 3 + 3,
            rotationType:
              rotationTypes[Math.floor(Math.random() * rotationTypes.length)],
          },
        ];
      });
    }, 750);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <span
          key={heart.id}
          className={`absolute animate-float-${heart.rotationType} text-base md:text-[20px]`}
          style={{
            left: `${heart.left}%`,
            animationDuration: `${heart.duration}s`,
          }}
        >
          ❤️
        </span>
      ))}
    </div>
  );
}
