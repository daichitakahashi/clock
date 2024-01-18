import { FC } from "react";
import { useClock } from "./useClock";

interface Props {
  className: string;
}

const Clock: FC<Props> = ({ className }) => {
  const time = useClock();

  return <time className={className}>{time.toTimeString()}</time>;
};

export default Clock;
