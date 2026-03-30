
import './App.css'
import State from "./components/State";
import UseEffect from "./components/UseEffect";
import UseStateComponent from "./components/UseStateComponent";
import ClickEvent from "./components/ClickEvent";
import OnChangeEvent from "./components/OnChangeEvent";
import TwoStateComponent from "./components/TwoStateComponent";

function App() {

  return (
    <>
      <State />
      <UseEffect />
      <hr />
      <TwoStateComponent />
      <hr />

      <UseStateComponent />
      <hr />
      <ClickEvent />
      <OnChangeEvent />
    </>
  )
}

export default App
