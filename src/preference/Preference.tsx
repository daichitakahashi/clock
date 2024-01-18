import * as Popover from "@radix-ui/react-popover";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { Settings } from "lucide-react";
import { FC } from "react";

const PreferenceButton: FC = () => (
  <div
    className="
      cursor-pointer
      hover:bg-gray-100
      dark:hover:bg-gray-900
      p-2
      rounded-md
    "
  >
    <Settings className="stroke-black dark:stroke-white" size={30} />
  </div>
);

export type DarkModePreference = "light" | "dark" | "system";

interface Props {
  updateDarkMode: (mode: DarkModePreference) => void;
}

export const Preference: FC<Props> = ({ updateDarkMode }) => {
  return (
    <Popover.Root>
      <Popover.Trigger className=" " asChild>
        <button type="button">
          <PreferenceButton />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          side="top"
          className="
            bg-white
            dark:bg-black
            text-black
            dark:text-white
            border-black
            dark:border-white
            border-[1px]
            rounded-md
            mr-6
            p-4
          "
        >
          <div className="font-extrabold text-xl">appearance</div>
          <RadioGroup.Root
            defaultValue="light"
            onValueChange={(v) => {
              updateDarkMode(v as DarkModePreference);
            }}
          >
            {/* FIXME: default */}
            <div className="flex align-middle">
              <RadioGroup.Item
                id="light"
                value="light"
                className="w-4 h-4 bg-blue-300"
              >
                {/* FIXME: styling */}
                <RadioGroup.Indicator className="w-4 h-4 bg-red-400" />
              </RadioGroup.Item>
              <label className="Label" htmlFor="light">
                light
              </label>
            </div>
            <div className="flex align-middle">
              <RadioGroup.Item
                id="dark"
                value="dark"
                className="w-4 h-4 bg-blue-300"
              >
                <RadioGroup.Indicator className="w-4 h-4 bg-red-400" />
              </RadioGroup.Item>
              <label htmlFor="dark">dark</label>
            </div>
          </RadioGroup.Root>
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
