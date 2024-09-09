import "./App.css";
import { Rnd } from "react-rnd";
import { Input } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
import StatusBar from "./components/StatusBar";
function App() {
  return (
    <MantineProvider defaultColorScheme="dark">
      <StatusBar />
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <Rnd
          default={{
            x: window.innerWidth / 2 - 160,
            y: window.innerHeight / 2 - 100,
            width: 320,
            height: 200,
          }}
          className="bg-zinc-70"
        >
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <Input placeholder="Input component" />
        </Rnd>
      </div>{" "}
    </MantineProvider>
  );
}

export default App;
