import React from "react";
import Sidebar from "../Shared/Sidebar";
import { Route, Routes, Switch, useRouteMatch } from "react-router-dom";
import Booking from "../Pages/Booking/Booking";
import App from "../../App";
import BookingList from "../Pages/BookingList/BookingList";
import Review from "../Pages/Review/Review";
import NotFound from "../Home/NotFound/NotFound";
import NotFounds from "../Home/NotFound/NotFounds";
import AddService from "../Pages/AddService/AddService";
import MakeAdmin from "../Pages/MakeAdmin/MakeAdmin";

const Dashboard = () => {
  // let { path } = useRouteMatch();
  return (
    <div className="flex gap-4">
      <div className="">
        <Sidebar />
      </div>

      <div className="basis-full">
      {/* <Switch>
        <Route path={`${path}/booking`}>
          <Booking />
        </Route>
        <Route path={`${path}/bookinglist`}>
          <BookingList />
        </Route>
        <Route path={`${path}/review`}>
          <Review />
        </Route>
        <Route path={`${path}/addService`}>
          <AddService />
        </Route>
        <Route path={`${path}/makeAdmin`}>
          <MakeAdmin />
        </Route>
        <Route path="*">
      <NotFounds />
     </Route>
      </Switch> */}
      </div>
      
    
    </div>
  );
};

export default Dashboard;
