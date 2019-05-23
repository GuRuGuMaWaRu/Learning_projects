import { connect } from "react-redux";
import { loadShopNames } from "../../actions/loadShopNames";
import { selectShop } from "../../actions/selectShop";
import SideMenu from "./side-menu";

const mapStateToProps = state => ({
  shopNames: state.shopNames
});

const mapDispatchToProps = dispatch => ({
  getShopNames: () => dispatch(loadShopNames()),
  selectShop: id => dispatch(selectShop(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
