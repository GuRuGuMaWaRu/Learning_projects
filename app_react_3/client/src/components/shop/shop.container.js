import { connect } from "react-redux";
import { addToCart } from "../../actions/addToCart";
import Shop from "./shop";

const mapDispatchToProps = dispatch => ({
  handleAddToCart: itemId => dispatch(addToCart(itemId))
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
