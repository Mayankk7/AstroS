import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home';
import ID from './components/Home/ID';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element={<Landing/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path="/satid" element={<ID/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
