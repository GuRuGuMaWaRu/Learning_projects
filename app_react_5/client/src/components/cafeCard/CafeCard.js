import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: "1rem 1rem 0 0"
  },
  media: {
    height: 140
  }
});

const CafeCard = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/345/140"
          title={item}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item} is a widespread group of squamate vegetables, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="secondary">
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

CafeCard.propTypes = {
  item: PropTypes.string.isRequired
};

export default CafeCard;
