import { connect } from "react-redux";
import { push } from "connected-react-router";
import { loadCartItems } from "../../actions/loadCartItems";
import Navigation from "./navigation";

const pages = [
  {
    path: "/",
    title: "Shopping"
  },
  {
    path: "/createstore",
    title: "Create Store"
  },
  {
    path: "/editstore",
    title: "Edit Store"
  },
  {
    path: "/cart",
    title: "Cart"
  }
];

const mapStateToProps = state => ({
  pages,
  cart: state.cart,
  currentPath: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  navigate: path => dispatch(push(path)),
  loadCartItems: () => dispatch(loadCartItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
