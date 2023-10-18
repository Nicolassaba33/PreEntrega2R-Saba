import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import ShoppingCartSharpIcon from "@mui/icons-material/ShoppingCartSharp";
import "./ItemListContainer.css";

const ItemListContainer = ({ img, name, price }) => {
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={img}
            alt="Products"
            className="custom-card-media"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography
              className="CardPrice"
              variant="body2"
              color="text.secondary"
            >
              ${price}
            </Typography>
            <Typography className="CartSharpIcon">
              <ShoppingCartSharpIcon fontSize="large" />
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ItemListContainer;
