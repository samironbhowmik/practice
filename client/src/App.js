import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Signin from './components/signin';
import Signup from './components/signup';
// import Home from './components/home';
import Upload from './components/upload';
import Postview from './components/postview';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Signin/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/home' element={<Upload/>} />
            <Route path='/postview' element={<Postview/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
