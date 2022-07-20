import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';

function App() {
  return (
    <Routes>
     <Route>
     <Route path="/" element={<Home />} />
     </Route>
    </Routes>
  );
}

export default App;
