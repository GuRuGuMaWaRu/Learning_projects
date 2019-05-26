import { connect } from "react-redux";
import { saveShop } from "../../actions/saveShop";
import ShopEditForm from "./shop-edit-form";

const mapStateToProps = state => ({
  isLoading: state.selectedShop.shopIsLoading,
  shopData: state.selectedShop.shopData
});

const mapDispatchToProps = dispatch => ({
  onSaveShop: data => {
    dispatch(saveShop(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShopEditForm);
