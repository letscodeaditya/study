import { About, Home, Navba, Page404, User, Userin, Channel, Company, Contact, Other, Protected, Profile, Login } from './t1';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      {/* we have to wrap the router in this wrapper class  */}
      <BrowserRouter>
        <Navba />
        <Routes>
          {/* path is url and element is what will be shown on that url(content it will direct to)  */}
          {/*  / this is for root or homepage of website */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* IF THE URL IS incorrect or notdefined yet here * mean anything beside about route value will go to element of this route */}
          <Route path='/*' element={<Page404 />} />
          {/* if we just want the wrong url go diectly to our homepage  */}
          <Route path='/*' element={<Navigate to='/' />} />
          {/* declaring user path  */}
          <Route path='/user' element={<User />} />
          {/* declaring params path  */}
          <Route path='/userin/:name' element={<Userin />} />

          {/* nested routing  */}
          <Route path='/contact/' element={<Contact />}> 
              <Route path='company' element={<Company />} />
              <Route path='channel' element={<Channel />} />
              <Route path='other' element={<Other />} />
              </Route>

          {/* protected routing      */}
          <Route path='/profile' element={<Protected Component={Profile}/>} />
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
