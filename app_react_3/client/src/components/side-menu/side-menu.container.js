import { connect } from "react-redux";
import SideMenu from "./side-menu";

const mapStateToProps = state => ({
  shops: state.shops.shops
});

const mapDispatchToProps = dispatch => ({
  getShops: () => dispatch(() => console.log("running"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
