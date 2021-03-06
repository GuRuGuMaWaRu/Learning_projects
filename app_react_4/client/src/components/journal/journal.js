import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "2rem"
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  listItem: {
    "&:nth-child(odd)": {
      backgroundColor: "#f5f9ff"
    }
  },
  listContents: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  }
}));

const JournalWithStyles = ({ history, entries, getEntry, deleteEntry }) => {
  const classes = useStyles();

  const entryList = entries.map(entry => (
    <ListItem
      className={classes.listItem}
      key={entry._id}
      alignItems="center"
      divider={true}
    >
      <ListItemText
        primary={
          <div className={classes.listContents}>
            <span>
              <b>Title:</b> {entry.title}
            </span>
            <span>
              <Button
                className={classes.button}
                variant="outlined"
                component="span"
                onClick={() => getEntry(entry._id, history)}
              >
                More
              </Button>
              <Button
                variant="outlined"
                component="span"
                color="secondary"
                onClick={() => deleteEntry(entry._id, null, true)}
              >
                Delete
              </Button>
            </span>
          </div>
        }
      />
    </ListItem>
  ));

  return (
    <Container className={classes.container}>
      <Typography variant="h4">Journal</Typography>
      <List className={classes.list}>{entryList}</List>
    </Container>
  );
};

class Journal extends React.Component {
  componentDidMount() {
    this.props.getEntries();
  }

  render() {
    return <JournalWithStyles {...this.props} />;
  }
}

Journal.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      _id: PropTypes.string,
      title: PropTypes.string,
      body: PropTypes.string
    })
  ),
  getEntries: PropTypes.func.isRequired,
  getEntry: PropTypes.func.isRequired,
  deleteEntry: PropTypes.func.isRequired
};

export default Journal;
