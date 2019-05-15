import { connect } from "react-redux";
import { push } from "connected-react-router";
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
  currentPath: state.router.location.pathname
});

const mapDispatchToProps = dispatch => ({
  navigate: path => dispatch(push(path))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
