import logo from "./logo.svg";
import "./App.css";
import { Greet, Greet2, Greet3 } from "./components/Greet";
import { Welcome, Welcome2 } from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import ClassClick from "./components/ClassClick";
import FunctionClick from "./components/FunctionClick";
import EventBind from "./components/EventBind";
import UserGreeting from "./components/UserGreeting";
import ParentComponent from "./components/ParentComponent";
import NameList from "./components/NameList";
import PersonList from "./components/PersonList";
import FragmentDemo from "./components/FragmentDemo";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bryan" nickname="Bry">
        <button>Visit Website</button>
        <p>Hello World! this is my paragraph</p>
      </Greet>
      <Greet name="Lillian" nickname="Lily" />
      <Greet2 name="Matthew" nickname="Matt">
        <button>Hello</button>
      </Greet2>
      <Greet3 name="Timothy" nickname="Tim" />
      <Welcome name="Bryan" nickname="Bry" />
      <Welcome name="Lillian" nickname="Lily" />
      <Welcome2 name="Matthew" nickname="Matt" />
      <Welcome2 name="Timothy" nickname="Tim" />
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <UserGreeting /> */}
      <ParentComponent />
      <NameList />
      <PersonList />
      <FragmentDemo />
    </div>
  );
}

export default App;
