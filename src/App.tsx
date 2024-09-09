import "./App.css";
import { Rnd } from "react-rnd";

function App() {
  return (
    <div className="bg-blue-500 w-[100vw] h-[100vh] flex items-center justify-center">
      <Rnd
        default={{
          x: window.innerWidth / 2 - 160,
          y: window.innerHeight / 2 - 100,
          width: 320,
          height: 200,
        }}
        className="bg-red-500"
      >
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </Rnd>
    </div>
  );
}

export default App;
