import "./App.css";
import { MantineProvider } from "@mantine/core";
import StatusBar from "./components/StatusBar";
import Window from "./components/Window";
function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <StatusBar />
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <Window
          type="lore"
          title="You awaken"
          blurb="You awaken on a Star Ship"
        />
      </div>
    </MantineProvider>
  );
}

export default App;
