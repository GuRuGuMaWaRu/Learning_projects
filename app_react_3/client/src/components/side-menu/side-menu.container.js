import { connect } from "react-redux";
import { loadShopNames } from "../../actions/loadShopNames";
import { selectShop } from "../../actions/selectShop";
import { highlightShop } from "../../actions/highlightShop";
import SideMenu from "./side-menu";

const mapStateToProps = state => ({
  shopNames: state.shopNames.names,
  highlighted: state.shopNames.highlighted
});

const mapDispatchToProps = dispatch => ({
  getShopNames: () => dispatch(loadShopNames()),
  selectShop: id => dispatch(selectShop(id)),
  highlightShop: id => dispatch(highlightShop(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
