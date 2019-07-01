import { connect } from "react-redux";
import Entry from "./entry";

const mapStateToProps = state => ({
  entry: state.entries.selectedEntry
});

export default connect(mapStateToProps)(Entry);
