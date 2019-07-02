import { connect } from "react-redux";
import Navbar from "./navbar";

const navLinks = [
  {
    name: "Journal",
    path: "/"
  },
  {
    name: "Add Entry",
    path: "/create"
  }
];

const mapStateToProps = () => ({
  navLinks
});

export default connect(mapStateToProps)(Navbar);
