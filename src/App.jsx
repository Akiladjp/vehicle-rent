import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { RentCar } from "./pages/RentCar";
import { ListCars } from "./pages/ListCars";
import { VisitPlaces } from "./pages/VisitPlaces";
import { WishList } from "./pages/WishList";
import { CustomeCare } from "./pages/CustomeCare";
import { Booking } from "./pages/Booking";
import { Footer } from "./components/Footer";
import { AboutUs } from "./pages/AboutUs";
import Loading from "./components/loading/Loading";
import { Login } from "./components/LoginSign/Login";
import { SignUp } from "./components/LoginSign/SignUp";
import { Profile } from "./pages/Profile";
import { VehiclePreview } from "./pages/VehiclePreview";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/rentcar" element={<RentCar />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/listcar" element={<ListCars />} />
        <Route path="/visitplace" element={<VisitPlaces />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/customecare" element={<CustomeCare />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vehiclepreview" element={<VehiclePreview />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
