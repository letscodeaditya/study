import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import AppName from './components/AppName'
import AddItem from './components/AddItem'
import ToDoWork from './components/ToDoWork'
import ErrorMsg from './components/ErrorMsg'
import TodoItemContextProvider from './store/items-store';


function App() {
 
  ///////////context api/////////

//important dont put those value in context which frequently changes bec if it does the whole components will re-render 
//so try to put constant value or less changing value so it will be accesseble to every components of this app but those who need only uses this context 
//we can send the context of state,methods which will be saved in ./store/items-store and all compnent can access this
  return (
    <>

    <TodoItemContextProvider>
    
    <div className='container'>
    <AppName></AppName>
    <AddItem ></AddItem>
    <ErrorMsg></ErrorMsg>
    <ToDoWork></ToDoWork>
    </div>
    
    </TodoItemContextProvider>
    </>
  )
}

export default App
