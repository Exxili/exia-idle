import { useEffect } from "react";
import { Rnd } from "react-rnd";

export type WindowType = "research" | "upgrades" | "lore" | "settings";

export interface WindowProps {
  type: WindowType;
  title: string;
  blurb: string;
}

/**
 * Window Component
 * @description used for creating draggable resizeable windows which
 * can be used for various purposes.
 *
 * In this case each window will be a different stage or ability of the game
 */
const Window: React.FC<WindowProps> = (props) => {
  // Extract Props
  const { title, blurb } = props;

  useEffect(() => {
    // Add effect logic here if needed
  }, []);

  return (
    <Rnd
      default={{
        x: window.innerWidth / 2 - 160,
        y: window.innerHeight / 2 - 100,
        width: 320,
        height: 200,
      }}
      className="bg-zinc-70"
    >
      <h1 className="text-3xl font-bold underline">{title}</h1>
      <p>{blurb}</p>
    </Rnd>
  );
};

export default Window;
