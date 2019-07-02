import { connect } from "react-redux";
import CreateEntry from "./create-entry";
import { createEntryAction } from "../../actions";

const mapStateToProps = state => ({
  entry: state.entries.selectedEntry
});

const mapDispatchToProps = dispatch => ({
  createEntry: (entryData, history) =>
    dispatch(createEntryAction.createEntry(entryData, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEntry);
