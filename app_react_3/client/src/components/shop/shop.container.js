import { connect } from "react-redux";
import Shop from "./shop";

const mapStateToProps = state => ({
  shop: state.selectedShop
});

export default connect(mapStateToProps)(Shop);
