import "./Account.css";
import imgMaintenance from "../../assets/Images/maintenance.jpg";

const Account = () => {
  return (
    <div className="Account">
      <img
        src={imgMaintenance}
        alt="Imagen Mantenimiento"
        className="imgMaintenance"
      />
      <h1>Creando . . .</h1>
    </div>
  );
};

export default Account;
