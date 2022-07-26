import { Counter } from "./components/Counter";
import { Input } from "./components/Input";
import { Toggle } from "./components/Toggle";
import "./style/style.css";
function App() {
  return (
    <>
    <h1 className="text-center">My First Mini App From React.js</h1>
      <div className="app w-50 mx-auto">
        <Counter />
        <Input />
        <Toggle />
      
      </div>
    </>
  );
}
export default App;
