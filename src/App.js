import Todo from "./components/Todo";
function App() {
  return(
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Todo name = "Java" completed={true} id="todo-0"/>
      <Todo name ="Javascript" completed={false} id="todo-1"/>
      <Todo name="React" completed={false} id="todo-2"/>
    </div>
  );
}

export default App;
