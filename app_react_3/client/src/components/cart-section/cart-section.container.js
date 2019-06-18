import { connect } from "react-redux";
import CartSection from "./cart-section";
import { changeCartItemQty } from "../../actions/changerCartItemQty";

const mapStateToProps = state => ({
  items: state.cart.items
});

const mapDispatchToProps = dispatch => ({
  changeCartItemQty: qtyChangeData => dispatch(changeCartItemQty(qtyChangeData))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSection);
