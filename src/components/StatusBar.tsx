import { useMantineColorScheme } from "@mantine/core";
import { useEffect } from "react";
import ThemeIcon from "./ThemeIcon";

/**
 * Status bar component.
 * @description A status bar for the main idle game
 * Allows changing of theme, viewing save state, and other options.
 * @returns The status bar component.
 */
const StatusBar: React.FC = () => {
  // Hooks
  const { colorScheme } = useMantineColorScheme();

  useEffect(() => {
    // Add effect logic here if needed
  }, []);

  return (
    <div className="h-[40px] w-full flex items-center justify-between p-3">
      {/* Left side */}
      <div>Left</div>

      {/* Right side */}
      <ThemeIcon theme={colorScheme} />
    </div>
  );
};

export default StatusBar;
