import { FC } from "react";
import { useClock } from "./useClock";

const DigitalClock: FC = () => {
  const time = useClock();

  return <time className="text-8xl">{time.format("HH:mm:ss")}</time>;
};

export default DigitalClock;
