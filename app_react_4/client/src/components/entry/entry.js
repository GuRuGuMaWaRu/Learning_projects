import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    marginTop: "2rem"
  }
});

const Entry = ({ entry }) => {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4">{entry.title}</Typography>
    </Container>
  );
};

Entry.propTypes = {
  entry: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })
};

export default Entry;
