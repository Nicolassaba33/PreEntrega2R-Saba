import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENT
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/navbar";
import Portada from "./components/Portada/Portada";
import Footer from "./components/Footer/Footer";

//PAGES/
import Stores from "./pages/Stores/Stores";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Designers from "./pages/Designers/Designers";
import Account from "./pages/Account/Account";
import DetailPage from "./pages/DetailPage/DetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <NavBar />

        <Portada />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/productos" element={<Products />} />
          <Route path="/tiendas" element={<Stores />} />
          <Route path="/designers" element={<Designers />} />
          <Route path="/account" element={<Account />} />
          <Route path="detail/:id" element={<DetailPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
