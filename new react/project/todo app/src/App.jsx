import './App.css'
import AppName from './components/AppName'
import Additem from './components/Additems';
import Todoitem1 from './components/Todoitems1';
import Todoitem2 from './components/Todoitems2';

function App() {
  return(
    <center className='todo-container'>
      <AppName></AppName>
      <Additem></Additem>

      <div className="items-conatiner">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>

    </center>
  );

}

export default App
