import { connect } from "react-redux";
import { addToCart } from "../../actions/addToCart";
import Shop from "./shop";

const mapDispatchToProps = dispatch => ({
  handleAddToCart: itemData => dispatch(addToCart(itemData))
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
