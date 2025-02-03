import { useEffect, useState } from "react";

export default function Timer() {
  const valDate = new Date(
    `February 14, ${new Date().getFullYear()} 00:00:00`
  ).getTime();
  // console.log(valDate);

  const [timeLeft, setTimeLeft] = useState({
    days: new Date().getDate(),
    hours: new Date().getHours(),
    minutes: new Date().getMinutes(),
    seconds: new Date().getSeconds(),
  });

  const calcTimeLeft = () => {
    const currentTime = new Date().getTime();
    const timeDifference = valDate - currentTime;

    return {
      days: Math.floor(Math.abs(timeDifference) / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (Math.abs(timeDifference) % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (Math.abs(timeDifference) % (1000 * 60 * 60)) / (1000 * 60)
      ),
      seconds: Math.floor((Math.abs(timeDifference) % (1000 * 60)) / 1000),
    };
  };

  // console.log(calcTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 text-center bg-linear-to-br from-pink-100 to-rose-200 mx-3 md:mx-0 p-10 rounded-xl shadow-xl">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => (
        <div key={idx} className="flex flex-col items-center">
          <span className="text-4xl font-bold font-funnel mb-1">
            {Object.values(timeLeft)[idx]}
          </span>
          <span className="text-lg font-kalam">{label}</span>
        </div>
      ))}
    </div>
  );
}
