import { connect } from "react-redux";
import CartSection from "./cart-section";
import { changeCartItemQty } from "../../actions/changerCartItemQty";
import { deleteCartItem } from "../../actions/deleteCartItem";
import { clearCart } from "../../actions/clearCart";

const mapStateToProps = state => ({
  items: state.cart.items,
  currency: state.currency
});

const mapDispatchToProps = dispatch => ({
  changeCartItemQty: qtyChangeData =>
    dispatch(changeCartItemQty(qtyChangeData)),
  deleteCartItem: itemId => dispatch(deleteCartItem(itemId)),
  clearCart: () => dispatch(clearCart())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartSection);
