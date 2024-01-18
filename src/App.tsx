import DigitalClock from "./clock/Clock";
import { Preference } from "./preference/Preference";
import { useDarkMode } from "./preference/useDarkMode";

function App() {
  const updateDarkMode = useDarkMode();
  return (
    <div>
      <div
        className="
          w-[100vw]
          h-[100vh]
          grid
          place-items-center
          bg-white
          dark:bg-black
        "
      >
        <DigitalClock />
      </div>
      <div
        className="
          absolute
          right-6
          top-6
        "
      >
        <Preference updateDarkMode={updateDarkMode} />
      </div>
    </div>
  );
}

export default App;
