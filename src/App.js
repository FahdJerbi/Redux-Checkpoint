import AddTask from "./components/Addtask";
import ListTask from "./components/ListTask";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ListTask />
      <AddTask />
    </div>
  );
}
