import { connect } from "react-redux";
import CreateEntry from "./create-entry";
import {
  createEntryAction,
  deleteEntryAction,
  updateEntryAction
} from "../../actions";

const mapStateToProps = state => ({
  entry: state.entries.selectedEntry
});

const mapDispatchToProps = dispatch => ({
  createEntry: (entryData, history) =>
    dispatch(createEntryAction.createEntry(entryData, history)),
  deleteEntry: (id, history, isJournalPage) =>
    dispatch(deleteEntryAction.deleteEntry(id, history, isJournalPage)),
  updateEntry: (entryData, history) =>
    dispatch(updateEntryAction.updateEntry(entryData, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateEntry);
