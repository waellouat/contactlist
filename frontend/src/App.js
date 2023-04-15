import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
<Route path='/' element={  }/>
<Route path='/list' element={ <ListContact/>} />
<Route path='/add' element={<AddContact/>} />
<Route path='/update/:id' element={ <UpdateContact/>}/>

</Routes>
    </div>
  );
}

export default App;
