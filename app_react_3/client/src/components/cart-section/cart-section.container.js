import { connect } from "react-redux";
import CartSection from "./cart-section";

const mapStateToProps = state => ({
  items: state.cart.items
});

// const mapDispatchToProps = dispatch => ({

// })

export default connect(
  mapStateToProps,
  null
)(CartSection);
