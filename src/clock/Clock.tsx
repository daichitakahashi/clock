import { FC } from "react";
import { useClock } from "./useClock";

const DigitalClock: FC = () => {
  const time = useClock();

  return (
    <time className="text-8xl font-bold text-black dark:text-white">
      {time.format("HH:mm:ss")}
    </time>
  );
};

export default DigitalClock;
