import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/ToDoItems";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const Items = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={Items}></TodoItems>
    </center>
  );
}

export default App;