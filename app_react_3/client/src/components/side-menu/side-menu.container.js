import { connect } from "react-redux";
import { loadShopNames } from "../../actions/loadShopNames";
import SideMenu from "./side-menu";

const mapStateToProps = state => ({
  shopNames: state.shopNames
});

const mapDispatchToProps = dispatch => ({
  getShopNames: () => dispatch(loadShopNames())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
