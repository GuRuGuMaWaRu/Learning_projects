import { connect } from "react-redux";
import CartSection from "./cart-section";

const mapStateToProps = state => ({
  items: state.cart.items
});

export default connect(
  mapStateToProps,
  null
)(CartSection);
