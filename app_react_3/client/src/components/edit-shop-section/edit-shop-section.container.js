import { connect } from "react-redux";
import { updateShop } from "../../actions/updateShop";
import { deleteShop } from "../../actions/deleteShop";
import EditShopSection from "./edit-shop-section";

const mapStateToProps = state => ({
  isLoading: state.selectedShop.shopIsLoading,
  shopData: state.selectedShop.shopData
});

const mapDispatchToProps = dispatch => ({
  onUpdateShop: data => {
    dispatch(updateShop(data));
  },
  onDeleteShop: () => {
    dispatch(deleteShop());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditShopSection);
