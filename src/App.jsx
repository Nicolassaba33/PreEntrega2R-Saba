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
import CategoryPages from "./pages/Category/CategoryPages";

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
          <Route path="/category/:categoryId" element={<CategoryPages />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
