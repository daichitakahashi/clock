import DigitalClock from "./clock/Clock";
import { Preference } from "./preference/Preference";
import { useDarkModePreference } from "./preference/useDarkMode";

function App() {
  // const updateDarkMode = useDarkMode();
  const { darkModePreference, updateDarkModePreference } =
    useDarkModePreference("system");

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
        <Preference
          darkMode={darkModePreference}
          updateDarkMode={updateDarkModePreference}
        />
      </div>
    </div>
  );
}

export default App;
