import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import NotFound from './components/Home/NotFound/NotFound';
import Register from './components/Auth/Register';

function App() {
  return (
    <Routes>
     <Route>
     <Route path="/" element={<Home />} />
     <Route path="/register" element={<Register />} />
     <Route path="*" element={<NotFound />} />
     </Route>
    </Routes>
  );
}

export default App;
