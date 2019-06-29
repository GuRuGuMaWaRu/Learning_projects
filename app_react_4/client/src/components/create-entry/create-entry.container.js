import { connect } from "react-redux";
import CreateEntry from "./create-entry";
import { createEntryAction } from "../../actions";

const mapDispatchToProps = dispatch => ({
  createEntry: (entryData, history) =>
    dispatch(createEntryAction.createEntry(entryData, history))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateEntry);
