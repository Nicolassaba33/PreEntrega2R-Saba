import { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer.jsx";
import { Link } from "react-router-dom";

// IMÁGENES
import imgProduct01 from "../../assets/Images/Product01.png";
import imgProduct02 from "../../assets/Images/Product02.png";
import imgProduct03 from "../../assets/Images/Product03.png";
import imgProduct04 from "../../assets/Images/Product04.png";
import imgProduct05 from "../../assets/Images/Product05.png";

const imageMap = {
  1: imgProduct01,
  2: imgProduct02,
  3: imgProduct03,
  4: imgProduct04,
  5: imgProduct05,
};

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const jsonUrl = "../../../products.json";

    axios
      .get(jsonUrl)
      .then((response) => {
        const data = response.data;
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error al cargar el JSON:", error);
      });
  }, []);

  const filteredProducts = products.filter((product) => product.id <= 5);

  return (
    <div className="UserSection">
      {filteredProducts.map((product) => (
        <Link to={`/detail/${product.id}`} key={product.id}>
          <ItemListContainer
            img={imageMap[product.id]}
            name={product.name}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  );
};

export default Home;
