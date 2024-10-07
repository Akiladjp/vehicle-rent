import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { RentCar } from "./pages/RentCar";
import { ListCars } from "./pages/ListCars";
import { VisitPlaces } from "./pages/VisitPlaces";
import { WishList } from "./pages/WishList";
import { CustomeCare } from "./pages/CustomeCare";
import { LoginSign } from "./pages/LoginSign";
import { Booking } from "./pages/Booking";
import { Footer } from "./components/Footer";
import { AboutUs } from "./pages/AboutUs";
import Loading from "./components/loading/Loading";

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
        <Route path="/" element={<Home />} />
        <Route path="/rentcar" element={<RentCar />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/listcar" element={<ListCars />} />
        <Route path="/visitplace" element={<VisitPlaces />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/customecare" element={<CustomeCare />} />
        <Route path="/loginsign" element={<LoginSign />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;