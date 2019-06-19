import { connect } from "react-redux";
import SelectShopSection from "./select-shop-section";

const mapStateToProps = state => ({
  isLoading: state.selectedShop.shopIsLoading,
  shopData: state.selectedShop.shopData,
  currency: state.currency
});

export default connect(mapStateToProps)(SelectShopSection);
