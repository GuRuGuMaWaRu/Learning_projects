import { connect } from "react-redux";
import { saveShop } from "../../actions/saveShop";
import CreateShopSection from "./create-shop-section";

const mapStateToProps = state => ({
  isLoading: state.selectedShop.shopIsLoading
});

const mapDispatchToProps = dispatch => ({
  onSaveShop: data => {
    dispatch(saveShop(data));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateShopSection);
