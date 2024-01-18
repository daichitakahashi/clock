import { useEffect, useState } from "react";

export const useClock = (initial = new Date()) => {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  });

  return time;
};
