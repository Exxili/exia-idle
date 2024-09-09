import { IconMoon } from "@tabler/icons-react";
import { rem } from "@mantine/core";

function StatusBar() {
  return (
    <div className="h-[40px] bg-zinc-900 w-full flex items-center justify-center">
      <IconMoon stroke={1.5} color="white" />
    </div>
  );
}

export default StatusBar;
