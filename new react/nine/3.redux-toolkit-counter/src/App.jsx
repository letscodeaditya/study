import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import Header from './components/Header';
import Counter from './components/Counter';
import Button from './components/Buttons';
import { useSelector } from 'react-redux';
import PrivacyMsg from './components/PrivacyMsg';

function App() {

  const privacy = useSelector((store)=>store.privacy)

  return (
    <div class="px-4 py-5 my-5 text-center ">
    <Header/>
    <div class="col-lg-6 mx-auto">
      {privacy ? <PrivacyMsg/>: <Counter/>}
      <Button></Button>
    </div>
  </div>
  )
}

export default App
