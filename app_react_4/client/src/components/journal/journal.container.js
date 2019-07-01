import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  getEntriesAction,
  getEntryAction,
  deleteEntryAction
} from "../../actions";
import Journal from "./journal";

const mapStatToProps = state => ({
  entries: state.entries.entries
});

const mapDispatchToProps = dispatch => ({
  getEntries: () => dispatch(getEntriesAction.getEntries()),
  getEntry: (id, history) => dispatch(getEntryAction.getEntry(id, history)),
  deleteEntry: id => dispatch(deleteEntryAction.deleteEntry(id))
});

export default withRouter(
  connect(
    mapStatToProps,
    mapDispatchToProps
  )(Journal)
);
