import './App.css';
import { Routes, Route } from 'react-router-dom';
import Portum from './Pages/Portum';
import Kontakt from './Pages/Kontakt';
import Teenused from './Pages/Teenused';
import Kuidastoimida from './Pages/Kuidas-toimida';
import NavigationBar from './Components/NavigationBar';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="" element={<Portum></Portum>}></Route>
        <Route path="kuidas-toimida" element={<Kuidastoimida></Kuidastoimida>}></Route>
        <Route path="teenused" element={<Teenused></Teenused>}></Route>
        <Route path="kontakt" element={<Kontakt></Kontakt>}></Route>
      </Routes>
      {/* Footer */}
    </div>
  );
}

export default App;
