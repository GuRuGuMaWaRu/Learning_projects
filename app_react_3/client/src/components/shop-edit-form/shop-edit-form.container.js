import { connect } from "react-redux";
import { saveShop } from "../../actions/saveShop";
import ShopEditForm from "./shop-edit-form";

const mapDispatchToProps = dispatch => ({
  onSaveShop: data => {
    dispatch(saveShop(data));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(ShopEditForm);
