import { connect } from "react-redux";
import { addToCart } from "../../actions/addToCart";
import Shop from "./shop";

const mapDispatchToProps = dispatch => ({
  handleAddToCart: (itemId, itemCost) => dispatch(addToCart(itemId, itemCost))
});

export default connect(
  null,
  mapDispatchToProps
)(Shop);
