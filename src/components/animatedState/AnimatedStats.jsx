import { useEffect, useState } from "react";

const AnimatedStats = ({ endValue, text, start = 1200, speed = 10 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= endValue) {
          clearInterval(interval);
          return endValue;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [endValue, speed]);

  return (
    <h3 className="hero__bottom__info-stats-title">
      {count}
      {text}
    </h3>
  );
};

export default AnimatedStats;
