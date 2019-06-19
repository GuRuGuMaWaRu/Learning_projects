import { connect } from "react-redux";
import { updateShop } from "../../actions/updateShop";
import { deleteShop } from "../../actions/deleteShop";
import { loadShopNames } from "../../actions/loadShopNames";
import EditShopSection from "./edit-shop-section";

const mapStateToProps = state => ({
  isLoading: state.selectedShop.shopIsLoading,
  shopData: state.selectedShop.shopData,
  currency: state.currency
});

const mapDispatchToProps = dispatch => ({
  onUpdateShop: data => {
    dispatch(updateShop(data));
  },
  onDeleteShop: shopId => {
    dispatch(deleteShop(shopId));
    dispatch(loadShopNames());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditShopSection);
