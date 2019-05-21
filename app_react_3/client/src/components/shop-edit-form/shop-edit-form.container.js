import { connect } from "react-redux";
import { saveShopForm, saveShopData } from "../../actions/saveShop";
import ShopEditForm from "./shop-edit-form";

const mapDispatchToProps = dispatch => ({
  onSaveShop: data => {
    dispatch(saveShopForm(data));
    dispatch(saveShopData());
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ShopEditForm);
