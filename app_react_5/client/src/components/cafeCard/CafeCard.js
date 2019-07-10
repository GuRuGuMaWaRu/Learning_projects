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
  "@keyframes stagger": {
    "0%": {
      opacity: 0
    },
    "100%": {
      opacity: 1
    }
  },
  card: {
    maxWidth: 345,
    margin: "1rem 1rem 0 0",
    animationName: "$stagger",
    animationDuration: "350ms",
    animationDelay: props => `calc(${props.index} * 100ms)`,
    animationFillMode: "both",
    animationTimingFunction: "ease-in-out"
  },
  media: {
    height: 140
  }
});

const CafeCard = ({ cafe, index, handleDelete, handleEdit }) => {
  const props = { index };
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://picsum.photos/345/140"
          title={cafe.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cafe.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {cafe.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={handleEdit}>
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

CafeCard.propTypes = {
  cafe: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }),
  index: PropTypes.number.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default CafeCard;
