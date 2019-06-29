import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { getEntriesAction } from "../../actions";
import Journal from "./journal";

const mapStatToProps = state => ({
  entries: state.entries.entries
});

const mapDispatchToProps = dispatch => ({
  getEntries: () => dispatch(getEntriesAction.getEntries())
});

export default withRouter(
  connect(
    mapStatToProps,
    mapDispatchToProps
  )(Journal)
);
