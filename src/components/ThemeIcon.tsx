import { MantineColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

/**
 * ThemeIconProps interface
 */
interface ThemeIconProps {
  theme: MantineColorScheme; // Define the theme prop to be of type MantineColorScheme
}

/**
 * ThemeIcon
 * @description A component that displays the correct icon for the theme
 * @param theme - pass in the theme to display the correct icon
 * @returns the icon for the theme
 */
const ThemeIcon: React.FC<ThemeIconProps> = ({ theme }) => {
  const { setColorScheme } = useMantineColorScheme();

  // Display Icon based on the theme
  if (theme === "light") {
    return <IconMoon stroke={1.5} onClick={() => setColorScheme("dark")} />;
  }

  return <IconSun stroke={1.5} onClick={() => setColorScheme("light")} />;
};

export default ThemeIcon;
