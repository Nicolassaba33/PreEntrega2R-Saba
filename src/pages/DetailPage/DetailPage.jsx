import React, { useState, useEffect } from "react";
import "./DetailPage.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import ImgPrepare from "../../assets/Images/Prepare.jpg";
const DetailPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const jsonUrl = "../../../products.json";

    axios
      .get(jsonUrl)
      .then((response) => {
        const data = response.data;

        const selectedProduct = data.find((item) => item.id === id);
        if (selectedProduct) {
          setProduct(selectedProduct);
        }
      })
      .catch((error) => {
        console.error("Error al cargar el JSON:", error);
      });
  }, [id]);

  return (
    <div className="Detail">
      <img src={ImgPrepare} alt="En preparacion" />
    </div>
  );
};

export default DetailPage;
