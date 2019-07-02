import { connect } from "react-redux";
import CreateEntry from "./create-entry";
import { createEntryAction, deleteEntryAction } from "../../actions";

const mapStateToProps = state => ({
  entry: state.entries.selectedEntry
});

const mapDispatchToProps = dispatch => ({
  createEntry: (entryData, history) =>
    dispatch(createEntryAction.createEntry(entryData, history)),
  deleteEntry: (id, history, isJournalPage) =>
    dispatch(deleteEntryAction.deleteEntry(id, history, isJournalPage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEntry);
