import "./Products.css";
import imgMaintenance from "../../assets/Images/maintenance.jpg";
const Products = () => {
  return (
    <div className="Products">
      <img
        src={imgMaintenance}
        alt="Imagen Mantenimiento"
        className="imgMaintenance"
      />
      <h1>Creando . . .</h1>
    </div>
  );
};

export default Products;
