import { connect } from "react-redux";
import Shop from "./shop";

const mapStateToProps = state => ({
  isLoading: state.selectedShop.shopIsLoading,
  shopData: state.selectedShop.shopData
});

export default connect(mapStateToProps)(Shop);
