import { connect } from "react-redux";
import CafeList from "./CafeList";
import { getCafesAction, deleteCafeAction, getCafeAction } from "../../actions";

const mapStateToProps = state => ({
  cafes: state.cafes.allCafes
});

const mapDispatchToProps = dispatch => ({
  getCafes: () => dispatch(getCafesAction.getCafes()),
  getCafe: (id, history) => dispatch(getCafeAction.getCafe(id, history)),
  deleteCafe: (id, isCafePage) =>
    dispatch(deleteCafeAction.deleteCafe(id, isCafePage))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CafeList);
