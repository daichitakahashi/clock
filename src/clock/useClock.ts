import dayjs from "dayjs";
import { useEffect, useState } from "react";

const tick = () => {
  const now = dayjs();
  return { now, nextTick: 1000 - now.millisecond() };
};

export const useClock = (initial = dayjs()) => {
  const [time, setTime] = useState(initial);

  useEffect(() => {
    setTimeout(function interval() {
      const t = tick();
      setTime(t.now);
      setTimeout(interval, t.nextTick);
    }, tick().nextTick);
  }, []);

  return time;
};
