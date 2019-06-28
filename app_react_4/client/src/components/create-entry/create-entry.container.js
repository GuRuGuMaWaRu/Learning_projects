import { connect } from "react-redux";
import CreateEntry from "./create-entry";
import { createEntryAction } from "../../actions";

const mapDispatchToProps = dispatch => ({
  createEntry: entryData => dispatch(createEntryAction.createEntry(entryData))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateEntry);
