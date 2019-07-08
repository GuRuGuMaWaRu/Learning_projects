import React from "react";
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

const CafeList = () => {
  const classes = useStyles();
  const list = ["Tomato", "Apple", "Pear", "Orange", "Cucumber"].map(item => (
    <CafeCard key={item} item={item} />
  ));

  return (
    <>
      <Typography variant="h4">Cafe List</Typography>
      <div className={classes.list}>{list}</div>
    </>
  );
};

export default CafeList;
