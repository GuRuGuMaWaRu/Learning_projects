import { connect } from "react-redux";
import Shop from "./shop";

const mapStateToProps = state => {
  return {
    isLoading: state.selectedShop.shopIsLoading,
    shop: state.selectedShop.shopData
  };
};

export default connect(mapStateToProps)(Shop);
