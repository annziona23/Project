
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Dash from './Components/Dash';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Dash />}></Route>
      <Route path='/add' element={<Form />}> </Route>
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
