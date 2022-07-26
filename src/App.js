import { Counter } from "./components/Counter";
import { Input } from "./components/Input";
import { Toggle } from "./components/Toggle";
import "./style/style.css";
function App() {
  return (
    <>
      <div className="app w-50 mx-auto">
        <Counter />
        <Input />
        <Toggle />
      
      </div>
    </>
  );
}
export default App;
