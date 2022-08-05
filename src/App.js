import "./App.css";
import {  Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/Home/NotFound/NotFound";
import Register from "./components/Auth/Register";
import Login from "./components/Auth/Login";
import Sidebar from "./components/Shared/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import AuthProvider from "./context/AuthProvider";
import Booking from "./components/Pages/Booking/Booking";
import BookingList from "./components/Pages/BookingList/BookingList";
import Review from "./components/Pages/Review/Review";
import AddService from "./components/Pages/AddService/AddService";
import MakeAdmin from "./components/Pages/MakeAdmin/MakeAdmin";

function App() {
  return (
    <AuthProvider>
     <Routes>
     <Route path="home" element={<Home />} />
     <Route path="register" element={<Register />} />
     <Route path="login" element={<Login />} />
     <Route path="dashboard" element={<Dashboard />}>
     <Route index element={<Booking />} />
     <Route path="bookingList" element={<BookingList />} />
     <Route path="review" element={<Review />} />
     <Route path="addService" element={<AddService />} />
     <Route path="makeAdmin" element={<MakeAdmin />} />
     
     </Route>
     <Route exact path="/" element={<Home />} />
      
          {/* <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NotFound />
          </Route> */}
       
      </Routes>
    </AuthProvider>
  );
}

export default App;
