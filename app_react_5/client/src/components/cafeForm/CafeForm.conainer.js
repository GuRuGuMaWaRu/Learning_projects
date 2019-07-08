import { connect } from "react-redux";
import {
  createCafeAction,
  deleteCafeAction,
  updateCafeAction
} from "../../actions";
import CafeForm from "./CafeForm";

const mapStateToProps = state => ({
  cafe: state.cafes.selectedCafe
});

const mapDispatchToProps = dispatch => ({
  createCafe: (data, history) =>
    dispatch(createCafeAction.createCafe(data, history)),
  deleteCafe: (id, isCafePage, history) =>
    dispatch(deleteCafeAction.deleteCafe(id, isCafePage, history)),
  updateCafe: (data, history) =>
    dispatch(updateCafeAction.updateCafe(data, history))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CafeForm);
