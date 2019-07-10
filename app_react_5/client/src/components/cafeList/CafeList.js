import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { CafeCard } from "../cafeCard";

const useStyles = makeStyles({
  list: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: "2rem"
  }
});

const CafeList = ({ history, cafes, getCafes, getCafe, deleteCafe }) => {
  useEffect(() => {
    getCafes();
  }, []);

  const classes = useStyles();
  const list = cafes.map((cafe, index) => (
    <CafeCard
      key={cafe._id}
      index={index}
      cafe={{ title: cafe.title, description: cafe.description }}
      handleEdit={() => getCafe(cafe._id, history)}
      handleDelete={() => deleteCafe(cafe._id, false)}
    />
  ));

  return (
    <>
      <Typography variant="h4">Cafe List</Typography>
      <div className={classes.list}>{list}</div>
    </>
  );
};

CafeList.propTypes = {
  cafes: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ),
  getCafes: PropTypes.func.isRequired,
  getCafe: PropTypes.func.isRequired,
  deleteCafe: PropTypes.func.isRequired
};

export default CafeList;
