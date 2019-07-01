import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getEntriesAction, getEntryAction } from "../../actions";
import Journal from "./journal";

const mapStatToProps = state => ({
  entries: state.entries.entries
});

const mapDispatchToProps = dispatch => ({
  getEntries: () => dispatch(getEntriesAction.getEntries()),
  getEntry: id => dispatch(getEntryAction.getEntry(id))
});

export default withRouter(
  connect(
    mapStatToProps,
    mapDispatchToProps
  )(Journal)
);
