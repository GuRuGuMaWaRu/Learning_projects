import { connect } from "react-redux";
import CartSection from "./cart-section";
import { changeCartItemQty } from "../../actions/changerCartItemQty";
import { deleteCartItem } from "../../actions/deleteCartItem";

const mapStateToProps = state => ({
  items: state.cart.items
});

const mapDispatchToProps = dispatch => ({
  changeCartItemQty: qtyChangeData =>
    dispatch(changeCartItemQty(qtyChangeData)),
  deleteCartItem: itemId => dispatch(deleteCartItem(itemId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSection);
