import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "2rem"
  },
  entry: {
    padding: theme.spacing(3, 2),
    marginTop: "2rem"
  },
  entryBody: {
    margin: "2rem 0"
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const Entry = ({ history, entry, deleteEntry }) => {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography variant="h4">Entry View</Typography>
      <Paper className={classes.entry}>
        <Typography variant="h6">{entry.title}</Typography>
        <Typography className={classes.entryBody} variant="subtitle1">
          {moment(entry.date).format("DD-MM-YYYY, hh:mm:ss")}
        </Typography>
        <Typography className={classes.entryBody} variant="body1">
          {entry.body}
        </Typography>
        <div className={classes.buttons}>
          <Button variant="contained" color="primary">
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deleteEntry(entry._id, history)}
          >
            Delete
          </Button>
        </div>
      </Paper>
    </Container>
  );
};

Entry.propTypes = {
  entry: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  }),
  deleteEntry: PropTypes.func.isRequired
};

export default Entry;
