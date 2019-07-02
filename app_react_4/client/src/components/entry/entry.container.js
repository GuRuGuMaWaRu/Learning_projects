import { connect } from "react-redux";
import Entry from "./entry";
import { deleteEntryAction } from "../../actions";

const mapStateToProps = state => ({
  entry: state.entries.selectedEntry
});

const mapDispatchToProps = dispatch => ({
  deleteEntry: (id, history) =>
    dispatch(deleteEntryAction.deleteEntry(id, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Entry);
