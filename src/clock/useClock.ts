import dayjs from "dayjs";
import { useEffect, useState } from "react";

export const useClock = (initial = dayjs()) => {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    const id = setInterval(() => {
      setTime(dayjs());
    }, 1000);
    return () => clearInterval(id);
  });

  return time;
};
