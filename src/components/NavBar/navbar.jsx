import { AppBar, Toolbar, Typography, Button, InputBase } from "@mui/material";
import { Link } from "react-router-dom";
import "./NavBar.css";
const navbar = () => {
  return (
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <Link to="/" className="nav-link">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "white",
              display: { xs: "none", sm: "block" },
            }}
          >
            Inicio
          </Typography>
        </Link>
        <Link to="/productos" className="nav-link">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "white",
              display: { xs: "none", sm: "block" },
            }}
          >
            Productos
          </Typography>
        </Link>
        <Link to="/tiendas" className="nav-link">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "white",
              display: { xs: "none", sm: "block" },
            }}
          >
            Tiendas
          </Typography>
        </Link>
        <Link to="/designers" className="nav-link">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "white",
              display: { xs: "none", sm: "block" },
            }}
          >
            Diseñadores
          </Typography>
        </Link>
        <div className="button-search">
          <InputBase
            className="input-base"
            placeholder="Buscar Productos"
            inputProps={{ "aria-label": "search" }}
          />
          <Button variant="outlined" color="inherit" type="submit">
            Buscar
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default navbar;
